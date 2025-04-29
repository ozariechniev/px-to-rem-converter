import type { ReactNode } from 'react';
import { NuqsProvider, ThemeProvider } from '@/providers';

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NuqsProvider>{children}</NuqsProvider>
    </ThemeProvider>
  );
}
