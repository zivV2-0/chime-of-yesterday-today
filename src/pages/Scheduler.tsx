
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Bell, Volume2 } from "lucide-react";

const Scheduler = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [time, setTime] = useState("07:50");
  const [volume, setVolume] = useState(80);
  const [speakerOutput, setSpeakerOutput] = useState(false);
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: `Auto-play ${autoPlay ? 'enabled' : 'disabled'} at ${time}`,
    });
  };
  
  const handleTestSound = () => {
    toast({
      title: "Testing sound",
      description: "Playing test chime...",
    });
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-dark dark:text-white">Scheduler</h1>
          <p className="text-muted-foreground">Configure daily chorus playback</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-play" className="text-base">Auto-play daily</Label>
              <Switch
                id="auto-play"
                checked={autoPlay}
                onCheckedChange={setAutoPlay}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Classroom speakers will chime automatically at your scheduled time.
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time" className="text-base">Daily time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              disabled={!autoPlay}
              className="w-full"
            />
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="speaker-output" className="text-base">Classroom speaker output</Label>
                <Switch
                  id="speaker-output"
                  checked={speakerOutput}
                  onCheckedChange={setSpeakerOutput}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Route audio through classroom PA system
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="volume" className="text-base flex items-center">
                  <Volume2 className="h-4 w-4 mr-2" />
                  Volume
                </Label>
                <span className="text-sm text-muted-foreground">{volume}%</span>
              </div>
              <Slider
                id="volume"
                value={[volume]}
                min={0}
                max={100}
                step={1}
                onValueChange={(vals) => setVolume(vals[0])}
              />
            </div>
            
            <Button 
              onClick={handleTestSound}
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Bell className="h-4 w-4" />
              Test Sound
            </Button>
          </div>
          
          <Button 
            onClick={handleSave}
            className="w-full sunrise-gradient hover:opacity-90 transition-opacity"
          >
            Save Settings
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Scheduler;
