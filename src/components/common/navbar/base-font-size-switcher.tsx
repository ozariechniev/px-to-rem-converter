'use client';

import { useState } from 'react';
import { CircleHelp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DEFAULT_BASE_FONT_SIZE_MAX, DEFAULT_BASE_FONT_SIZE_MIN, DEFAULT_BASE_FONT_SIZE_STEP } from '@/lib/constants';

type BaseFontSizeSwitcherProps = {
  unsavedBaseFontSize: number;
  setUnsavedBaseFontSize: (baseFontSize: number) => void;
};

export function BaseFontSizeSwitcher({ unsavedBaseFontSize, setUnsavedBaseFontSize }: BaseFontSizeSwitcherProps) {
  const [helpOpen, setHelpOpen] = useState<boolean>(false);

  const handleBaseFontSizeChange = (value: string) => {
    return setUnsavedBaseFontSize(Number(value));
  };

  return (
    <div className="rounded-sm border p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="font-medium" htmlFor="base-font-size">
            Base Font Size (px)
          </Label>
          <Button variant="ghost" onClick={() => setHelpOpen(!helpOpen)}>
            <CircleHelp className="size-5" />
          </Button>
        </div>
        <div className={`${helpOpen ? 'block' : 'hidden'}`}>
          <p className="text-muted-foreground text-xs">
            The base font size is used to calculate REM values. Most browsers use 16px as the default.
          </p>
        </div>
        <Input
          id="base-font-size"
          type="number"
          min={DEFAULT_BASE_FONT_SIZE_MIN}
          max={DEFAULT_BASE_FONT_SIZE_MAX}
          step={DEFAULT_BASE_FONT_SIZE_STEP}
          value={unsavedBaseFontSize}
          onChange={(e) => handleBaseFontSizeChange(e.target.value)}
        />
      </div>
    </div>
  );
}
