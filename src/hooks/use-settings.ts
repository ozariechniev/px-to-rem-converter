'use client';

import { createParser, useQueryState } from 'nuqs';
import { DEFAULT_BASE_FONT_SIZE } from '@/lib/constants';

export const baseFontSizeParser = createParser({
  parse: (value) => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) || parsed <= 0 ? 16 : parsed;
  },

  serialize: (value) => value.toString(),
});

export function useSettings() {
  const [baseFontSize, setBaseFontSize] = useQueryState(
    'baseFontSize',
    baseFontSizeParser.withDefault(DEFAULT_BASE_FONT_SIZE)
  );

  return {
    baseFontSize,
    setBaseFontSize,
  };
}
