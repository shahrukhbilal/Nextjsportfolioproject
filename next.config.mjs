/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",        // ✅ ImgBB direct images
      "i.pinimg.com",    // ✅ Pinterest images
    ],
  },
};

export default nextConfig;
