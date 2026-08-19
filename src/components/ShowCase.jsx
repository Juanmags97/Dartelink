export default function Showcase() {
  const images = [
    // {
    //   title: 'Networking en Eventos',
    //   subtitle: 'Causá impacto en conferencias y congresos.',
    //   src: '/assets/showcase-1.jpg',
    // },
    {
      title: 'Reuniones de Negocios',
      subtitle: 'Compartí propuestas y catálogos en el momento.',
      src: '/assets/showcase-2.jpg',
    },
    {
      title: 'Comercios y Servicios',
      subtitle: 'Facilitá transferencias, CVU/Alias y canales de atención.',
      src: '/assets/showcase-3.jpg',
    },
  ];

  return (
    <section className="py-20 bg-[#0d0d11] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-[#c68b2a] uppercase tracking-widest">EN ACCIÓN</span>
            <h2 className="text-3xl font-extrabold tracking-tight mt-2">Profesionales que conectan diferente</h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md mt-4 md:mt-0">
            Dartelink acompaña a profesionales, emprendedores y empresas en cada oportunidad de conexión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden border border-[#23232a] bg-[#131317]">
              <div className="h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}