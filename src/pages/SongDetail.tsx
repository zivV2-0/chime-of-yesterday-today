
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waveform } from "@/components/Waveform";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Download, FileMusic, FileText, Heart, Pause, Play, Share2 } from "lucide-react";

const SongDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // This would come from an API in a real app
  const songDetails = {
    title: "The American Red Cross Foundation",
    date: new Date(1881, 4, 21), // May 21, 1881
    description: "On May 21, 1881, Clara Barton founded the American Red Cross, inspired by the Swiss humanitarian organization.",
    lyrics: "In eighteen eighty-one, Clara Barton took a stand\nThe American Red Cross began, a mission so grand\nHelping those in crisis, extending a hand\nA legacy of service across the land\n\nFrom battlefields to disasters, they're always there\nVolunteers with courage, showing they care\nThrough world wars and hurricanes, they persevere\nA symbol of hope when help is rare\n\nRemember Clara Barton, her vision true\nThe American Red Cross, born anew\nOn this historic day, we recall\nHow one woman's mission helps us all",
    teacherNotes: "Discussion points:\n1. How did Clara Barton's experience as a nurse in the Civil War influence her founding of the American Red Cross?\n2. Compare the mission of the American Red Cross in 1881 to its current activities.\n3. Research other humanitarian organizations founded in the 19th century.\n\nActivity idea: Organize a mini blood drive awareness campaign in your classroom or school."
  };
  
  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    
    toast({
      title: isPlaying ? "Paused" : "Now Playing",
      description: songDetails.title,
    });
    
    // Auto-stop after 5 seconds (simulating a short chorus)
    if (!isPlaying) {
      setTimeout(() => {
        setIsPlaying(false);
      }, 5000);
    }
  };
  
  const handleDownload = () => {
    toast({
      title: "Downloading",
      description: "The MP3 file will be downloaded shortly.",
    });
  };
  
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    
    toast({
      title: !isFavorite ? "Added to favorites" : "Removed from favorites",
      description: `"${songDetails.title}" has been ${!isFavorite ? "added to" : "removed from"} your favorites.`,
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Sharing chorus",
      description: "Share this educational musical journey with your friends!",
    });
  };
  
  return (
    <Layout hideFab>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-navy-dark dark:text-white truncate">
            {songDetails.title}
          </h1>
        </div>
        
        <div className="bg-muted/30 rounded-lg p-4">
          <p className="text-balance">{songDetails.description}</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button 
                size="icon" 
                className={isPlaying ? "bg-sunrise text-white" : ""}
                onClick={handleTogglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button 
                variant="outline" 
                onClick={handleDownload}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download MP3</span>
              </Button>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart 
                  className="h-5 w-5" 
                  fill={isFavorite ? "#FF6A3D" : "transparent"} 
                  color={isFavorite ? "#FF6A3D" : "currentColor"} 
                />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleShare}
                aria-label="Share chorus"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <Waveform active={isPlaying} />
        </div>
        
        <Tabs defaultValue="lyrics" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="lyrics" className="flex-1 flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Lyrics
            </TabsTrigger>
            <TabsTrigger value="teacher" className="flex-1 flex items-center gap-1">
              <FileMusic className="h-4 w-4" />
              Teacher Notes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="lyrics" className="mt-4">
            <div className="bg-card rounded-lg p-4 whitespace-pre-line">
              {songDetails.lyrics}
            </div>
          </TabsContent>
          <TabsContent value="teacher" className="mt-4">
            <div className="bg-card rounded-lg p-4 whitespace-pre-line">
              {songDetails.teacherNotes}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SongDetail;
