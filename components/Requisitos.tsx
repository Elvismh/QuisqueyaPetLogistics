"use client";
import { useState } from 'react';
import SectionTitle from './SectionTitle';

/**
 * Datos de los requisitos por destino. Cada entrada contiene un título
 * (destino) y una lista de requisitos/documentos necesarios. Puedes
 * ampliar este arreglo según necesites añadir más destinos u otros
 * requisitos específicos.
 */
const requirementsData: { title: string; items: string[] }[] = [
  {
    title: 'Estados Unidos (USA)',
    items: [
      'Certificado de vacunación actualizado',
      'Microchip compatible con normas internacionales',
      'Certificado de salud veterinaria emitido dentro de 10 días antes del vuelo',
      'Documentos de importación aprobados por USDA',
    ],
  },
  {
    title: 'Unión Europea (UE)',
    items: [
      'Pasaporte para mascotas emitido por un veterinario autorizado',
      'Vacuna antirrábica vigente y certificado',
      'Microchip ISO 11784/11785',
      'Tratamiento contra Echinococcus multilocularis (perros)',
    ],
  },
  {
    title: 'Latinoamérica y Caribe',
    items: [
      'Certificado de salud veterinaria reciente',
      'Comprobante de vacunación antirrábica',
      'Formulario de importación/exportación del país destino',
      'Otros documentos específicos según país (consultar consulado)',
    ],
  },
];

/**
 * Componente de acordeón para un destino individual. Permite abrir y
 * cerrar la lista de requisitos. Acepta parámetros de índice y de
 * control para determinar si está abierto o cerrado.
 */
interface AccordionProps {
  idx: number;
  title: string;
  items: string[];
  openIndex: number | null;
  setOpenIndex: (index: number | null) => void;
}

const AccordionItem: React.FC<AccordionProps> = ({ idx, title, items, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === idx;
  return (
    <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
      <button
        onClick={() => setOpenIndex(isOpen ? null : idx)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${idx}`}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span className="ml-2 text-gray-600">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        id={`accordion-content-${idx}`}
        className={`transition-[max-height] duration-300 ease-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden bg-white`}
      >
        <ul className="px-6 py-4 list-disc list-inside space-y-2 text-gray-700">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/**
 * Sección de requisitos. Muestra un título y un conjunto de acordeones
 * con los requisitos por destino. Incluye un identificador (#requisitos)
 * para que los botones del hero puedan enlazar directamente a esta
 * sección.
 */
const Requisitos: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="requisitos" className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <SectionTitle title="Requisitos según el destino" id="requisitos" />
      <div className="max-w-3xl mx-auto">
        {requirementsData.map((req, idx) => (
          <AccordionItem
            key={req.title}
            idx={idx}
            title={req.title}
            items={req.items}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Requisitos;