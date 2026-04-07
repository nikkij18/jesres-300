import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dylgawidxrgptktapsem.supabase.co',
      },
    ],
  },
};

export default nextConfig;
