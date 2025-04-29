import { Logo } from '@/components/common/logo';
import { Navbar } from '@/components/common/navbar';

export function Header() {
  return (
    <header className="bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
