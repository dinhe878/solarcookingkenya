/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export to the `out/` directory
  output: "export",
  // Helpful for static hosting on Apache/Nginx without custom rewrites
  trailingSlash: true,
  // Disable Next/Image optimization for static export (in case it's used)
  images: { unoptimized: true },
};

export default nextConfig;
