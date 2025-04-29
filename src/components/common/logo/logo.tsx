import { MoveRight } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-sm font-bold select-none md:text-lg">
      PX
      <MoveRight className="size-4" />
      REM
    </div>
  );
}
