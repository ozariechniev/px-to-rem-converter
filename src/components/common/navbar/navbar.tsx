'use client';

import { useState } from 'react';
import { Save, Settings } from 'lucide-react';
import { ThemeSwitcher } from '@/components/common/navbar';
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

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const handleSettingsSave = () => {
    setIsSheetOpen(false);
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
