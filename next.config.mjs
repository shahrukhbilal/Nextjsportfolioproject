/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.ibb.co",        // ✅ ImgBB direct images
      "i.pinimg.com",
      "drive.google.com",
      "collection.cloudinary.com" ,
     "res.cloudinary.com"
    ],
  },
};

export default nextConfig;
