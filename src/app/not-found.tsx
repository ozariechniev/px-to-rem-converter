import { Metadata } from 'next';
import Link from 'next/link';
import { GridBackground } from '@/components/common/background';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col justify-center">
      <GridBackground />
      <div className="relative z-5 container mx-auto px-4 py-[126px]">
        <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-24">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="from-foreground to-foreground/50 bg-gradient-to-r bg-clip-text text-3xl leading-[1.6] font-bold tracking-tighter text-transparent sm:text-5xl sm:leading-[1.6] xl:text-6xl/none xl:leading-[1.6]">
                404 - Page Not Found
              </h1>
              <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
                The page you are looking for does not exist.
              </p>
              <div className="pt-8">
                <Link
                  href="/"
                  className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
