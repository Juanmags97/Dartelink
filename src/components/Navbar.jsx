import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Cómo funciona', href: '#how-it-works' },
    { name: 'Packs', href: '#pricing' },
    { name: 'Demos', href: '#demos' },
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Preguntas frecuentes', href: '#faq' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-[#23232a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white">
              Dartelink<span className="text-[#c68b2a]">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#c68b2a] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón CTA Menú */}
          <div className="hidden lg:flex">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-[#c68b2a] to-[#a56f1a] text-white hover:brightness-110 shadow-lg shadow-[#c68b2a]/10 transition-all"
            >
              Pedir Tarjeta
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0c] border-b border-[#23232a] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base text-gray-300 hover:text-[#c68b2a] py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center py-3 rounded-xl font-bold bg-[#c68b2a] text-white mt-4"
          >
            Pedir Tarjeta
          </a>
        </div>
      )}
    </nav>
  );
}