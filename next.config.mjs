const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // <CHANGE> Force cache invalidation for CSS
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
  },
}

export default nextConfig
