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
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Radar da Mobilização | Cards e Notícias para WhatsApp',
  description: 'Destaques do dia, guerra de narrativas e cards com dados oficiais prontos para baixar e mandar no WhatsApp.',
  openGraph: {
    title: 'Radar da Mobilização | Cards Prontos para o WhatsApp',
    description: 'Destaques do dia, guerra de narrativas e cards com dados oficiais prontos para baixar e mandar no WhatsApp.',
    siteName: 'Radar da Mobilização',
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
