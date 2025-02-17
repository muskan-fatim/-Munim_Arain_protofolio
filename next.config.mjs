/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
  domains:["cdn.sanity.io","media-hosting.imagekit.io"]
    },
    eslint:{
        ignoreDuringBuilds:true
    },
   
};

export default nextConfig;
