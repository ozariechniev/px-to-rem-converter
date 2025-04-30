'use client';

import { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Hero } from '@/features/converter/hero';
import { useSettings } from '@/hooks/use-settings';
import { copyToClipboard, pxToRem, remToPx } from '@/lib/utils';
import { validateConverterInputValue } from '@/lib/validator';

export function Converter() {
  const { baseFontSize } = useSettings();
  const [activeTab, setActiveTab] = useState<string>('converter');
  const [pxValue, setPxValue] = useState('');
  const [remValue, setRemValue] = useState('');

  const handlePxChange = (value: string) => {
    const validatedPxValue = validateConverterInputValue(value);
    const result = value && validatedPxValue ? pxToRem(validatedPxValue, baseFontSize) : '';

    setPxValue(value);
    setRemValue(result);
  };

  const handleRemChange = (value: string) => {
    const validatedRemValue = validateConverterInputValue(value);
    const result = value && validatedRemValue ? remToPx(validatedRemValue, baseFontSize) : '';

    setRemValue(value);
    setPxValue(result);
  };

  useEffect(() => {
    if (pxValue) {
      const validatedPxValue = validateConverterInputValue(pxValue);

      if (validatedPxValue) setRemValue(pxToRem(validatedPxValue, baseFontSize));
    }
  }, [pxValue, baseFontSize]);

  return (
    <>
      <Hero />
      <Tabs defaultValue="converter" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-6 flex flex-col items-center">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="converter">Converter</TabsTrigger>
            <TabsTrigger value="presets">Presets</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="converter" className="w-full">
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
                <div className="space-y-2">
                  <Label htmlFor="px-value">PX</Label>
                  <div className="flex gap-2">
                    <Input
                      id="px-value"
                      type="number"
                      placeholder="Enter px value"
                      value={pxValue}
                      onChange={(e) => handlePxChange(e.target.value)}
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(`${pxValue}px`)}
                      disabled={!pxValue}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rem-value">REM</Label>
                  <div className="flex gap-2">
                    <Input
                      id="rem-value"
                      type="number"
                      placeholder="Enter rem value"
                      value={remValue}
                      onChange={(e) => handleRemChange(e.target.value)}
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(`${remValue}rem`)}
                      disabled={!remValue}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
