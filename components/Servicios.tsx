"use client";
import ServiceCard from './ServiceCard';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

// Importa imágenes de servicios desde la carpeta public. Estos archivos
// son placeholders (.webp) que puedes reemplazar por imágenes reales.
import service1 from '../public/service-1.webp';
import service2 from '../public/service-2.webp';
import service3 from '../public/service-3.webp';
import service4 from '../public/service-4.webp';

/**
 * Lista de servicios disponibles. Cada servicio tiene un título y una
 * imagen. Ajusta o amplía este arreglo para añadir más servicios o
 * modificar los existentes.
 */
const services = [
  {
    image: service1,
    title: 'Transporte aéreo',
    href: '#contacto',
  },
  {
    image: service2,
    title: 'Transporte terrestre',
    href: '#contacto',
  },
  {
    image: service3,
    title: 'Gestión de documentos',
    href: '#contacto',
  },
  {
    image: service4,
    title: 'Acompañamiento personalizado',
    href: '#contacto',
  },
];

/**
 * Sección Servicios. Muestra un grid responsive con tarjetas que
 * presentan los distintos servicios de la empresa. Utiliza un título
 * reutilizable y compone las tarjetas con ServiceCard.
 */
const Servicios: React.FC = () => {
  return (
    <section id="servicios" className="py-12 px-4 md:px-8 lg:px-16">
      <SectionTitle title="Servicios" id="servicios" />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Servicios;