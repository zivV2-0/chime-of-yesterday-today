
import { CalendarDays, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import { Waveform } from "./Waveform";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface ChorusCardProps {
  id: string;
  date: Date;
  title: string;
  isPlaying?: boolean;
  onPlay: () => void;
}

export function ChorusCard({
  id,
  date,
  title,
  isPlaying = false,
  onPlay,
}: ChorusCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    
    toast({
      title: !isFavorite ? "Added to favorites" : "Removed from favorites",
      description: `"${title}" has been ${!isFavorite ? "added to" : "removed from"} your favorites.`,
    });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // In a real app, this would use the Web Share API
    toast({
      title: "Sharing chorus",
      description: "Share this educational musical journey with your friends!",
    });
    
    // Show confetti effect
    const container = document.getElementById('confetti-container');
    if (container) {
      for (let i = 0; i < 20; i++) {
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
  };

  return (
    <div 
      className="relative border rounded-lg overflow-hidden bg-card hover:shadow-md transition-shadow cursor-pointer"
      onClick={onPlay}
    >
      <div id="confetti-container" className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      <div className="p-3 space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{formatDate(date)}</span>
          </div>
          <div className="flex space-x-1">
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-7 w-7" 
              onClick={handleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart 
                className="h-4 w-4" 
                fill={isFavorite ? "#FF6A3D" : "transparent"} 
                color={isFavorite ? "#FF6A3D" : "currentColor"} 
              />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-7 w-7" 
              onClick={handleShare}
              aria-label="Share chorus"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <h3 className="font-bold text-sm text-balance line-clamp-2">{title}</h3>
        
        <Waveform active={isPlaying} />
        
        {isPlaying && (
          <div className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"></div>
        )}
      </div>
    </div>
  );
}
