/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    formats: ['image/webp'],
  },

  logging: {
    fetches: { fullUrl: true },
  },
};

module.exports = nextConfig;
