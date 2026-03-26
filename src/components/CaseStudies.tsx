import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { useToast } from "@/hooks/use-toast";
import { TrendingUp, Users, Clock, DollarSign, ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"demo" | "consultation">("consultation");
  const { toast } = useToast();

  const openModal = (type: "demo" | "consultation") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const viewCaseStudy = (caseTitle: string) => {
    toast({
      title: "Case Study",
      description: `Opening detailed case study: ${caseTitle}`,
    });
  };

  const cases = [
    {
      title: "FinTech Invoice Processing Revolution",
      client: "Regional Bank",
      challenge: "Processing 10,000+ invoices monthly with 73% manual effort",
      solution: "Custom OCR + AI validation pipeline with ERP integration",
      results: [
        { metric: "Processing time", before: "45 minutes", after: "3 minutes", improvement: "94% faster" },
        { metric: "Accuracy", before: "87%", after: "99.2%", improvement: "14% increase" },
        { metric: "Cost per invoice", before: "$12.50", after: "$1.80", improvement: "86% reduction" }
      ],
      tech: ["OpenAI Vision", "Python", "SQL Server", "REST APIs"],
      timeline: "6 weeks pilot → 2 weeks full deployment"
    },
    {
      title: "E-commerce Personalization Engine",
      client: "Fashion D2C Brand",
      challenge: "Low conversion rates and generic product recommendations",
      solution: "Real-time behavioral AI with A/B testing framework",
      results: [
        { metric: "Conversion rate", before: "2.1%", after: "4.7%", improvement: "124% uplift" },
        { metric: "AOV", before: "$89", after: "$127", improvement: "43% increase" },
        { metric: "Customer LTV", before: "$340", after: "$520", improvement: "53% boost" }
      ],
      tech: ["TensorFlow", "Redis", "Shopify API", "Google Analytics"],
      timeline: "4 weeks development → 2 weeks testing"
    },
    {
      title: "HR Screening Automation",
      client: "Tech Consulting Firm",
      challenge: "Screening 500+ resumes weekly, inconsistent evaluation",
      solution: "AI resume analysis + automated interview scheduling",
      results: [
        { metric: "Screening time", before: "8 hours", after: "45 minutes", improvement: "90% reduction" },
        { metric: "Quality hires", before: "68%", after: "89%", improvement: "31% improvement" },
        { metric: "Time to hire", before: "21 days", after: "12 days", improvement: "43% faster" }
      ],
      tech: ["NLP Models", "ATS Integration", "Calendar APIs", "Slack Bot"],
      timeline: "3 weeks setup → 1 week training"
    }
  ];

  return (
    <section className="py-12 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent-primary/10 text-accent-primary border-accent-primary/20">
            Proven Results
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Real Impact, Real Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Matt AI Solutions has transformed operations across industries, 
            delivering measurable ROI in weeks, not quarters.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {cases.map((study, index) => (
            <Card key={index} className="glass-card border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-lg">{study.client}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {study.timeline}
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-destructive">Challenge</h4>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold mb-2 text-accent-primary">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-success" />
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                          <div>
                            <div className="font-medium">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">
                              {result.before} → {result.after}
                            </div>
                          </div>
                          <Badge className="bg-success/10 text-success border-success/20">
                            {result.improvement}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tech.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="tech-outline" 
                  size="sm"
                  onClick={() => viewCaseStudy(study.title)}
                >
                  Read Full Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="tech" 
            size="lg" 
            className="mr-4"
            onClick={() => openModal("consultation")}
          >
            <Users className="w-4 h-4 mr-2" />
            Schedule Your Success Story
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => toast({ title: "Coming Soon", description: "Case studies page coming soon!" })}
          >
            View All Case Studies
          </Button>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </section>
  );
};

export default CaseStudies;