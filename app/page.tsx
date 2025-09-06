import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Requisitos from '../components/Requisitos';
import Navbar from '../components/Navbar';

/**
 * Página principal de la landing. Compuesta por la barra de navegación,
 * la sección Hero con carrusel, la lista de servicios y los requisitos
 * por destino. Esta estructura facilita el orden lógico según las
 * instrucciones: primero servicios y luego requisitos.
 */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Requisitos />
    </main>
  );
}