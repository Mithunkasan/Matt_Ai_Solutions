import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { 
  Search, 
  FlaskConical, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HowItWorks = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Identify Opportunities",
      description: "We analyze your current processes to identify the best AI opportunities with highest ROI potential.",
      icon: Search,
      color: "from-tech-primary to-tech-accent",
      features: [
        "Process audit & analysis",
        "ROI opportunity mapping",
        "Technical feasibility study",
        "Custom strategy roadmap"
      ],
      timeline: "Week 1-2"
    },
    {
      number: "02", 
      title: "Pilot",
      subtitle: "Proof of Concept",
      description: "Build and test a small-scale AI solution to validate the approach and measure initial results.",
      icon: FlaskConical,
      color: "from-tech-accent to-tech-secondary",
      features: [
        "MVP development",
        "Data integration setup",
        "Performance testing",
        "User feedback collection"
      ],
      timeline: "Week 3-6"
    },
    {
      number: "03",
      title: "Deploy",
      subtitle: "Full Implementation", 
      description: "Scale the proven solution across your organization with full integration and team training.",
      icon: Rocket,
      color: "from-tech-secondary to-tech-primary",
      features: [
        "Production deployment",
        "System integrations",
        "Team training & onboarding",
        "Security & compliance setup"
      ],
      timeline: "Week 7-10"
    },
    {
      number: "04",
      title: "Scale",
      subtitle: "Continuous Optimization",
      description: "Monitor performance, optimize results, and expand AI capabilities across additional use cases.",
      icon: TrendingUp,
      color: "from-tech-primary/80 to-tech-accent/80",
      features: [
        "Performance monitoring",
        "Continuous optimization",
        "Additional use cases",
        "Advanced feature rollouts"
      ],
      timeline: "Ongoing"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-dark font-heading">
            How It <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step methodology delivers measurable AI results in weeks, not quarters
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-tech-primary/60" />
                  </div>
                )}
                
                <Card className="h-full p-8 bg-gradient-card shadow-card border-0 hover:shadow-tech transition-all duration-300 group">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-tech-primary/20 font-heading">
                      {step.number}
                    </div>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:animate-pulse-glow`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-tech-dark mb-2 font-heading">{step.title}</h3>
                    <p className="text-tech-primary font-semibold mb-4">{step.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    
                    {/* Timeline */}
                    <div className="inline-flex items-center bg-tech-primary/10 rounded-full px-3 py-1 mb-6">
                      <span className="text-sm font-medium text-tech-primary">{step.timeline}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-tech-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10 backdrop-blur-sm border-tech-primary/20">
            <h3 className="text-2xl font-bold text-tech-dark mb-4 font-heading">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a 20-minute scoping call and we'll tell you if AI can help your specific use case.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="tech" 
                size="lg"
                onClick={() => setIsContactModalOpen(true)}
              >
                Book Free Consultation
              </Button>
            </div>
            <div className="text-sm text-muted-foreground text-center mt-4">
              ✓ No commitment required ✓ Tailored recommendations ✓ ROI estimates
            </div>
          </Card>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="consultation"
      />
    </section>
  );
};

export default HowItWorks;