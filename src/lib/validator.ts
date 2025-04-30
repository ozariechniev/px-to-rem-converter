import { DEFAULT_BASE_FONT_SIZE_MAX, DEFAULT_BASE_FONT_SIZE_MIN } from './constants';

export function validateBaseFontSize(value: string): number | null {
  const parsed = parseInt(value);

  if (isNaN(parsed) || parsed < DEFAULT_BASE_FONT_SIZE_MIN || parsed > DEFAULT_BASE_FONT_SIZE_MAX) return null;

  return parsed;
}
