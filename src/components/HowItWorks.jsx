export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Acercá tu Dartelink',
      desc: 'Apoyá tu tarjeta física contra el celular receptor con NFC. Si el teléfono no tiene NFC, basta con escanear el código QR del dorso.',
      icon: (
        <svg className="w-6 h-6 text-[#c68b2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Se abre tu perfil digital',
      desc: 'Al instante y sin necesidad de instalar ninguna aplicación, el receptor accede a tu perfil interactivo en su navegador web.',
      icon: (
        <svg className="w-6 h-6 text-[#c68b2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Conectá y convertí',
      desc: 'Descargan tu contacto en un clic (VCard), te mandan WhatsApp directo, visitan tus redes, catálogo o hacen transferencias.',
      icon: (
        <svg className="w-6 h-6 text-[#c68b2a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0d0d11] text-white border-y border-[#23232a]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#c68b2a] uppercase tracking-widest">SIMPLE Y EFECTIVO</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2">¿Cómo funciona?</h2>
          <p className="text-gray-400 mt-3 text-sm">
            Olvidate de dictar números de teléfono o gastar en cientos de tarjetas impresas de cartón.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#131317] border border-[#23232a] rounded-2xl p-8 relative flex flex-col justify-between hover:border-[#c68b2a]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 bg-[#1a1a22] rounded-xl border border-[#2a2a35] group-hover:border-[#c68b2a]/50 transition">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-[#2a2a35] group-hover:text-[#c68b2a]/40 transition">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}