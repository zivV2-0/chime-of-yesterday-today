
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ChorusCard } from "@/components/ChorusCard";
import { useToast } from "@/hooks/use-toast";
import { generateWaveformPattern, getHistoryFactByDate } from "@/lib/utils";

const Timeline = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Create sample choruses for the past week
  const today = new Date();
  const choruses = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i);
    
    return {
      id: `chorus-${i}`,
      date,
      title: getHistoryFactByDate(date),
      waveform: generateWaveformPattern()
    };
  });
  
  const handlePlay = (id: string, title: string) => {
    if (playingId === id) {
      setPlayingId(null);
      toast({
        title: "Paused",
        description: "Chorus playback paused",
      });
    } else {
      setPlayingId(id);
      toast({
        title: "Now Playing",
        description: title,
      });
      
      // Auto-stop after 5 seconds (simulating a short chorus)
      setTimeout(() => {
        setPlayingId(null);
      }, 5000);
    }
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-dark dark:text-white">Timeline</h1>
          <p className="text-muted-foreground">Explore historical events that happened on these dates</p>
        </div>
        
        <div className="space-y-4">
          {choruses.length > 0 ? (
            choruses.map((chorus) => (
              <ChorusCard
                key={chorus.id}
                id={chorus.id}
                date={chorus.date}
                title={chorus.title}
                isPlaying={playingId === chorus.id}
                onPlay={() => handlePlay(chorus.id, chorus.title)}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground">
                No bells yet! First chorus rings at 07:50 tomorrow.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Timeline;
