
import { Link, useLocation } from "react-router-dom";
import { Bell, CalendarClock, Home, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Timeline",
      path: "/timeline",
      icon: CalendarClock,
    },
    {
      name: "Scheduler",
      path: "/scheduler",
      icon: Bell,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-background border-t border-border z-50">
      <div className="flex justify-around items-center px-2 py-1 max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "bottom-nav-item",
              currentPath === item.path
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            <item.icon className="bottom-nav-icon" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
