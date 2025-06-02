/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/ru',
            permanent: true,
          }
        ]
      },
};


export default nextConfig;