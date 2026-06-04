import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "landing.ferreinnova.com" },
      { protocol: "https", hostname: "flutter.dev" },
      { protocol: "https", hostname: "is1-ssl.mzstatic.com" },
      { protocol: "https", hostname: "www.spaceappschallenge.org" },
      { protocol: "https", hostname: "filpro.infile.com" },
    ],
  },
};

export default nextConfig;
