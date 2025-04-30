'use client';

import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { copyToClipboard, pxToRem } from '@/lib/utils';

type PresetsTableProps = {
  presets: number[];
  baseFontSize: number;
};

export function PresetsTable({ presets, baseFontSize }: PresetsTableProps) {
  if (presets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-2 rounded-md border p-8 text-center">
        <p className="text-muted-foreground text-sm">No presets saved yet</p>
        <p className="text-muted-foreground text-xs">Add presets in the settings to see them here</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[300px] rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PX</TableHead>
            <TableHead>REM</TableHead>
            <TableHead className="w-[100px]">Copy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {presets.map((preset) => {
            const remValue = pxToRem(preset, baseFontSize);
            return (
              <TableRow key={preset}>
                <TableCell>{preset}px</TableCell>
                <TableCell>{remValue}rem</TableCell>
                <TableCell>
                  <Button variant="outline" size="icon" onClick={() => copyToClipboard(`${remValue}rem`)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
