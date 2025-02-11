import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  /* config options here */
  alias: {
    '/@/': path.resolve(__dirname, './'),
  },
}

export default nextConfig
