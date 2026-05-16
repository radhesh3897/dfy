import Image from "next/image";

const proofLogos = [
  {
    name: "Client logo 01",
    src: "/logos/processed/326783019-703457867948060-239923304616414274-n-dfy-gray-web-256.png",
  },
  {
    name: "Client logo 02",
    src: "/logos/processed/image-1-dfy-gray-web-256.png",
  },
  {
    name: "NMIMS",
    src: "/logos/processed/narsee-monjee-institute-of-management-studies-logo-dfy-gray-web-256.png",
  },
  {
    name: "Reliance Animation Academy",
    src: "/logos/processed/reliance-animation-logo-dfy-gray-web-256.png",
  },
  {
    name: "Client logo 03",
    src: "/logos/processed/untitled-design-1-dfy-gray-web-256.png",
  },
  {
    name: "Hobfit",
    src: "/logos/processed/hobfit-logo-web-256.png",
  },
  {
    name: "Muffynn",
    src: "/logos/processed/muffynn-logo-web-256.png",
  },
  {
    name: "Stock Ladder",
    src: "/logos/processed/stock-ladder-logo-web-256.png",
  },
  {
    name: "Talent Z",
    src: "/logos/processed/talentz-logo-web-256.png",
  },
];

const marqueeLogos = [...proofLogos, ...proofLogos];
const mobileLogoRows = [
  [...proofLogos.slice(0, Math.ceil(proofLogos.length / 2)), ...proofLogos.slice(0, Math.ceil(proofLogos.length / 2))],
  [...proofLogos.slice(Math.ceil(proofLogos.length / 2)), ...proofLogos.slice(Math.ceil(proofLogos.length / 2))],
];

export function ProofStrip() {
  return (
    <section className="border-y border-[#e1e5ec] bg-white">
      <div className="container-wide grid min-h-[160px] items-center gap-8 py-8 lg:grid-cols-[340px_minmax(0,1fr)]">
        <p className="mx-auto max-w-[320px] text-center text-[1.12rem] font-semibold uppercase leading-7 tracking-[0.025em] text-[#164E50] sm:max-w-none sm:text-xl sm:leading-8 lg:mx-0 lg:max-w-[320px] lg:text-left lg:text-lg">
          WORKED WITH <span className="text-[#4fae45]">100+</span> BRANDS ACROSS THE GLOBE
        </p>
        <div className="overflow-hidden">
          <div className="space-y-3 sm:hidden">
            {mobileLogoRows.map((row, rowIndex) => (
              <div
                key={`mobile-proof-row-${rowIndex}`}
                className={`logo-marquee-track gap-4 ${rowIndex === 0 ? "logo-marquee-left-slow" : "logo-marquee-right-slow"}`}
                style={{ animationDuration: "42s" }}
              >
                {row.map((logo, index) => (
                  <div key={`${logo.name}-mobile-${rowIndex}-${index}`} className="flex h-16 w-28 shrink-0 items-center justify-center px-1.5">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={192}
                      height={112}
                      className="h-auto max-h-14 w-full object-contain opacity-80"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="logo-marquee-track logo-marquee-right-slow !hidden gap-7 sm:!flex lg:gap-8">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-24 w-[184px] shrink-0 items-center justify-center px-3 lg:w-[176px]"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={192}
                  height={112}
                  className="h-auto max-h-20 w-full object-contain opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
