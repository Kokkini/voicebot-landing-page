/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/voicebot-landing-page',
  assetPrefix: '/voicebot-landing-page/',
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
};

export default nextConfig;
