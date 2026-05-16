const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

const INPUT_DIR = "D:\\client logo";
const OUTPUT_DIR = path.resolve(__dirname, "..", "public", "logos", "processed");
const SUPPORTED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg"]);
const TARGET_GRAY = { r: 0x4b, g: 0x55, b: 0x63 };
const ALPHA_VISIBLE_THRESHOLD = 8;

function slugify(value) {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "logo";
}

function colorDistance(a, b) {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;

  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function sampleAverageColor(data, width, height, xStart, yStart, sampleSize) {
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  const xEnd = Math.min(width, xStart + sampleSize);
  const yEnd = Math.min(height, yStart + sampleSize);

  for (let y = Math.max(0, yStart); y < yEnd; y += 1) {
    for (let x = Math.max(0, xStart); x < xEnd; x += 1) {
      const offset = (y * width + x) * 4;

      if (data[offset + 3] > 240) {
        r += data[offset];
        g += data[offset + 1];
        b += data[offset + 2];
        count += 1;
      }
    }
  }

  if (count === 0) {
    return null;
  }

  return {
    r: r / count,
    g: g / count,
    b: b / count,
  };
}

function detectBackgroundColor(data, width, height, hadAlpha) {
  const sampleSize = Math.max(4, Math.min(24, Math.floor(Math.min(width, height) * 0.06)));
  const samples = [
    sampleAverageColor(data, width, height, 0, 0, sampleSize),
    sampleAverageColor(data, width, height, width - sampleSize, 0, sampleSize),
    sampleAverageColor(data, width, height, 0, height - sampleSize, sampleSize),
    sampleAverageColor(data, width, height, width - sampleSize, height - sampleSize, sampleSize),
  ].filter(Boolean);

  if (samples.length < 3) {
    return null;
  }

  const background = {
    r: samples.reduce((sum, color) => sum + color.r, 0) / samples.length,
    g: samples.reduce((sum, color) => sum + color.g, 0) / samples.length,
    b: samples.reduce((sum, color) => sum + color.b, 0) / samples.length,
  };

  const maxSpread = Math.max(...samples.map((sample) => colorDistance(sample, background)));
  const isLightBackground = background.r > 225 && background.g > 225 && background.b > 225;

  if (maxSpread > 24) {
    return null;
  }

  if (!hadAlpha || isLightBackground) {
    return background;
  }

  return null;
}

function removeFlatBackground(data, background) {
  if (!background) {
    return;
  }

  const isLightBackground = background.r > 225 && background.g > 225 && background.b > 225;
  const threshold = isLightBackground ? 46 : 28;
  const feather = isLightBackground ? 36 : 22;

  for (let offset = 0; offset < data.length; offset += 4) {
    if (data[offset + 3] <= ALPHA_VISIBLE_THRESHOLD) {
      continue;
    }

    const distance = colorDistance(
      {
        r: data[offset],
        g: data[offset + 1],
        b: data[offset + 2],
      },
      background,
    );

    if (distance <= threshold) {
      data[offset + 3] = 0;
    } else if (distance <= threshold + feather) {
      const keepRatio = (distance - threshold) / feather;
      data[offset + 3] = Math.round(data[offset + 3] * keepRatio);
    }
  }
}

function recolorVisiblePixels(data) {
  for (let offset = 0; offset < data.length; offset += 4) {
    if (data[offset + 3] <= ALPHA_VISIBLE_THRESHOLD) {
      data[offset] = 0;
      data[offset + 1] = 0;
      data[offset + 2] = 0;
      data[offset + 3] = 0;
      continue;
    }

    data[offset] = TARGET_GRAY.r;
    data[offset + 1] = TARGET_GRAY.g;
    data[offset + 2] = TARGET_GRAY.b;
  }
}

function findVisibleBounds(data, width, height) {
  let left = width;
  let top = height;
  let right = -1;
  let bottom = -1;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const alpha = data[(y * width + x) * 4 + 3];

      if (alpha > ALPHA_VISIBLE_THRESHOLD) {
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }

  if (right < left || bottom < top) {
    return null;
  }

  return {
    left,
    top,
    width: right - left + 1,
    height: bottom - top + 1,
  };
}

async function makeCenteredCanvas(source, canvasSize, outputPath) {
  const padding = Math.round(canvasSize * 0.18);
  const maxLogoSize = canvasSize - padding * 2;
  const resizedBuffer = await sharp(source.data, {
    raw: {
      width: source.width,
      height: source.height,
      channels: 4,
    },
  })
    .resize({
      width: maxLogoSize,
      height: maxLogoSize,
      fit: "inside",
      kernel: "lanczos3",
      withoutEnlargement: false,
    })
    .png()
    .toBuffer();

  const resizedMeta = await sharp(resizedBuffer).metadata();
  const left = Math.round((canvasSize - resizedMeta.width) / 2);
  const top = Math.round((canvasSize - resizedMeta.height) / 2);

  return sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resizedBuffer, left, top }])
    .png({
      adaptiveFiltering: true,
      compressionLevel: 9,
      effort: 10,
      palette: true,
      colors: 64,
    })
    .toFile(outputPath);
}

async function makeCenteredWebp(source, canvasSize, outputPath) {
  const padding = Math.round(canvasSize * 0.18);
  const maxLogoSize = canvasSize - padding * 2;
  const resizedBuffer = await sharp(source.data, {
    raw: {
      width: source.width,
      height: source.height,
      channels: 4,
    },
  })
    .resize({
      width: maxLogoSize,
      height: maxLogoSize,
      fit: "inside",
      kernel: "lanczos3",
      withoutEnlargement: false,
    })
    .png()
    .toBuffer();

  const resizedMeta = await sharp(resizedBuffer).metadata();
  const left = Math.round((canvasSize - resizedMeta.width) / 2);
  const top = Math.round((canvasSize - resizedMeta.height) / 2);

  return sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resizedBuffer, left, top }])
    .webp({
      alphaQuality: 100,
      effort: 6,
      quality: 88,
      smartSubsample: true,
    })
    .toFile(outputPath);
}

async function makeOriginalSize(source, outputPath) {
  return sharp(source.fullData, {
    raw: {
      width: source.fullWidth,
      height: source.fullHeight,
      channels: 4,
    },
  })
    .png({
      adaptiveFiltering: true,
      compressionLevel: 9,
      effort: 10,
      palette: true,
      colors: 64,
    })
    .toFile(outputPath);
}

async function prepareLogo(inputPath) {
  const metadata = await sharp(inputPath, {
    density: 384,
    limitInputPixels: false,
  }).metadata();
  const hadAlpha = Boolean(metadata.hasAlpha);
  const raw = await sharp(inputPath, {
    density: 384,
    limitInputPixels: false,
  })
    .rotate()
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const fullData = Buffer.from(raw.data);
  const { width, height } = raw.info;
  const background = detectBackgroundColor(fullData, width, height, hadAlpha);

  removeFlatBackground(fullData, background);
  recolorVisiblePixels(fullData);

  const bounds = findVisibleBounds(fullData, width, height);

  if (!bounds) {
    throw new Error("No visible logo pixels found after normalization.");
  }

  const trimmed = await sharp(fullData, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .extract(bounds)
    .raw()
    .toBuffer({ resolveWithObject: true });

  return {
    data: trimmed.data,
    width: trimmed.info.width,
    height: trimmed.info.height,
    fullData,
    fullWidth: width,
    fullHeight: height,
  };
}

async function processFile(file, slug) {
  const source = await prepareLogo(file.fullPath);
  const pngOutputs = [
    { filename: `${slug}-dfy-gray-512.png`, write: (outputPath) => makeCenteredCanvas(source, 512, outputPath) },
    { filename: `${slug}-dfy-gray-web-256.png`, write: (outputPath) => makeCenteredCanvas(source, 256, outputPath) },
    { filename: `${slug}-dfy-gray-original-size.png`, write: (outputPath) => makeOriginalSize(source, outputPath) },
  ];
  const optionalWebpOutputs = [
    {
      filename: `${slug}-dfy-gray-512.webp`,
      compareTo: `${slug}-dfy-gray-512.png`,
      write: (outputPath) => makeCenteredWebp(source, 512, outputPath),
    },
    {
      filename: `${slug}-dfy-gray-web-256.webp`,
      compareTo: `${slug}-dfy-gray-web-256.png`,
      write: (outputPath) => makeCenteredWebp(source, 256, outputPath),
    },
  ];
  const generated = [];

  for (const output of pngOutputs) {
    const outputPath = path.join(OUTPUT_DIR, output.filename);
    await output.write(outputPath);
    generated.push(output.filename);
  }

  for (const output of optionalWebpOutputs) {
    const outputPath = path.join(OUTPUT_DIR, output.filename);
    const comparisonPath = path.join(OUTPUT_DIR, output.compareTo);

    await output.write(outputPath);

    const [webpStats, pngStats] = await Promise.all([
      fs.stat(outputPath),
      fs.stat(comparisonPath),
    ]);

    if (webpStats.size < pngStats.size) {
      generated.push(output.filename);
    } else {
      await fs.rm(outputPath, { force: true });
    }
  }

  return generated;
}

async function getInputFiles() {
  try {
    const entries = await fs.readdir(INPUT_DIR, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => {
        const extension = path.extname(entry.name).toLowerCase();

        return {
          name: entry.name,
          extension,
          fullPath: path.join(INPUT_DIR, entry.name),
        };
      });
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(`Input folder missing: ${INPUT_DIR}`);
    }

    throw error;
  }
}

async function main() {
  const files = await getInputFiles();
  const skipped = [];
  const processed = [];
  const outputs = [];
  const slugCounts = new Map();

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const file of files) {
    if (!SUPPORTED_EXTENSIONS.has(file.extension)) {
      skipped.push(`${file.name} - unsupported file type`);
      continue;
    }

    const baseSlug = slugify(path.basename(file.name, file.extension));
    const count = slugCounts.get(baseSlug) || 0;
    slugCounts.set(baseSlug, count + 1);
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;

    try {
      const generated = await processFile(file, slug);
      processed.push(file.name);
      outputs.push(...generated);
      console.log(`Processed: ${file.name}`);
      generated.forEach((filename) => console.log(`  -> ${filename}`));
    } catch (error) {
      skipped.push(`${file.name} - ${error.message}`);
      console.warn(`Skipped: ${file.name}`);
      console.warn(`  ${error.message}`);
    }
  }

  console.log("");
  console.log("Client logo processing summary");
  console.log("------------------------------");
  console.log(`Input folder: ${INPUT_DIR}`);
  console.log(`Output folder: ${OUTPUT_DIR}`);
  console.log(`Files found: ${files.length}`);
  console.log(`Files processed: ${processed.length}`);
  console.log(`Files skipped: ${skipped.length}`);

  if (skipped.length > 0) {
    console.log("");
    console.log("Skipped files:");
    skipped.forEach((item) => console.log(`- ${item}`));
  }

  if (outputs.length > 0) {
    console.log("");
    console.log("Output files generated:");
    outputs.forEach((filename) => console.log(`- ${filename}`));
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
