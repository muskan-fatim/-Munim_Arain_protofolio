/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
  domains:["cdn.sanity.io","media-hosting.imagekit"]
    },
    eslint:{
        ignoreDuringBuilds:true
    }
};

export default nextConfig;
