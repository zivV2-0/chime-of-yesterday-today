
import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { FloatingActionButton } from "./FloatingActionButton";

interface LayoutProps {
  children: ReactNode;
  hideNav?: boolean;
  hideFab?: boolean;
}

export function Layout({ children, hideNav = false, hideFab = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col pb-16">
      <main className="flex-1 container max-w-md mx-auto px-4 py-6">
        {children}
      </main>
      {!hideNav && <BottomNav />}
      {!hideFab && <FloatingActionButton />}
    </div>
  );
}
