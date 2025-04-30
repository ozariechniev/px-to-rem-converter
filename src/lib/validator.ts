import { DEFAULT_BASE_FONT_SIZE_MAX, DEFAULT_BASE_FONT_SIZE_MIN } from './constants';

export function validateBaseFontSize(value: string): number | null {
  const parsed = parseInt(value);

  if (isNaN(parsed) || parsed < DEFAULT_BASE_FONT_SIZE_MIN || parsed > DEFAULT_BASE_FONT_SIZE_MAX) return null;

  return parsed;
}

export function validateConverterInputValue(value: string): number | null {
  const parsed = parseFloat(value);

  if (isNaN(parsed)) return null;

  return parsed;
}

export function validatePreset(preset: string): number | null {
  const parsed = parseInt(preset);

  if (!Number.isFinite(parsed) || parsed <= 0) return null;

  return parsed;
}

export function validatePresets(presets: number[]): number[] | null {
  if (presets.some((preset) => validatePreset(preset.toString()) === null)) {
    return null;
  }

  return presets;
}
