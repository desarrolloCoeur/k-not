/** @type {import('next').NextConfig} */
const nextConfig = {
/*   output : 'export',
  trailingSlash : true,
  basePath : '/knot',
  images : {unoptimized : true}, */
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
