import type { ReactNode } from 'react';
import { NuqsProvider } from '@/providers/nuqs-provider';
import { ThemeProvider } from '@/providers/theme-provider';

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NuqsProvider>{children}</NuqsProvider>
    </ThemeProvider>
  );
}
