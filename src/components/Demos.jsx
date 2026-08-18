import { useState } from 'react';

const CATEGORIES = ['Todos', 'Profesionales', 'Empresas', 'Eventos', 'Inmobiliarias'];

const DEMOS = [
  { id: 1, title: 'Mariana López', cat: 'Profesionales', desc: 'Asesora Comercial - Perfil NFC y redes', img: '/mockups/mariana.png' },
  { id: 2, title: 'Estudio ARQ', cat: 'Empresas', desc: 'Arquitectura & Diseño - Portafolio y contacto', img: '/mockups/arq.png' },
  { id: 3, title: 'Sabor & Arte', cat: 'Empresas', desc: 'Gastronomía - Menú digital y reservas', img: '/mockups/sabor.png' },
  { id: 4, title: 'Laura Martínez', cat: 'Inmobiliarias', desc: 'Bienes Raíces - Catálogo de propiedades', img: '/mockups/laura.png' },
  { id: 5, title: 'Nexo Solutions', cat: 'Empresas', desc: 'Servicios IT - Tarjeta corporativa', img: '/mockups/nexo.png' },
  { id: 6, title: 'Summit 2026', cat: 'Eventos', desc: 'Acreditación y networking dinámico', img: '/mockups/summit.png' },
];

export default function Demos() {
  const [activeTab, setActiveTab] = useState('Todos');

  const filteredDemos = activeTab === 'Todos' 
    ? DEMOS 
    : DEMOS.filter(demo => demo.cat === activeTab);

  return (
    <section id="demos" className="py-20 bg-darkBg text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Una Dartelink para cada forma de conectar.</h2>
        <p className="text-gray-400 text-center mb-8">Explorá ejemplos reales y descubrí cómo se adapta a tu perfil.</p>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === cat
                  ? 'bg-accentGold text-black font-semibold'
                  : 'bg-darkCard text-gray-400 border border-darkBorder hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Demos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDemos.map(demo => (
            <div key={demo.id} className="bg-darkCard border border-darkBorder rounded-2xl p-4 flex flex-col items-center hover:border-accentGold/50 transition-all">
              <img src={demo.img} alt={demo.title} className="w-full h-56 object-contain mb-4" />
              <h3 className="text-lg font-semibold">{demo.title}</h3>
              <p className="text-xs text-gray-400 text-center mb-4">{demo.desc}</p>
              <button className="w-full py-2 border border-accentGold text-accentGold hover:bg-accentGold hover:text-black rounded-lg text-sm transition-all">
                Ver demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}