import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ContactModal from "@/components/ContactModal";
import { 
  FileText, 
  Target, 
  Receipt, 
  Cog, 
  Play, 
  Pause,
  CheckCircle,
  Clock
} from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoType: string;
}

const DemoModal = ({ isOpen, onClose, demoType }: DemoModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const demoData: Record<string, any> = {
    "Content Automation": {
      icon: FileText,
      title: "AI Content Generator",
      description: "Watch as our AI creates SEO-optimized blog content",
      steps: [
        { text: "Analyzing target keywords: 'AI business solutions'", time: 1000 },
        { text: "Generating compelling headline options", time: 1500 },
        { text: "Creating introduction paragraph", time: 2000 },
        { text: "Building structured content outline", time: 1200 },
        { text: "Adding SEO meta description", time: 800 },
        { text: "✅ Blog post generated successfully!", time: 500 }
      ]
    },
    "Lead Scoring Engine": {
      icon: Target,
      title: "AI Lead Scoring System",
      description: "See how AI evaluates and scores potential leads",
      steps: [
        { text: "Processing lead data: John Smith, Tech CEO", time: 800 },
        { text: "Analyzing company size: 250 employees (+15 points)", time: 1200 },
        { text: "Email engagement rate: 85% (+20 points)", time: 1000 },
        { text: "Website behavior: 8 page views (+10 points)", time: 1100 },
        { text: "Industry match: SaaS (+25 points)", time: 900 },
        { text: "🎯 Final Score: 70/100 - HOT LEAD!", time: 600 }
      ]
    },
    "Invoice OCR Processing": {
      icon: Receipt,
      title: "Smart Invoice Processing",
      description: "Experience automated invoice data extraction",
      steps: [
        { text: "Scanning uploaded invoice document", time: 1000 },
        { text: "Detected vendor: TechSupply Co.", time: 1200 },
        { text: "Invoice number: INV-2024-0156", time: 800 },
        { text: "Amount: $2,450.00", time: 900 },
        { text: "Due date: March 15, 2024", time: 700 },
        { text: "✅ Data extracted and validated!", time: 500 }
      ]
    },
    "RPA Workflow Builder": {
      icon: Cog,
      title: "Workflow Automation",
      description: "Build automated business processes",
      steps: [
        { text: "Creating workflow: Lead Follow-up Process", time: 1000 },
        { text: "Trigger: New lead form submission", time: 1200 },
        { text: "Action 1: Send welcome email", time: 1000 },
        { text: "Action 2: Add to CRM system", time: 1100 },
        { text: "Action 3: Schedule follow-up task", time: 900 },
        { text: "⚙️ Workflow activated and running!", time: 600 }
      ]
    }
  };

  const currentDemo = demoData[demoType];
  const [currentStep, setCurrentStep] = useState(0);
  const [stepText, setStepText] = useState("");

  // Early return if demo data is not found
  if (!currentDemo) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Demo Not Found</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              The requested demo could not be found.
            </p>
            <Button onClick={onClose} variant="outline">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const runDemo = async () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setProgress(0);
    
    for (let i = 0; i < currentDemo.steps.length; i++) {
      setCurrentStep(i);
      setStepText(currentDemo.steps[i].text);
      setProgress(((i + 1) / currentDemo.steps.length) * 100);
      
      await new Promise(resolve => setTimeout(resolve, currentDemo.steps[i].time));
    }
    
    setIsPlaying(false);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setProgress(0);
    setStepText("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <currentDemo.icon className="w-6 h-6 text-tech-primary" />
            {currentDemo.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-muted-foreground">{currentDemo.description}</p>

          {/* Demo Interface */}
          <div className="bg-gradient-subtle p-6 rounded-lg border">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-tech-primary/10 text-tech-primary border-tech-primary/20">
                Live Demo
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>~30 seconds</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Demo Output */}
            <div className="bg-background/80 p-4 rounded border min-h-[100px] font-mono text-sm">
              {stepText ? (
                <div className="flex items-center gap-2">
                  {currentStep === currentDemo.steps.length - 1 ? (
                    <CheckCircle className="w-4 h-4 text-tech-secondary flex-shrink-0" />
                  ) : (
                    <div className="w-2 h-2 bg-tech-primary rounded-full animate-pulse flex-shrink-0" />
                  )}
                  <span className="text-foreground">{stepText}</span>
                </div>
              ) : (
                <span className="text-muted-foreground">Click 'Run Demo' to see AI in action...</span>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Button 
                onClick={runDemo} 
                disabled={isPlaying}
                variant="tech"
                className="flex items-center gap-2"
              >
                {isPlaying ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Running Demo
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Run Demo
                  </>
                )}
              </Button>
              
              <Button onClick={resetDemo} variant="outline">
                Reset
              </Button>
            </div>

            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </div>

          {/* CTA */}
          <div className="bg-tech-primary/5 p-4 rounded-lg border border-tech-primary/20">
            <h4 className="font-semibold mb-2">Ready to implement this solution?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Schedule a consultation to see how this AI solution can work for your business.
            </p>
            <Button variant="tech" size="sm" onClick={() => setIsContactModalOpen(true)}>
              Schedule Consultation
            </Button>
          </div>
        </div>
      </DialogContent>
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="consultation"
      />
    </Dialog>
  );
};

export default DemoModal;