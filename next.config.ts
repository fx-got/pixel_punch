/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <--- to jest kluczowe
  images: {
    unoptimized: true, // jeśli używasz <Image />, to to pomaga przy static export
  },
};

export default nextConfig;
