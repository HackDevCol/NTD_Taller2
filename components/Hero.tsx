'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background con efecto diagonal */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-red-600 to-transparent rotate-12 blur-3xl"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-red-800 to-transparent -rotate-12 blur-3xl"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-bebas text-8xl md:text-[12rem] lg:text-[16rem] leading-none tracking-tighter mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-gradient glow-red">EMINEM</span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="font-oswald text-3xl md:text-5xl font-light tracking-[0.3em] text-zinc-400 mb-8">
            THE REAL SLIM SHADY
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
        >
          <div className="text-center">
            <p className="text-red-500 font-bebas text-2xl">Marshall Bruce Mathers III</p>
            <p className="text-zinc-500 text-sm tracking-widest">Detroit, Michigan</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-red-500"></div>
          <div className="text-center">
            <p className="text-red-500 font-bebas text-2xl">17 de Octubre, 1972</p>
            <p className="text-zinc-500 text-sm tracking-widest">Leyenda del Hip-Hop</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a 
            href="#biografia" 
            className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-oswald text-lg tracking-widest uppercase transition-all duration-300 border-2 border-red-600 hover:border-red-400 hover-lift"
          >
            Descubre su Historia
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-3 bg-red-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
