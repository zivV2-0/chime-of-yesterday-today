
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getTodaysHistoryFact } from "@/lib/utils";

export function FloatingActionButton() {
  const { toast } = useToast();
  
  const handlePlayNext = () => {
    const todayFact = getTodaysHistoryFact();
    
    toast({
      title: "Playing today's chorus",
      description: "Historical event from this day in history",
    });
    
    // In a real app, this would play the audio for today's historical event
    setTimeout(() => {
      toast({
        title: "Now playing",
        description: todayFact,
      });
    }, 1000);
  };

  return (
    <Button
      onClick={handlePlayNext}
      className="fixed bottom-20 right-4 rounded-full p-3 shadow-lg sunrise-gradient hover:opacity-90 transition-opacity"
      aria-label="Play Today's Chorus"
    >
      <Play className="h-6 w-6 text-white" fill="white" />
    </Button>
  );
}
