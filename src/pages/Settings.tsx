
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Volume2 } from "lucide-react";

const Settings = () => {
  const [volume, setVolume] = useState(80);
  const [showCaptions, setShowCaptions] = useState(true);
  const [textSize, setTextSize] = useState(16);
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated",
      action: (
        <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-5 w-5 text-white" />
        </div>
      ),
    });
  };
  
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-navy-dark dark:text-white">Settings</h1>
          <p className="text-muted-foreground">Customize your experience</p>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-base">Theme</Label>
              <ThemeToggle />
            </div>
            <p className="text-sm text-muted-foreground">
              Switch between light and dark theme
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
          
          <div className="space-y-6 border-t pt-4">
            <h2 className="text-lg font-medium">Accessibility</h2>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="captions" className="text-base">Show captions</Label>
                <Switch
                  id="captions"
                  checked={showCaptions}
                  onCheckedChange={setShowCaptions}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Display lyrics captions during playback
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="text-size" className="text-base">Text size</Label>
                <span className="text-sm text-muted-foreground">{textSize}px</span>
              </div>
              <Slider
                id="text-size"
                value={[textSize]}
                min={12}
                max={24}
                step={1}
                onValueChange={(vals) => setTextSize(vals[0])}
              />
              <p className="text-sm text-muted-foreground">
                Sample text at current size
                <span
                  className="block mt-1 border p-2 rounded"
                  style={{ fontSize: `${textSize}px` }}
                >
                  History Chorus helps you learn through music.
                </span>
              </p>
            </div>
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

export default Settings;
