
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { BellButton } from "@/components/BellButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { getRandomHistoryFact } from "@/lib/utils";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const todayFact = "On May 21, 1881, Clara Barton founded the American Red Cross";
  
  const handlePlay = () => {
    setIsPlaying(true);
    
    // In a real app, this would play audio
    setTimeout(() => {
      setIsPlaying(false);
    }, 5000);
  };
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-8 min-h-[70vh]">
        <div className="text-center space-y-1 animate-fade-in">
          <h1 className="text-3xl font-bold text-navy-dark dark:text-white">
            History Chorus
          </h1>
          <p className="text-muted-foreground">
            Wake up the past. Sing in the present.
          </p>
        </div>
        
        <div className="py-6">
          <BellButton onPlay={handlePlay} />
        </div>
        
        <CountdownTimer targetTime="07:50" />
        
        <div className="bg-muted/50 rounded-lg p-4 max-w-sm w-full">
          <p className="text-sm font-medium">Tomorrow's preview:</p>
          <p className="text-balance italic text-muted-foreground">
            "{todayFact}"
          </p>
        </div>
        
        {isPlaying && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg shadow-lg max-w-sm w-full animate-fade-in">
              <h2 className="text-xl font-bold">Now Playing</h2>
              <div className="sunrise-gradient h-1 w-full rounded-full animate-pulse-soft"></div>
              <p className="text-balance">{todayFact}</p>
              <button 
                onClick={() => setIsPlaying(false)}
                className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
