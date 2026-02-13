'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Spotify", url: "#" },
    { name: "Apple Music", url: "#" },
    { name: "YouTube", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" }
  ];

  return (
    <footer className="bg-zinc-950 border-t-2 border-red-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bebas text-5xl text-gradient mb-4">EMINEM</h3>
            <p className="text-zinc-400 leading-relaxed">
              Página tributo dedicada a uno de los más grandes artistas del hip-hop de todos los tiempos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-oswald text-xl font-bold text-red-500 mb-4 tracking-widest">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2">
              {['Biografía', 'Discografía', 'Premios', 'Legado'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-red-500 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span className="text-red-600">▸</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-oswald text-xl font-bold text-red-500 mb-4 tracking-widest">
              SÍGUELO EN
            </h4>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="px-4 py-2 bg-zinc-900 border border-red-900/30 text-zinc-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 font-oswald text-sm tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>
            © {currentYear} Página Tributo a Eminem. Proyecto educativo - NTD Taller 2.
          </p>
          <p className="font-oswald tracking-wider">
            Hecho con <span className="text-red-500">♥</span> para los fans del hip-hop
          </p>
        </div>

        {/* Easter egg */}
        <div className="mt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="text-zinc-700 text-xs font-oswald tracking-widest"
          >
            "WILL THE REAL SLIM SHADY PLEASE STAND UP?"
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
