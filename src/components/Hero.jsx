import fuaa from '../assets/dartelink-vid01.webm'
export default function Hero() {
  const highlights = [
    { title: 'Tecnología NFC', desc: 'Acercá y conectá al instante' },
    { title: 'Sustentable', desc: 'Sin papel ni costos de reimpresión' },
    { title: 'Seguro y actualizado', desc: 'Tus datos siempre al día' },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c68b2a]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Contenido Izquierda */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Conectá en segundos, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#c68b2a]">
                dejá huella siempre.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 font-normal">
              Compartí tu información, redes y servicios de manera rápida, profesional y sustentable.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#c68b2a] to-[#9c6614] text-white hover:brightness-110 transition shadow-lg shadow-[#c68b2a]/20 text-center"
              >
                Elegí tu Dartelink
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-[#131317] border border-[#23232a] text-gray-300 hover:text-white hover:border-gray-500 transition text-center"
              >
                ¿Cómo funciona?
              </a>
            </div>

            {/* 3 Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {highlights.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#131317]/60 border border-[#23232a] text-left">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup Derecha */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Contenedor Mockup con bordes redondeados y sombra */}
              <div className="relative z-10 bg-gradient-to-b from-[#23232a] to-[#131317] p-2 rounded-[2.5rem] border border-[#23232a] shadow-2xl">
                <video
                  src={fuaa}
                  aria-label="Dartelink App & Card Preview"
                  className="rounded-[2.2rem] w-full h-auto object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}