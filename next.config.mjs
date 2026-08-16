/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Safe default: no remote hosts required; all visuals are CSS/SVG driven.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;