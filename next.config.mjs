/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // frezamajithia.github.io is a USER page, so it serves from the domain root.
  // (If you ever rename this to a project repo like "my-portfolio", you'd add
  // basePath: '/my-portfolio' here — but you don't need that for a user page.)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
