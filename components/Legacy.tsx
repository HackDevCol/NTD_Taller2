'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Legacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impact = [
    {
      title: "Rompiendo Barreras Raciales",
      description: "Eminem abrió puertas para artistas blancos en el hip-hop, un género históricamente dominado por artistas afroamericanos. Su éxito demostró que el talento trasciende el color de piel.",
      icon: "🎤"
    },
    {
      title: "Maestro Lírico",
      description: "Reconocido por su habilidad técnica excepcional, esquemas de rimas complejos y narrativas autobiográficas. Sus letras son estudiadas en universidades como ejemplo de narrativa moderna.",
      icon: "📝"
    },
    {
      title: "Influencia Cultural",
      description: "Ha influenciado a generaciones de artistas del hip-hop y la cultura popular. Su alter ego 'Slim Shady' revolucionó la forma de crear personajes en el rap.",
      icon: "🌍"
    },
    {
      title: "Emprendimiento",
      description: "Fundador de Shady Records, descubrió y desarrolló talentos como 50 Cent, D12 y Obie Trice. Su sello es uno de los más exitosos en la industria del hip-hop.",
      icon: "💼"
    }
  ];

  const famousTracks = [
    { title: "Lose Yourself", year: "2002", status: "Oscar Ganador" },
    { title: "Stan", year: "2000", status: "Icónico" },
    { title: "Without Me", year: "2002", status: "Platino 6x" },
    { title: "The Real Slim Shady", year: "2000", status: "Grammy" },
    { title: "Love The Way You Lie", year: "2010", status: "Diamante" },
    { title: "Not Afraid", year: "2010", status: "Diamante" },
    { title: "Rap God", year: "2013", status: "Récord Guinness" },
    { title: "Mockingbird", year: "2004", status: "Platino 5x" }
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-bebas text-7xl md:text-9xl text-gradient mb-6">
            LEGADO E IMPACTO
          </h2>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Una influencia imborrable en la cultura hip-hop y la música mundial
          </p>
          <div className="w-32 h-1 bg-red-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {impact.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-zinc-900 border border-red-900/30 p-8 hover-lift group"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-oswald text-2xl font-bold text-red-500 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Famous Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-bebas text-5xl md:text-7xl text-white mb-12 text-center">
            CANCIONES ICÓNICAS
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {famousTracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="bg-zinc-900 border-l-4 border-red-600 p-6 hover:bg-zinc-800 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-oswald text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                    {track.title}
                  </h4>
                  <span className="text-red-500 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    ▶
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">{track.year}</span>
                  <span className="bg-red-600/20 text-red-400 px-2 py-1 text-xs font-semibold">
                    {track.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-transparent via-red-600/20 to-transparent h-px mb-12"></div>
            
            <h3 className="font-bebas text-4xl md:text-6xl text-white mb-6">
              UNA LEYENDA VIVIENTE
            </h3>
            
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8">
              Marshall Mathers ha trascendido el género del hip-hop para convertirse en un ícono cultural global. 
              Su valentía al abordar temas controversiales, su honestidad brutal sobre sus luchas personales, 
              y su incomparable habilidad técnica lo han cimentado como uno de los artistas más importantes 
              de nuestra generación.
            </p>

            <div className="inline-block bg-zinc-900 border-2 border-red-600 px-8 py-4">
              <p className="font-oswald text-2xl text-red-500 tracking-widest">
                EL SHOW CONTINÚA
              </p>
            </div>

            <div className="bg-gradient-to-r from-transparent via-red-600/20 to-transparent h-px mt-12"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
