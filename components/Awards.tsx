'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      category: "Grammy Awards",
      count: 15,
      icon: "🏆",
      highlights: [
        "Mejor Álbum de Rap (5 veces)",
        "Canción del Año - 'Lose Yourself'",
        "Mejor Interpretación de Rap Solista (4 veces)"
      ]
    },
    {
      category: "Academy Awards",
      count: 1,
      icon: "🎬",
      highlights: [
        "Mejor Canción Original - 'Lose Yourself' (2003)",
        "Primera canción de hip-hop en ganar un Oscar"
      ]
    },
    {
      category: "MTV Video Music Awards",
      count: 12,
      icon: "📺",
      highlights: [
        "Video del Año - 'Without Me'",
        "Mejor Video de Hip-Hop (múltiples veces)",
        "Mejor Video Masculino"
      ]
    },
    {
      category: "American Music Awards",
      count: 8,
      icon: "🎵",
      highlights: [
        "Artista Favorito de Rap/Hip-Hop",
        "Álbum Favorito de Rap/Hip-Hop"
      ]
    }
  ];

  const achievements = [
    "Único artista en tener 10 álbumes consecutivos en #1 en Billboard 200",
    "Artista más vendido de la década del 2000",
    "Incluido en el Salón de la Fama del Rock and Roll (2022)",
    "Nombrado por Rolling Stone como uno de los 100 mejores artistas de todos los tiempos",
    "Récord Guinness por más palabras en un hit (1,560 palabras en 'Rap God')",
    "Más de 50 mil millones de streams en plataformas digitales"
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-bebas text-7xl md:text-9xl text-gradient mb-6">
            PREMIOS Y RECONOCIMIENTOS
          </h2>
          <div className="w-32 h-1 bg-red-600"></div>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {awards.map((award, index) => (
            <motion.div
              key={award.category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border-2 border-red-900/30 p-8 hover-lift text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              <div className="font-bebas text-6xl text-gradient mb-2">
                {award.count}
              </div>
              <h3 className="font-oswald text-xl font-bold text-white mb-4">
                {award.category}
              </h3>
              <ul className="text-left text-zinc-400 text-sm space-y-2">
                {award.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-bebas text-5xl md:text-7xl text-white mb-12 text-center">
            LOGROS DESTACADOS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 bg-black/50 border border-red-900/20 p-6 hover:border-red-600/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 flex items-center justify-center font-bebas text-xl">
                  {index + 1}
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-900 to-black border-2 border-red-900/30 p-12 relative">
            <div className="absolute top-4 left-4 text-red-600/30 text-6xl font-serif">"</div>
            <div className="absolute bottom-4 right-4 text-red-600/30 text-6xl font-serif">"</div>
            
            <p className="font-oswald text-2xl md:text-3xl text-white italic mb-6 relative z-10">
              El éxito es mi única opción, el fracaso no lo es
            </p>
            <p className="text-red-500 font-bebas text-xl tracking-widest">
              — EMINEM, LOSE YOURSELF
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
