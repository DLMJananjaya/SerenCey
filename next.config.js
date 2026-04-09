/** @type {import('next').NextConfig} */

  
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  devIndicators: false,
  output: 'export',
  images: { unoptimized: true },
  // If we are building for GitHub, add the folder name. 
  // If we are running locally, keep it empty.
  basePath: isProd ? '/SerenCey' : '',
  assetPrefix: isProd ? '/SerenCey' : '',
};
module.exports = nextConfig;