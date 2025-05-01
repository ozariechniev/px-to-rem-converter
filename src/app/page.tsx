import { GridBackground } from '@/components/common/background/grid-background';
import { Converter } from '@/features/converter/converter';

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col">
      <GridBackground />
      <div className="relative z-5 container mx-auto px-4 py-[126px]">
        <Converter />
      </div>
    </main>
  );
}
