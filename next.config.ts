/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', // Default HTTPS port (443), no need to specify
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '', // Default HTTPS port (443)
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;