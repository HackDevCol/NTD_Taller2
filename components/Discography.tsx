'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Discography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  const albums = [
    {
      title: "Infinite",
      year: "1996",
      sales: "Independiente",
      description: "El debut que comenzó todo"
    },
    {
      title: "The Slim Shady LP",
      year: "1999",
      sales: "18 millones",
      description: "Grammy al Mejor Álbum de Rap"
    },
    {
      title: "The Marshall Mathers LP",
      year: "2000",
      sales: "21 millones",
      description: "Récord de ventas primera semana"
    },
    {
      title: "The Eminem Show",
      year: "2002",
      sales: "27 millones",
      description: "El álbum más vendido de 2002"
    },
    {
      title: "Encore",
      year: "2004",
      sales: "11 millones",
      description: "Múltiple platino"
    },
    {
      title: "Relapse",
      year: "2009",
      sales: "10 millones",
      description: "Grammy al Mejor Álbum de Rap"
    },
    {
      title: "Recovery",
      year: "2010",
      sales: "13 millones",
      description: "Álbum más vendido de 2010"
    },
    {
      title: "The Marshall Mathers LP 2",
      year: "2013",
      sales: "10 millones",
      description: "Grammy al Mejor Álbum de Rap"
    },
    {
      title: "Revival",
      year: "2017",
      sales: "5 millones",
      description: "Debut #1 en Billboard"
    },
    {
      title: "Kamikaze",
      year: "2018",
      sales: "3 millones",
      description: "Lanzamiento sorpresa"
    },
    {
      title: "Music to Be Murdered By",
      year: "2020",
      sales: "4 millones",
      description: "Debut #1 en múltiples países"
    }
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="font-bebas text-7xl md:text-9xl text-gradient mb-6">
            DISCOGRAFÍA
          </h2>
          <p className="text-zinc-400 text-xl max-w-3xl mx-auto">
            Más de 220 millones de discos vendidos en todo el mundo
          </p>
          <div className="w-32 h-1 bg-red-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-900 border border-red-900/20 p-6 hover-lift overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-800/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors duration-300">
                      {album.title}
                    </h3>
                    <p className="text-red-500 font-oswald text-xl">{album.year}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-600/20 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                    <span className="font-bebas text-2xl text-white">{index + 1}</span>
                  </div>
                </div>
                
                <p className="text-zinc-400 mb-3">{album.description}</p>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-red-900/30"></div>
                  <span className="text-xs text-zinc-500 font-oswald tracking-wider">
                    {album.sales}
                  </span>
                  <div className="h-px flex-1 bg-red-900/30"></div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-600/20 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "220M+", label: "Discos Vendidos" },
            { number: "15", label: "Grammys Ganados" },
            { number: "11", label: "Álbumes de Estudio" },
            { number: "1", label: "Oscar Ganado" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-zinc-900 border border-red-900/20"
            >
              <div className="font-bebas text-5xl md:text-6xl text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-zinc-400 text-sm tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
