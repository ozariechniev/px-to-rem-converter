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
  title: 'PX TO REM',
  description: 'Convert PX to REM with ease',
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
