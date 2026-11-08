import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#059669',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Nexo Popular | Inteligência Cidadã e Diálogo Social',
  description: 'Dados oficiais, pautas do Congresso e ferramentas de diálogo no WhatsApp para uma cidadania esclarecida e ativa.',
  openGraph: {
    title: 'Nexo Popular | Inteligência Cidadã para o WhatsApp',
    description: 'Dados oficiais, pautas em disputa no Congresso e argumentos verificados para conversar com a família e colegas.',
    siteName: 'Nexo Popular',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
