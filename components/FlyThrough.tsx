"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FlyThroughProps {
  /**
   * Contenido a animar.
   */
  children: ReactNode;
  /**
   * Clave única para que Framer Motion detecte el cambio de contenido.
   */
  slideKey: string | number;
}

/**
 * Animación de transición para el texto del hero. Utiliza Framer Motion
 * para dar la sensación de que el texto “vuela” dentro y fuera cuando
 * cambian las diapositivas. Ajusta la duración y la dirección de la
 * animación según sea necesario.
 */
const FlyThrough: React.FC<FlyThroughProps> = ({ children, slideKey }) => {
  return (
    <motion.div
      key={slideKey}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center text-center space-y-4"
    >
      {children}
    </motion.div>
  );
};

export default FlyThrough;