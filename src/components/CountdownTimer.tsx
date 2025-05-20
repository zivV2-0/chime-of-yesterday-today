
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetTime: string; // Format: "HH:MM"
}

export function CountdownTimer({ targetTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<string>("--:--:--");
  const [isToday, setIsToday] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const [hours, minutes] = targetTime.split(":").map(Number);
      
      const target = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        hours,
        minutes
      );
      
      // If the target time has passed today, set it for tomorrow
      if (target.getTime() < now.getTime()) {
        target.setDate(target.getDate() + 1);
        setIsToday(false);
      } else {
        setIsToday(true);
      }
      
      const diff = target.getTime() - now.getTime();
      
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };
    
    // Initial calculation
    setTimeLeft(calculateTimeLeft());
    
    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="flex flex-col items-center space-y-1">
      <p className="text-muted-foreground text-sm">
        {isToday ? "Auto-plays in:" : "Next chorus in:"}
      </p>
      <div className="font-mono text-lg font-bold bg-muted/50 rounded-md px-3 py-1">
        {timeLeft}
      </div>
      <p className="text-xs text-muted-foreground">
        {isToday ? "Today" : "Tomorrow"} at {targetTime}
      </p>
    </div>
  );
}
