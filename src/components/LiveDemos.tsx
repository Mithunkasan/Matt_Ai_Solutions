import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoModal from "@/components/DemoModal";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  Target, 
  Receipt, 
  Cog, 
  Play, 
  TrendingUp,
  Clock,
  Users
} from "lucide-react";

const LiveDemos = () => {
  const [selectedDemo, setSelectedDemo] = useState<string>("");
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const { toast } = useToast();

  const handleDemoClick = (demoTitle: string) => {
    setSelectedDemo(demoTitle);
    setIsDemoModalOpen(true);
  };

  const demos = [
    {
      title: "Content Automation",
      description: "Generate blog posts, social media content, and marketing copy",
      icon: FileText,
      metrics: "75% faster content creation",
      color: "from-tech-primary to-tech-accent",
      preview: "AI writing assistant generating SEO-optimized blog posts...",
      time: "2 min demo"
    },
    {
      title: "Lead Scoring Engine",
      description: "Identify high-value prospects with AI-powered scoring",
      icon: Target,
      metrics: "3x higher conversion rates",
      color: "from-tech-accent to-tech-secondary",
      preview: "Analyzing lead behavior patterns and engagement scores...",
      time: "3 min demo"
    },
    {
      title: "Invoice OCR Processing",
      description: "Automate invoice data extraction and processing",
      icon: Receipt,
      metrics: "90% processing time reduction",
      color: "from-tech-secondary to-tech-primary",
      preview: "Extracting vendor details, amounts, and dates from invoices...",
      time: "2 min demo"
    },
    {
      title: "RPA Workflow Builder",
      description: "Create automated workflows for repetitive tasks",
      icon: Cog,
      metrics: "80% task automation",
      color: "from-tech-primary/80 to-tech-accent/80",
      preview: "Building workflow: Email → CRM → Follow-up automation...",
      time: "4 min demo"
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-tech-primary/10 backdrop-blur-sm rounded-full px-6 py-3 border border-tech-primary/20 mb-6">
            <Play className="w-5 h-5 text-tech-primary" />
            <span className="text-sm font-medium text-tech-primary">Interactive Demos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-dark font-heading">
            See AI in <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our AI solutions with real data. No signup required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <Card key={index} className="group p-8 bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-tech transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                  <demo.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-tech-dark mb-2 font-heading">{demo.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{demo.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-tech-primary">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-semibold">{demo.metrics}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{demo.time}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Preview */}
              <div className="mb-6 p-4 bg-tech-dark/5 rounded-lg border border-tech-primary/10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-tech-secondary rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Live Preview</span>
                </div>
                <p className="text-sm text-tech-dark font-mono">{demo.preview}</p>
              </div>

              <div className="flex items-center justify-between">
                <Button 
                  variant="tech" 
                  size="sm" 
                  className="group"
                  onClick={() => handleDemoClick(demo.title)}
                >
                  Try Demo
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
                <span className="text-xs text-muted-foreground flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>1.2k+ tried this month</span>
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="tech-outline" 
            size="lg"
            onClick={() => toast({ title: "All Demos", description: "Comprehensive demo page coming soon!" })}
          >
            View All Demos
          </Button>
        </div>
      </div>

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        demoType={selectedDemo}
      />
    </section>
  );
};

export default LiveDemos;