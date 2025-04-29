import { GridBackground } from '@/components/common/background';

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col">
      <GridBackground />
      <div className="relative z-5 container mx-auto px-4 py-[126px]">{/* Content */}</div>
    </main>
  );
}
