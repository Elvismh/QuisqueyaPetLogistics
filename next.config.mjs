/**
 * @type {import('next').NextConfig}
 *
 * La configuración de Next.js especifica los formatos de imagen
 * soportados para aprovechar formatos modernos como AVIF y WebP.
 */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;