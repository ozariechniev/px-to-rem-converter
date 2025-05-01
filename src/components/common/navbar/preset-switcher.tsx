'use client';

import { useState } from 'react';
import { CircleHelp, Plus, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validatePreset } from '@/lib/validator';

type PresetSwitcherProps = {
  setUnsavedPresets: (presets: number[]) => void;
  unsavedPresets: number[];
};

export function PresetSwitcher({ setUnsavedPresets, unsavedPresets }: PresetSwitcherProps) {
  const [helpOpen, setHelpOpen] = useState<boolean>(false);
  const [newPreset, setNewPreset] = useState<string>('');

  const handleAddPreset = () => {
    const validatedPreset = validatePreset(newPreset);

    if (!validatedPreset) {
      toast.error('Invalid preset value', {
        description: 'Please ensure all preset values are valid numbers greater than 0',
        duration: 2000,
      });
      return;
    }

    if (unsavedPresets.includes(validatedPreset)) {
      toast.error('Preset already exists', {
        description: 'Please ensure all preset values are unique',
        duration: 2000,
      });
      return;
    }

    setUnsavedPresets([...unsavedPresets, validatedPreset].sort((a, b) => a - b));
    setNewPreset('');
  };

  const handleRemovePreset = (preset: number) => {
    setUnsavedPresets(unsavedPresets.filter((p) => p !== preset));
  };

  const handleClearPresets = () => {
    setUnsavedPresets([]);
  };

  return (
    <div className="rounded-sm border p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="font-medium">Font Size Presets</Label>
          <Button variant="ghost" onClick={() => setHelpOpen(!helpOpen)}>
            <CircleHelp className="size-5" />
          </Button>
        </div>
        <div className={helpOpen ? 'block' : 'hidden'}>
          <p className="text-muted-foreground text-xs">Add commonly used font sizes for quick conversion.</p>
        </div>
        <div className="flex gap-2">
          <Input
            type="number"
            value={newPreset}
            onChange={(e) => setNewPreset(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddPreset();
              }
            }}
            placeholder="Add preset..."
          />
          <Button variant="outline" onClick={handleAddPreset}>
            <Plus className="size-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {unsavedPresets.length > 0 && (
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-muted-foreground hover:text-destructive w-full"
                onClick={handleClearPresets}
                aria-label="Clear all presets"
              >
                <Trash2 className="mr-2 size-4" />
                Clear all
              </Button>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {unsavedPresets.map((preset) => (
              <div
                key={preset}
                className="bg-muted text-muted-foreground flex items-center gap-1 rounded-md border px-2 py-1 text-sm"
              >
                {preset}px
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-4 p-0"
                  onClick={() => handleRemovePreset(preset)}
                  aria-label={`Remove ${preset}px preset`}
                >
                  <X className="size-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
