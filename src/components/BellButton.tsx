
import { Bell } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BellButtonProps {
  onPlay: () => void;
  size?: "medium" | "large";
}

export function BellButton({ onPlay, size = "large" }: BellButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();
  
  const handleClick = () => {
    setIsAnimating(true);
    onPlay();
    
    // Show confetti effect
    const container = document.getElementById('confetti-container');
    if (container) {
      for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'absolute w-2 h-2 rounded-full animate-confetti';
        confetti.style.backgroundColor = ['#FF6A3D', '#FF9A3D', '#FFC72C'][Math.floor(Math.random() * 3)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        
        container.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
          confetti.remove();
        }, 1500);
      }
    }
    
    toast({
      title: "Today's Chorus",
      description: "Playing the historic melody for May 21st!",
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <div className="relative">
      <div id="confetti-container" className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      <button
        onClick={handleClick}
        className={cn(
          "rounded-full flex items-center justify-center sunrise-gradient text-white shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sunrise",
          size === "large" ? "w-40 h-40 md:w-48 md:h-48" : "w-20 h-20",
          isAnimating && "animate-bell-swing"
        )}
        aria-label="Play Today's Chorus"
      >
        <Bell
          className={cn(
            "stroke-2",
            size === "large" ? "w-20 h-20" : "w-10 h-10"
          )}
          fill="transparent"
        />
      </button>
    </div>
  );
}
