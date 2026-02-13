'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import Discography from '@/components/Discography';
import Awards from '@/components/Awards';
import Legacy from '@/components/Legacy';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Biography />
      <Discography />
      <Awards />
      <Legacy />
      <Footer />
    </main>
  );
}
