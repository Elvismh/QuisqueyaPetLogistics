"use client";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface Service {
  /** Ruta de la imagen de fondo (.webp) ubicada en /public. */
  image: StaticImageData;
  /** Título visible del servicio. */
  title: string;
  /** Enlace opcional para el botón “Más”. */
  href?: string;
}

/**
 * Tarjeta de servicio. Incluye una imagen de fondo, un título y un enlace
 * opcional para mostrar más información. Incorpora efectos de hover
 * similares a los de ALK: zoom de la imagen y elevación de la tarjeta.
 */
const ServiceCard: React.FC<Service> = ({ image, title, href }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
      />
      {/* Overlay con degradado para asegurar contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 transition-opacity duration-700 group-hover:bg-black/50" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        {href ? (
          <Link
            href={href}
            className="inline-block mt-auto px-3 py-2 text-sm font-medium text-white bg-blue-600/80 backdrop-blur-md rounded-md hover:bg-blue-700 transition-colors"
          >
            Más
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceCard;