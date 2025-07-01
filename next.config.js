/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'static.cdnlogo.com',
      'assets.vercel.com',
      'avatars.githubusercontent.com',
      'aceternity.com',
      'randomuser.me'
    ]
  }
};

module.exports = nextConfig;
