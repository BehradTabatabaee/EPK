/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'epk.storage.iran.liara.space',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }