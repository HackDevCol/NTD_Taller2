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
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>

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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              onClick={() => setSelectedAlbum(album)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer group relative bg-zinc-900 border border-red-900/20 p-6 overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="font-bebas text-3xl text-white group-hover:text-red-500 transition-colors">
                  {album.title}
                </h3>
                <p className="text-red-500 font-oswald text-xl">{album.year}</p>
                <p className="text-zinc-400 mt-2">{album.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedAlbum && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAlbum(null)}
            >
              <motion.div
                className="bg-zinc-900 border border-red-600 p-8 max-w-lg w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="font-bebas text-4xl text-red-500 mb-2">
                  {selectedAlbum.title}
                </h3>
                <p className="text-white text-lg mb-4">
                  Año: {selectedAlbum.year}
                </p>
                <p className="text-zinc-400 mb-4">
                  Ventas: {selectedAlbum.sales}
                </p>
                <p className="text-zinc-300">
                  {selectedAlbum.description}
                </p>

                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 transition-colors text-white"
                >
                  Cerrar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
