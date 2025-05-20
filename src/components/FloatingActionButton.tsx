
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function FloatingActionButton() {
  const { toast } = useToast();
  
  const handlePlayNext = () => {
    toast({
      title: "Playing next chorus",
      description: "Enjoy your educational music!",
    });
  };

  return (
    <Button
      onClick={handlePlayNext}
      className="fixed bottom-20 right-4 rounded-full p-3 shadow-lg sunrise-gradient hover:opacity-90 transition-opacity"
      aria-label="Play Next Chorus"
    >
      <Play className="h-6 w-6 text-white" fill="white" />
    </Button>
  );
}
