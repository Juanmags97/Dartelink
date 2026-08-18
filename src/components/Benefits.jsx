export default function Benefits() {
  const features = [
    {
      title: 'Sin Aplicaciones',
      desc: 'Ni vos ni tus contactos necesitan descargar ninguna app para usar o leer la tarjeta.',
      icon: '⚡',
    },
    {
      title: 'Sin Abonos Mensuales',
      desc: 'Comprás tu tarjeta física una sola vez y tu perfil digital queda activo para siempre.',
      icon: '💳',
    },
    {
      title: 'Descarga VCard Directa',
      desc: 'Quien reciba tu tarjeta podrá guardarte en su agenda de contactos con un solo botón.',
      icon: '👤',
    },
    {
      title: 'WhatsApp & Redes',
      desc: 'Acceso directo a chat de WhatsApp, Instagram, LinkedIn, TikTok y enlaces web.',
      icon: '💬',
    },
    {
      title: '100% Sustentable',
      desc: 'Reducí tu huella de carbono y eliminá los costos recurrentes de reimpresión en papel.',
      icon: '🌱',
    },
    {
      title: 'Métricas de Visitas',
      desc: 'Conocé cuántas personas abren tu tarjeta y qué enlaces generan más interacciones.',
      icon: '📊',
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-[#0a0a0c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#c68b2a] uppercase tracking-widest">VENTAJAS CLAVE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">
            Todo el potencial de tu marca en un solo toque
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Diseñado para profesionales independientes, comerciales y empresas de todos los rubros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#131317] border border-[#23232a] rounded-2xl p-6 hover:bg-[#16161c] hover:border-gray-700 transition"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}