import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, 
  },
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.unimeduberlandia.coop.br",
        pathname: "/portal/wp-content/uploads/**",
      },
    ],
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Login",
        permanent: true,
      },
    ];
  },
  // output: 'export',

  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;
