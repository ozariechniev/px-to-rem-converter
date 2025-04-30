'use client';

import { useState } from 'react';
import { Save, Settings } from 'lucide-react';
import { toast } from 'sonner';
import { BaseFontSizeSwitcher, PresetSwitcher, ThemeSwitcher } from '@/components/common/navbar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useSettings } from '@/hooks/use-settings';
import { DEFAULT_BASE_FONT_SIZE_MAX, DEFAULT_BASE_FONT_SIZE_MIN } from '@/lib/constants';
import { validateBaseFontSize } from '@/lib/validator';

export function Navbar() {
  const { baseFontSize, setBaseFontSize, presets, setPresets } = useSettings();
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [unsavedBaseFontSize, setUnsavedBaseFontSize] = useState<number>(baseFontSize);
  const [unsavedPresets, setUnsavedPresets] = useState<number[]>(presets);

  const handleSettingsSave = () => {
    const validatedBaseFontSize = validateBaseFontSize(unsavedBaseFontSize.toString());

    if (!validatedBaseFontSize) {
      toast.error('Invalid base font size', {
        description: `Please enter a valid number greater than ${DEFAULT_BASE_FONT_SIZE_MIN}px and less than ${DEFAULT_BASE_FONT_SIZE_MAX}px`,
        duration: 2000,
      });

      return;
    }

    const hasBaseFontSizeChanged = validatedBaseFontSize !== baseFontSize;
    const hasPresetsChanged = JSON.stringify(unsavedPresets) !== JSON.stringify(presets);

    if (!hasBaseFontSizeChanged && !hasPresetsChanged) {
      setIsSheetOpen(false);
      return;
    }

    if (hasBaseFontSizeChanged) {
      setBaseFontSize(validatedBaseFontSize);
    }

    if (hasPresetsChanged) {
      setPresets(unsavedPresets);
    }

    setIsSheetOpen(false);

    toast.success('Settings updated', {
      description: `Settings have been saved successfully`,
      duration: 2000,
    });
  };

  return (
    <nav aria-label="Main navigation">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="cursor-pointer" aria-label="Open settings">
            <Settings className="size-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>Configure your PX to REM converter preferences</SheetDescription>
          </SheetHeader>
          <div className="space-y-5 overflow-y-auto px-4" role="form">
            <ThemeSwitcher />
            <BaseFontSizeSwitcher
              unsavedBaseFontSize={unsavedBaseFontSize}
              setUnsavedBaseFontSize={setUnsavedBaseFontSize}
            />
            <PresetSwitcher unsavedPresets={unsavedPresets} setUnsavedPresets={setUnsavedPresets} />
          </div>
          <SheetFooter>
            <Button className="cursor-pointer" size="lg" onClick={handleSettingsSave} aria-label="Save settings">
              <Save className="size-4" />
              <span className="ml-2">Save</span>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
