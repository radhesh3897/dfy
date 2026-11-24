import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/results/tranzission", destination: "/results/nmims", permanent: true }];
  },
  allowedDevOrigins: ["192.168.29.220"],
};

export default nextConfig;
