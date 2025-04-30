'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PresetsTable } from './presets-table';

type PresetsCardProps = {
  presets: number[];
  baseFontSize: number;
};

export function PresetsCard({ presets, baseFontSize }: PresetsCardProps) {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>
          <span className="sr-only">Presets</span>
        </CardTitle>
        <CardDescription>
          Your saved presets converted to rem units based on <b>{baseFontSize}px</b> base font size
        </CardDescription>
      </CardHeader>
      <CardContent>
        <PresetsTable presets={presets} baseFontSize={baseFontSize} />
      </CardContent>
    </Card>
  );
}
