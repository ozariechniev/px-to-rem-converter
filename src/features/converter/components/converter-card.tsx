'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ValueInput } from './value-input';

type ConverterCardProps = {
  baseFontSize: number;
  pxValue: string;
  remValue: string;
  onPxChange: (value: string) => void;
  onRemChange: (value: string) => void;
};

export function ConverterCard({ baseFontSize, pxValue, remValue, onPxChange, onRemChange }: ConverterCardProps) {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>
          <span className="sr-only">PX to REM Converter</span>
        </CardTitle>
        <CardDescription>
          Convert pixel values to rem units based on <b>{baseFontSize}px</b> base font size
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="mb-3 grid gap-6 md:grid-cols-2">
          <ValueInput
            id="px-value"
            label="PX"
            value={pxValue}
            onChange={onPxChange}
            placeholder="Enter px value"
            unit="px"
          />
          <ValueInput
            id="rem-value"
            label="REM"
            value={remValue}
            onChange={onRemChange}
            placeholder="Enter rem value"
            unit="rem"
          />
        </div>
      </CardContent>
    </Card>
  );
}
