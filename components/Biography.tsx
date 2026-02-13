'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Biography() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineEvents = [
    {
      year: "1972",
      title: "Nacimiento",
      description: "Marshall Bruce Mathers III nace en St. Joseph, Missouri"
    },
    {
      year: "1996",
      title: "Infinite",
      description: "Lanza su primer álbum de estudio de forma independiente"
    },
    {
      year: "1999",
      title: "The Slim Shady LP",
      description: "Alcanza la fama mundial y gana su primer Grammy"
    },
    {
      year: "2000",
      title: "The Marshall Mathers LP",
      description: "Rompe récords de ventas con más de 1.76 millones de copias en su primera semana"
    },
    {
      year: "2002",
      title: "8 Mile",
      description: "Protagoniza la película semi-autobiográfica y gana un Oscar por 'Lose Yourself'"
    },
    {
      year: "2010",
      title: "Recovery",
      description: "Su regreso triunfal tras superar la adicción"
    },
    {
      year: "2020",
      title: "Music to Be Murdered By",
      description: "Continúa dominando el rap con lanzamientos sorpresa"
    }
  ];

  return (
    <section id="biografia" className="py-32 px-4 md:px-8 bg-zinc-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-950/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-bebas text-7xl md:text-9xl text-gradient mb-6">
            BIOGRAFÍA
          </h2>
          <div className="w-32 h-1 bg-red-600"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-oswald text-3xl font-bold mb-6 text-red-500">
              El Rey del Hip-Hop
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Marshall Bruce Mathers III, conocido profesionalmente como <span className="text-red-500 font-semibold">Eminem</span>, 
              es un rapero, compositor y productor discográfico estadounidense. Es aclamado por la crítica como uno de los 
              mejores raperos de todos los tiempos y es conocido por romper las barreras raciales para la aceptación de 
              artistas blancos en música popular.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Su álbum <span className="text-red-500 font-semibold">The Marshall Mathers LP</span> es considerado uno de 
              los mejores álbums de hip-hop de todos los tiempos. Ha vendido más de 220 millones de discos en todo el mundo, 
              convirtiéndolo en uno de los artistas musicales más vendidos de todos los tiempos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-zinc-900 border border-red-900/30 p-8"
          >
            <h4 className="font-oswald text-2xl font-bold mb-6 text-red-500">
              Datos Rápidos
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Nombre Real:</span>
                <span className="text-white font-semibold">Marshall Bruce Mathers III</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Nacimiento:</span>
                <span className="text-white font-semibold">17 de Octubre, 1972</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Origen:</span>
                <span className="text-white font-semibold">Detroit, Michigan</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Género:</span>
                <span className="text-white font-semibold">Hip-Hop, Rap</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Discográfica:</span>
                <span className="text-white font-semibold">Shady Records, Aftermath</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Años Activo:</span>
                <span className="text-white font-semibold">1988 - Presente</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-bebas text-5xl md:text-7xl text-white mb-12 text-center">
            LÍNEA DE TIEMPO
          </h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-800 to-red-950"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12`}>
                    <div className="bg-zinc-900 border border-red-900/30 p-6 hover-lift inline-block">
                      <h4 className="font-bebas text-4xl text-red-500 mb-2">{event.year}</h4>
                      <h5 className="font-oswald text-xl font-bold text-white mb-2">{event.title}</h5>
                      <p className="text-zinc-400">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-red-600 rounded-full border-4 border-black transform -translate-x-1/2 animate-pulse-glow"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
