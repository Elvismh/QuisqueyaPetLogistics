import { FC } from 'react';

interface SectionTitleProps {
  /**
   * Título visible de la sección.
   */
  title: string;
  /**
   * Identificador opcional para enlazar mediante anclajes (#id).
   */
  id?: string;
}

/**
 * Componente reutilizable para mostrar títulos de secciones en la página.
 * Ajusta el tamaño y el peso de fuente con clases de Tailwind.
 */
const SectionTitle: FC<SectionTitleProps> = ({ title, id }) => (
  <h2
    id={id}
    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
  >
    {title}
  </h2>
);

export default SectionTitle;