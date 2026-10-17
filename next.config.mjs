/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack SVG handling (stable API in Next.js 15.3+)
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
