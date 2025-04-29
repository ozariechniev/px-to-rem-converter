'use client';

import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="rounded-sm border p-4">
      <div className="space-y-4">
        <div className="font-medium">Color scheme</div>
        <ToggleGroup type="single" value={theme} onValueChange={setTheme} className="w-full rounded-sm border">
          <ToggleGroupItem value="light">
            <Sun className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="dark">
            <Moon className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="system">
            <Monitor className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
