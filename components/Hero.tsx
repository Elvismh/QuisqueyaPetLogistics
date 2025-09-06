"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import FlyThrough from './FlyThrough';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Importación de las imágenes para el carrusel.
import hero1 from '../public/hero-1.webp';
import hero2 from '../public/hero-2.webp';
import hero3 from '../public/hero-3.webp';

interface Slide {
  image: any;
  title: string | null;
  subtitle: string | null;
  microcopy?: string;
}

/**
 * Definición del contenido de cada slide del Hero. Puedes ajustar
 * libremente los textos y microcopy según las necesidades de la marca.
 */
const slides: Slide[] = [
  {
    image: hero1,
    title: 'LOGÍSTICA AÉREA Y TERRESTRE',
    subtitle: 'Conectamos tu mascota con el mundo',
  },
  {
    image: hero2,
    title: '✈️ + 🐾 Rutas y cuidado premium',
    subtitle: 'Transporte nacional e internacional, gestión de documentos y acompañamiento en cada paso.',
  },
  {
    image: hero3,
    title: null,
    subtitle: null,
    microcopy: 'Atención 24/7 y seguimiento en tiempo real',
  },
];

/**
 * Componente Hero que muestra un slider con animaciones suaves. La
 * propiedad speed controla la duración de las transiciones y
 * autoplay.delay define el tiempo en pantalla de cada slide. Los
 * textos se animan con el componente FlyThrough.
 */
const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative w-full h-screen flex flex-col">
      {/* Carrusel de imágenes */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        speed={2000}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt="Hero background"
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
              />
              {/* Overlay sutil con degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Contenedor de textos y botones centrado */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 px-4">
        <AnimatePresence mode="wait">
          {slides.map((slide, idx) => {
            if (idx !== activeIndex) return null;
            return (
              <FlyThrough key={idx} slideKey={idx}>
                {slide.title && (
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
                    {slide.title}
                  </h1>
                )}
                {slide.subtitle && (
                  <p className="text-lg sm:text-xl md:text-2xl text-white max-w-xl mx-auto">
                    {slide.subtitle}
                  </p>
                )}
                {slide.microcopy && (
                  <p className="text-base sm:text-lg md:text-xl text-white mt-2">
                    {slide.microcopy}
                  </p>
                )}
                {/* Botones de llamada a la acción */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="#contacto"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    Solicitar cotización
                  </Link>
                    {/* Mostrar ambos botones en las slides 1 y 2; en la 3 sólo CTA de cotización */}
                  {idx < 2 && (
                    <Link
                      href="#requisitos"
                      className="px-6 py-3 bg-white/90 text-gray-900 font-medium rounded-md hover:bg-white/80 transition-colors flex items-center justify-center"
                    >
                      Ver requisitos
                    </Link>
                  )}
                </div>
              </FlyThrough>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;