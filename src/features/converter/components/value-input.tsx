'use client';

import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { copyToClipboard } from '@/lib/utils';

type ValueInputProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  unit: 'px' | 'rem';
};

export function ValueInput({ id, label, value, onChange, placeholder, unit }: ValueInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex gap-2">
        <Input
          id={id}
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button variant="outline" size="icon" onClick={() => copyToClipboard(`${value}${unit}`)} disabled={!value}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
