
import { cn } from "@/lib/utils";

interface WaveformProps {
  pattern?: number[];
  active?: boolean;
  mini?: boolean;
}

export function Waveform({ 
  pattern, 
  active = false, 
  mini = false 
}: WaveformProps) {
  // Default pattern if none provided
  const defaultPattern = [
    0.3, 0.5, 0.2, 0.7, 0.4, 0.6, 0.3, 0.8, 0.5, 0.3,
    0.6, 0.4, 0.7, 0.3, 0.5, 0.6, 0.4, 0.7, 0.3, 0.5,
    0.8, 0.7, 0.4, 0.6, 0.5, 0.3, 0.7, 0.4, 0.6, 0.5
  ];
  
  const bars = pattern || defaultPattern;
  
  return (
    <div 
      className={cn(
        "waveform", 
        mini ? "h-8" : "h-12",
        active ? "bg-muted/70" : "bg-muted/30"
      )}
    >
      <div className="flex items-end h-full w-full justify-between px-1">
        {bars.map((height, index) => (
          <div
            key={index}
            className={cn(
              "waveform-bar",
              active ? "opacity-100" : "opacity-70"
            )}
            style={{
              height: `${height * 100}%`,
              width: mini ? '1px' : '2px',
              marginLeft: '1px',
              marginRight: '1px',
            }}
          />
        ))}
      </div>
    </div>
  );
}
