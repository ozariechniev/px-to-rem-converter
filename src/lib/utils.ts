import { type ClassValue, clsx } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pxToRem(px: number, baseFontSize: number) {
  const value = (px / baseFontSize).toFixed(4);

  return value.replace(/\.?0+$/, '');
}

export function remToPx(rem: number, baseFontSize: number) {
  return parseFloat((rem * baseFontSize).toFixed(0));
}

export function copyToClipboard(value: string) {
  navigator.clipboard.writeText(value);

  toast.success('Copied to clipboard', {
    description: `${value} has been copied to your clipboard.`,
    duration: 2000,
  });
}
