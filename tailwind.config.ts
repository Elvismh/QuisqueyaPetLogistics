import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS configuration. Ajusta el paths para que Tailwind
 * escanee los directorios de la aplicación y los componentes para
 * generar las clases utilitarias necesarias.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      // Personaliza aquí variables de Tailwind (colores, tamaños, etc.)
    },
  },
  plugins: [],
};

export default config;