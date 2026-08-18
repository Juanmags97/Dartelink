import { pricingPacks, badges } from '../data/pricingData';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Elegí tu pack</h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Invertí una sola vez y transformá la manera en que presentás tu identidad profesional.
          </p>
        </div>

        {/* Tarjetas de Precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPacks.map((pack) => (
            <div
              key={pack.id}
              className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                pack.highlighted
                  ? 'bg-[#15151c] border-2 border-[#c68b2a] shadow-xl shadow-[#c68b2a]/10 md:-translate-y-2'
                  : 'bg-[#131317] border border-[#23232a] hover:border-gray-700'
              }`}
            >
              {pack.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c68b2a] text-black text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full">
                  {pack.tag}
                </span>
              )}

              <div>
                <h3 className="text-2xl font-bold">{pack.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{pack.subtitle}</p>

                <div className="my-6">
                  <span className="text-4xl font-black tracking-tight">{pack.price}</span>
                  <span className="text-xs text-gray-500 ml-2 uppercase font-medium">{pack.period}</span>
                </div>

                <ul className="space-y-3.5 mb-8 border-t border-[#23232a] pt-6">
                  {pack.features.map((feat, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-center gap-3">
                      <span className="text-[#c68b2a] text-sm">✔</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/549XXXXXXXXX?text=Hola!%20Quiero%20pedir%20el%20pack%20${pack.name}`}
                target="_blank"
                rel="noreferrer"
                className={`w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider transition ${
                  pack.highlighted
                    ? 'bg-[#c68b2a] text-black hover:bg-[#d89932]'
                    : 'bg-[#23232a] text-white hover:bg-[#2c2c35]'
                }`}
              >
                {pack.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Sellos de Confianza Inferiores */}
        <div className="mt-14 pt-8 border-t border-[#23232a] flex flex-wrap justify-center items-center gap-8 text-xs text-gray-400">
          {badges.map((b, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c68b2a]" />
              <span>{b.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}