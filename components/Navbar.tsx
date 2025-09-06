"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import logo from '../public/logo.png';

/**
 * Datos de navegación. Ajusta los hrefs para que apunten a las
 * secciones de la página. El botón “Cotiza” enlaza por defecto a
 * #contacto, que debes implementar cuando agregues un formulario o
 * sección de contacto.
 */
const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#requisitos', label: 'Requisitos' },
  { href: '#preguntas', label: 'Preguntas' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Quisqueya Pet Logistics" width={32} height={32} />
            <span className="font-semibold text-lg text-gray-800">Quisqueya Pet Logistics</span>
          </Link>
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Cotiza
          </Link>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              Cotiza
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;