'use client';

import { ConverterTabs } from '@/features/converter/components/converter-tabs';
import { Hero } from '@/features/converter/components/hero';

export function Converter() {
  return (
    <>
      <Hero />
      <ConverterTabs />
    </>
  );
}
