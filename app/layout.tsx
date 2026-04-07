import type { Metadata } from 'next';
import './globals.css';
import { Special_Elite, Caveat } from 'next/font/google';

const specialElite = Special_Elite({ weight: '400', subsets: ['latin'], variable: '--font-typewriter' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-handwritten' });

export const metadata: Metadata = {
  title: 'Dinner @ 300',
  description: 'Jesres 300 — dinners, wine nights, and get-togethers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${specialElite.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
