/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/TimeTravel-Agency-Webapp-Interactive',
  assetPrefix: '/TimeTravel-Agency-Webapp-Interactive/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
