/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["bcc-prod-bucket.s3-ap-south-1.amazonaws.com"],
  },
};

module.exports = nextConfig;
