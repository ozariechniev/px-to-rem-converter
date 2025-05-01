import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { Toaster } from '@/components/ui/sonner';
import { RootProvider } from '@/providers';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'PX TO REM Converter',
    template: '%s | PX TO REM Converter',
  },
  description:
    'Free online PX to REM converter tool for web developers. Instantly convert pixel values to rem units for responsive and accessible web design. Perfect for CSS developers and designers.',
  keywords: ['px to rem', 'pixel converter', 'rem converter', 'css units', 'responsive design', 'web development'],
  authors: [{ name: 'Oleksandr Zariechniev' }],
  creator: 'Oleksandr Zariechniev',
  publisher: 'Oleksandr Zariechniev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ''),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PX TO REM Converter',
    description:
      'Free online PX to REM converter tool for web developers. Instantly convert pixel values to rem units for responsive and accessible web design. Perfect for CSS developers and designers.',
    url: process.env.NEXT_PUBLIC_URL || '',
    siteName: 'PX TO REM',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootProvider>
          <Suspense>
            <Header />
            {children}
            <Analytics />
            <Footer />
          </Suspense>
          <Toaster richColors />
        </RootProvider>
      </body>
    </html>
  );
}
