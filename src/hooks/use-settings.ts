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

export const presetsParser = createParser({
  parse: (value) => {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) && parsed.every((n) => typeof n === 'number') ? parsed : [];
    } catch {
      return [];
    }
  },
  serialize: (value) => JSON.stringify(value),
});

export function useSettings() {
  const [baseFontSize, setBaseFontSize] = useQueryState(
    'baseFontSize',
    baseFontSizeParser.withDefault(DEFAULT_BASE_FONT_SIZE)
  );

  const [presets, setPresets] = useQueryState('presets', presetsParser.withDefault([]));

  return {
    baseFontSize,
    setBaseFontSize,
    presets,
    setPresets,
  };
}
