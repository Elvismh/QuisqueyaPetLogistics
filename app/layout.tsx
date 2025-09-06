import type { Metadata } from 'next';
import './globals.css';

/**
 * Metadata global para la aplicación. Ajusta el título y la descripción
 * que aparecerán en las etiquetas HTML head de todas las páginas.
 */
export const metadata: Metadata = {
  title: 'Quisqueya Pet Logistics',
  description: 'Logística aérea y terrestre para mascotas.',
};

/**
 * El componente RootLayout envuelve toda la aplicación Next.js.
 * Coloca aquí elementos persistentes como la tipografía global o un
 * contenedor de layout general. Utiliza clases de Tailwind para
 * definir estilos globales, p.ej. color de fondo y texto por defecto.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}