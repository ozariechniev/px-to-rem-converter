'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSettings } from '@/hooks/use-settings';
import { pxToRem, remToPx } from '@/lib/utils';
import { validateConverterInputValue } from '@/lib/validator';
import { ConverterCard } from './converter-card';
import { PresetsCard } from './presets-card';

export function ConverterTabs() {
  const { baseFontSize, presets, activeTab, setActiveTab } = useSettings();
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

  return (
    <Tabs
      defaultValue="converter"
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as 'converter' | 'presets')}
      className="w-full"
    >
      <div className="mb-6 flex flex-col items-center">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="converter">Converter</TabsTrigger>
          <TabsTrigger value="presets">Presets</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="converter" className="w-full">
        <ConverterCard
          baseFontSize={baseFontSize}
          pxValue={pxValue}
          remValue={remValue}
          onPxChange={handlePxChange}
          onRemChange={handleRemChange}
        />
      </TabsContent>
      <TabsContent value="presets" className="w-full">
        <PresetsCard presets={presets} baseFontSize={baseFontSize} />
      </TabsContent>
    </Tabs>
  );
}
