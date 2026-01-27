import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Pro statický export
  },
  trailingSlash: true, // Pro lepší kompatibilitu s hostingem
};

export default nextConfig;
