export default function Footer() {
  return (
    <footer className="bg-[#08080a] border-t border-[#1f1f26] text-gray-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white">
              Dartelink<span className="text-[#c68b2a]">.</span>
            </span>
            <span className="text-gray-600">|</span>
            <span>Tarjetas Digitales Inteligentes NFC & QR</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#hero" className="hover:text-white transition">Inicio</a>
            <a href="#how-it-works" className="hover:text-white transition">Cómo funciona</a>
            <a href="#pricing" className="hover:text-white transition">Packs</a>
            <a href="#demos" className="hover:text-white transition">Demos</a>
            <a href="#faq" className="hover:text-white transition">Preguntas frecuentes</a>
            <a href="#contact" className="hover:text-white transition">Contacto</a>
          </div>

          <div className="text-center md:text-right text-gray-500">
            © {new Date().getFullYear()} Dartelink. Todos los derechos reservados.
          </div>

        </div>
      </div>
    </footer>
  );
}