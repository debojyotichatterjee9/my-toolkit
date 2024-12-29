import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
        pathname: '/images/stock/*',
      },
    ],
  },
};

export default MillionLint.next({
  enabled: true,
  rsc: true
})(nextConfig);
