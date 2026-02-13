import type { Metadata } from 'next';
import { Bebas_Neue, Oswald } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

const oswald = Oswald({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald'
});

export const metadata: Metadata = {
  title: 'Eminem - The Real Slim Shady',
  description: 'Página tributo a Marshall Bruce Mathers III - Eminem, el legendario rapero de Detroit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
