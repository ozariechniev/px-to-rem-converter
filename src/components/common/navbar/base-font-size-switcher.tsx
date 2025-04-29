'use client';

import { useState } from 'react';
import { CircleHelp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type BaseFontSizeSwitcherProps = {
  unsavedBaseFontSize: number;
  setUnsavedBaseFontSize: (baseFontSize: number) => void;
};

export function BaseFontSizeSwitcher({ unsavedBaseFontSize, setUnsavedBaseFontSize }: BaseFontSizeSwitcherProps) {
  const [helpOpen, setHelpOpen] = useState<boolean>(false);

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
          value={unsavedBaseFontSize}
          onChange={(e) => setUnsavedBaseFontSize(Number(e.target.value))}
          min={1}
        />
      </div>
    </div>
  );
}
