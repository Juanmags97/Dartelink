import { useState } from 'react';

const FAQ_TABS = ['Sobre Dartelink', 'Compra y entrega', 'Uso y compatibilidad', 'Cambios y soporte'];

const FAQ_DATA = {
  'Sobre Dartelink': [
    { q: '¿Qué es una tarjeta digital?', a: 'Es una tarjeta con chip NFC y código QR que permite transferir todos tus datos de contacto y redes al celular de otra persona con solo apoyarla.' },
    { q: '¿Cómo obtengo mi Dartelink?', a: 'Elegís el pack que mejor se adapte a vos, completás tus datos y diseñamos tu tarjeta personalizada.' },
    { q: '¿Qué medios de pago aceptan?', a: 'Transferencia bancaria, Mercado Pago y tarjetas de crédito/débito.' },
  ],
  'Compra y entrega': [
    { q: '¿Cuánto demora el diseño?', a: 'El proceso de diseño y configuración toma entre 24 y 48 horas hábiles.' },
    { q: '¿Cómo recibo mi tarjeta?', a: 'Hacemos envíos a todo el país a través de correo privado hasta tu domicilio.' },
  ],
  // ... resto de categorías
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('Sobre Dartelink');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-darkBg text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Todo lo que necesitás saber sobre Dartelink.</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FAQ_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeTab === tab ? 'bg-accentGold text-black font-semibold' : 'bg-darkCard border border-darkBorder text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {FAQ_DATA[activeTab]?.map((item, idx) => (
            <div key={idx} className="bg-darkCard border border-darkBorder rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full p-4 text-left font-medium flex justify-between items-center hover:text-accentGold transition-colors"
              >
                <span>{item.q}</span>
                <span className="text-xl">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="p-4 pt-0 text-sm text-gray-400 border-t border-darkBorder/40">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}