/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/voicebot',
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
};

export default nextConfig;
