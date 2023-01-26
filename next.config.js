/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // NOTE: these are needed due to the way github pages' url structure works 
  basePath: '/next-portfolio-site',
  assetPrefix: '/next-portfolio-site/',
}

module.exports = nextConfig
