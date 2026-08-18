export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0d0d11] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Izquierda */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#c68b2a] uppercase tracking-widest">HABLEMOS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Tu próxima conexión <br />empieza acá.
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Contanos qué necesitás y te asesoramos para crear la Dartelink ideal para vos o tu empresa.
            </p>

            <div className="space-y-4 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-lg bg-[#131317] border border-[#23232a] text-[#c68b2a]">📍</span>
                <span>Salta, Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-lg bg-[#131317] border border-[#23232a] text-[#c68b2a]">💬</span>
                <span>WhatsApp Atención Directa</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-lg bg-[#131317] border border-[#23232a] text-[#c68b2a]">✉️</span>
                <span>contacto@dartelink.com.ar</span>
              </div>
            </div>
          </div>

          {/* Formulario Derecha */}
          <div className="lg:col-span-7 bg-[#131317] border border-[#23232a] p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-6">Solicitá tu Dartelink</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Tipo de tarjeta</label>
                <select className="w-full bg-[#0a0a0c] border border-[#23232a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c68b2a]">
                  <option>Pack Básico</option>
                  <option>Pack Pro</option>
                  <option>Pack Business</option>
                  <option>Personalizada para Empresa / Evento</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Nombre y apellido</label>
                  <input
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-[#0a0a0c] border border-[#23232a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c68b2a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+54 9 ..."
                    className="w-full bg-[#0a0a0c] border border-[#23232a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c68b2a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="tuemail@ejemplo.com"
                  className="w-full bg-[#0a0a0c] border border-[#23232a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c68b2a]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Contanos sobre tu proyecto</label>
                <textarea
                  rows="4"
                  placeholder="Profesión, cantidad de tarjetas o dudas que tengas..."
                  className="w-full bg-[#0a0a0c] border border-[#23232a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#c68b2a]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-bold bg-[#c68b2a] hover:bg-[#d89932] text-black uppercase tracking-wider transition"
              >
                Enviar Consulta
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}