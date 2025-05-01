import { Github } from 'lucide-react';
import { Logo } from '@/components/common/logo/logo';
import { Button } from '@/components/ui/button';
import { GITHUB_PROJECT_URL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-background/80 fixed inset-x-0 bottom-0 z-50 border-t backdrop-blur-sm">
      <div className="container mx-auto flex h-[58px] items-center justify-between px-4">
        <Logo />
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <a href={`${GITHUB_PROJECT_URL}/issues`} target="_blank" rel="noopener noreferrer">
              Found an issue?
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
            <a href={GITHUB_PROJECT_URL} target="_blank" rel="noopener noreferrer">
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
