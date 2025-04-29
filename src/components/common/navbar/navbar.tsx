'use client';

import { useState } from 'react';
import { Save, Settings } from 'lucide-react';
import { toast } from 'sonner';
import { BaseFontSizeSwitcher, ThemeSwitcher } from '@/components/common/navbar';
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

export function Navbar() {
  const { baseFontSize, setBaseFontSize } = useSettings();
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const [unsavedBaseFontSize, setUnsavedBaseFontSize] = useState<number>(baseFontSize);

  const handleSettingsSave = () => {
    if (baseFontSize === unsavedBaseFontSize) {
      setIsSheetOpen(false);
      return;
    }

    if (!isNaN(unsavedBaseFontSize) && unsavedBaseFontSize > 0) {
      setBaseFontSize(unsavedBaseFontSize);
      toast.success('Settings updated', {
        description: `Base font size set to ${unsavedBaseFontSize}px`,
        duration: 2000,
      });
      setIsSheetOpen(false);
    } else {
      toast.error('Invalid base font size', {
        description: 'Please enter a valid number greater than 0',
        duration: 2000,
      });
    }
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
