import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OfflineIndicator } from '@/components/offline-indicator';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Mate - CBC Learning Platform',
  description: 'CBC-aligned learning platform for Kenyan Junior School (Grade 7-9)',
  manifest: '/manifest.json',
  themeColor: '#1E3A8A',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Book Mate',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <OfflineIndicator />
        {children}
      </body>
    </html>
  );
}

