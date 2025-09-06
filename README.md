# Quisqueya Pet Logistics Landing

Este proyecto es una plantilla completa para la landing page de **Quisqueya Pet Logistics** construida con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**. La página clona el look & feel de la portada de ALK Global Logistics con un hero slider animado, secciones de servicios y requisitos por destino.

## Características principales

- **Hero slider** con tres imágenes (`.webp`) y textos independientes, animaciones de entrada y salida tipo “fly‑through” usando Framer Motion y transición de diapositivas con Swiper.js (velocidad de 2000 ms y `autoplay.delay` de 7000 ms).
- **Servicios**: rejilla responsive de tarjetas con imágenes `.webp`, títulos y botón “Más” con efectos de hover (zoom, elevación y parallax).
- **Requisitos**: sección con acordeones por destino (USA, UE, Latinoamérica/Caribe) que muestran listas de documentos habituales.
- **Navbar**: fija en la parte superior con enlaces a `#servicios`, `#requisitos`, `#preguntas` y botón “Cotiza” que apunta a `#contacto` (para que añadas más adelante un formulario de cotización). Incluye versión móvil con menú hamburguesa.
- **Imágenes optimizadas**: uso de **next/image** y configuración de formatos `AVIF` y `WebP` en `next.config.mjs`.
- **Responsivo y accesible**: estilos adaptables a distintos tamaños de pantalla, colores con buen contraste, controles de acordeón accesibles (`aria-expanded` y `aria-controls`), navegación con teclado y etiquetas semánticas.

## Estructura del proyecto

```
quisqueya-pet-logistics/
├── app/
│   ├── layout.tsx       # Layout global, importa estilos y define metadata
│   ├── page.tsx         # Página principal con Hero, Servicios y Requisitos
│   └── globals.css      # Importa Tailwind y estilos de Swiper
├── components/
│   ├── Hero.tsx         # Carrusel con animaciones y CTA
│   ├── FlyThrough.tsx   # Animación de texto con Framer Motion
│   ├── Navbar.tsx       # Barra de navegación responsive
│   ├── Servicios.tsx    # Sección de servicios con tarjetas
│   ├── ServiceCard.tsx  # Tarjeta individual de servicio
│   ├── Requisitos.tsx   # Sección de requisitos con acordeones
│   └── SectionTitle.tsx # Componente reutilizable para títulos
├── public/
│   ├── hero-1.webp
│   ├── hero-2.webp
│   ├── hero-3.webp
│   ├── service-1.webp
│   ├── service-2.webp
│   ├── service-3.webp
│   ├── service-4.webp
│   └── logo.png
├── next.config.mjs      # Configuración de imágenes (AVIF/WebP)
├── tailwind.config.ts   # Configuración de Tailwind CSS
├── postcss.config.mjs   # Configuración de PostCSS
├── tsconfig.json        # Configuración de TypeScript
├── package.json         # Dependencias y scripts npm
└── README.md            # Este documento
```

## Cómo ejecutar el proyecto localmente

1. **Clonar el repositorio en GitHub** (o inicializarlo en tu propia cuenta):

   ```bash
   git clone <tu-fork-del-repo>
   cd quisqueya-pet-logistics
   ```

2. **Instalar dependencias** (necesitas Node.js >= 18):

   ```bash
   npm install
   # o utilizando pnpm/yarn si lo prefieres
   ```

3. **Ejecutar en modo desarrollo**:

   ```bash
   npm run dev
   ```

   Visita `http://localhost:3000` en tu navegador para ver la landing. Los cambios que hagas en el código se recargarán automáticamente.

4. **Compilar para producción** (opcional):

   ```bash
   npm run build
   npm start
   ```

## Despliegue en Vercel

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta.
2. Ve a [Vercel](https://vercel.com), inicia sesión con tu cuenta de GitHub y selecciona el repositorio.
3. Acepta las configuraciones por defecto; Vercel detectará automáticamente que es un proyecto Next.js.
4. Al completar el despliegue, tendrás una URL pública donde se aloja tu landing.

## Cómo reemplazar imágenes y textos

- Todas las imágenes se encuentran en la carpeta **`/public`**. Cambia los archivos `hero-1.webp`, `hero-2.webp`, `hero-3.webp`, `service-*.webp` y `logo.png` por tus imágenes reales manteniendo los nombres y extensiones (`.webp` para héroe y servicios, `.png` para el logo) o actualiza las importaciones en los componentes correspondientes.
- Modifica los textos del carrusel editando el arreglo `slides` en **`components/Hero.tsx`**. Puedes ajustar títulos, subtítulos, microcopy y CTAs.
- Para añadir o quitar servicios, edita el arreglo `services` en **`components/Servicios.tsx`**. Cada servicio tiene un título, una imagen y un enlace opcional.
- Para agregar o modificar destinos y requisitos, actualiza el arreglo `requirementsData` en **`components/Requisitos.tsx`**.
- Ajusta la velocidad y el retardo del carrusel modificando las propiedades `speed` y `autoplay.delay` en **`components/Hero.tsx`**.

## Consideraciones de accesibilidad y pruebas (QA checklist)

- **Responsividad**: Verifica en múltiples tamaños de pantalla (móvil, tablet, desktop) que el diseño se adapte correctamente. La grilla de servicios cambia de 1–2 columnas en móvil a 3–4 en desktop.
- **Contraste**: Asegúrate de que el texto sea legible sobre las imágenes. Las overlays de degradado y el uso de colores oscuros para el texto ayudan a mejorar el contraste.
- **Navegación por teclado**: Los elementos interactivos (botones, enlaces y acordeones) pueden focalizarse con la tecla Tab. El estado abierto/cerrado de los acordeones se anuncia mediante `aria-expanded`.
- **Labels y atributos ARIA**: Los componentes como la barra de navegación y los acordeones incluyen atributos `aria-expanded`, `aria-controls` y descripciones para mejorar la accesibilidad.
- **Lighthouse**: Ejecuta auditorías con Lighthouse para comprobar rendimiento, accesibilidad, mejores prácticas y SEO. Corrige las advertencias que puedan surgir (por ejemplo, atributos `alt` en imágenes, orden de encabezados, etc.).

## Notas adicionales

- Este proyecto utiliza solo imágenes locales (`/public`). Si en algún momento necesitas usar imágenes externas, recuerda añadir sus dominios a la propiedad `images.domains` en `next.config.mjs`.
- Puedes añadir una sección de preguntas frecuentes (#preguntas) o un formulario de contacto (#contacto) siguiendo la misma estructura de componentes existente.
- El código está escrito con TypeScript y configurado para evitar warnings de ESLint o del compilador. Asegúrate de mantener la limpieza del código al extenderlo.

---

¡Disfruta creando la landing de **Quisqueya Pet Logistics**! Si tienes alguna duda o necesitas implementar nuevas secciones, sigue la misma filosofía de componentes reutilizables y estilos consistentes.