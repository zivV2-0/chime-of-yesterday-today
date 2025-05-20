
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Bell, BookOpen, Music } from "lucide-react";
import { Layout } from "@/components/Layout";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  
  const steps = [
    {
      title: "Generate",
      description: "Every day, we generate a new historical fact about something that happened on this day in history.",
      icon: BookOpen,
      color: "text-sunrise-dark",
      bgColor: "bg-sunrise-dark/10",
    },
    {
      title: "Compose",
      description: "Our AI turns the historical fact into a catchy one-minute chorus that's easy to remember.",
      icon: Music,
      color: "text-sunrise",
      bgColor: "bg-sunrise/10",
    },
    {
      title: "Ring",
      description: "At 7:50 AM, your classroom bell rings, and the chorus plays for everyone to hear and learn.",
      icon: Bell,
      color: "text-sunrise-light",
      bgColor: "bg-sunrise-light/10",
    },
  ];
  
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Finished onboarding
      navigate("/");
    }
  };
  
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  
  const handleSkip = () => {
    navigate("/");
  };
  
  const currentStep = steps[step];
  
  return (
    <Layout hideNav hideFab>
      <div className="flex flex-col items-center justify-between min-h-[80vh] py-8">
        <div className="w-full flex justify-between items-center">
          {step > 0 ? (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleBack}
              aria-label="Previous step"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          ) : (
            <div className="w-10" />
          )}
          
          <div className="flex space-x-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${i === step ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            className="text-muted-foreground" 
            onClick={handleSkip}
          >
            Skip
          </Button>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-8 max-w-xs mx-auto">
          <div 
            className={`w-32 h-32 rounded-full ${currentStep.bgColor} flex items-center justify-center`}
          >
            <currentStep.icon className={`h-16 w-16 ${currentStep.color}`} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{currentStep.title}</h1>
            <p className="text-muted-foreground">{currentStep.description}</p>
          </div>
        </div>
        
        <Button 
          onClick={handleNext}
          className="w-full sunrise-gradient hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          {step < steps.length - 1 ? (
            <>
              Continue
              <ArrowRight className="h-5 w-5" />
            </>
          ) : (
            "Get Started"
          )}
        </Button>
      </div>
    </Layout>
  );
};

export default Onboarding;
