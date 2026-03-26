import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { useToast } from "@/hooks/use-toast";
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Headphones,
  Users,
  ArrowRight,
  Search,
  TrendingUp
} from "lucide-react";

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"demo" | "consultation" | "pricing">("pricing");
  const { toast } = useToast();

  const handlePlanClick = (planName: string) => {
    if (planName === "Assessment First") {
      setModalType("consultation");
    } else if (planName === "Enterprise") {
      setModalType("pricing");
    } else {
      setModalType("demo");
    }
    setIsModalOpen(true);
  };

  const showFAQ = () => {
    setModalType("consultation");
    setIsModalOpen(true);
  };

  const plans = [
    {
      name: "Assessment First",
      subtitle: "Start Here",
      price: "Free",
      description: "Comprehensive AI readiness assessment and roadmap",
      color: "from-tech-primary/20 to-tech-accent/20",
      features: [
        "Process audit & analysis",
        "ROI opportunity mapping", 
        "Technical feasibility study",
        "Custom strategy roadmap",
        "No-obligation consultation"
      ],
      cta: "Get Free Assessment",
      popular: false,
      icon: Search
    },
    {
      name: "Starter",
      subtitle: "Single Use Case",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for testing AI with one specific business process",
      color: "from-tech-primary to-tech-accent",
      features: [
        "1 AI solution deployment",
        "Basic integrations (CRM/ERP)",
        "Team training (up to 10 users)",
        "3 months support",
        "Performance monitoring",
        "Documentation & handover"
      ],
      cta: "Start Pilot",
      popular: false,
      icon: Zap
    },
    {
      name: "Growth",
      subtitle: "Multiple Solutions", 
      price: "$8,999",
      period: "6 months",
      description: "Scale AI across departments with integrated solutions",
      color: "from-tech-accent to-tech-secondary",
      features: [
        "3-5 AI solution deployments",
        "Advanced integrations",
        "Team training (up to 50 users)",
        "6 months premium support",
        "Custom model development",
        "Workflow automation",
        "Monthly optimization reviews"
      ],
      cta: "Scale with Growth",
      popular: true,
      icon: TrendingUp
    },
    {
      name: "Enterprise",
      subtitle: "Full AI Transformation",
      price: "Custom",
      description: "Complete AI transformation with dedicated team",
      color: "from-tech-secondary to-tech-primary",
      features: [
        "Unlimited AI solutions",
        "Enterprise-grade security",
        "Dedicated AI team",
        "Advanced analytics & BI",
        "Custom model training",
        "24/7 priority support",
        "Quarterly strategy reviews",
        "Multi-location deployment"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Shield
    }
  ];

  const addOns = [
    { name: "Additional RPA Bots", price: "$499 each" },
    { name: "Extra Team Training", price: "$99/user" },
    { name: "Priority Support", price: "$299/month" },
    { name: "Custom Integrations", price: "$1,299 each" }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-dark font-heading">
            Simple, <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a free assessment, then choose the plan that fits your AI ambitions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-8 ${plan.popular ? 'ring-2 ring-tech-primary shadow-tech' : 'shadow-card'} bg-gradient-card border-0 hover:shadow-tech transition-all duration-300 group ${plan.popular ? 'scale-105' : 'hover:scale-105'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-tech-primary to-tech-secondary text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-tech-dark mb-2 font-heading">{plan.name}</h3>
                <p className="text-tech-primary font-semibold text-sm mb-4">{plan.subtitle}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-tech-dark">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm ml-1">/{plan.period}</span>}
                </div>
                
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-tech-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "tech" : "tech-outline"} 
                className="w-full group"
                onClick={() => handlePlanClick(plan.name)}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-tech-primary/5 to-tech-secondary/5 backdrop-blur-sm border-tech-primary/10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-tech-dark mb-4 font-heading">Popular Add-ons</h3>
              <p className="text-muted-foreground">Extend your AI capabilities with these optional services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/60 rounded-lg border border-tech-primary/10">
                  <span className="font-medium text-tech-dark">{addon.name}</span>
                  <span className="text-tech-primary font-bold">{addon.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Questions about pricing or implementation?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="tech-outline"
              onClick={() => {
                setModalType("consultation");
                setIsModalOpen(true);
              }}
            >
              <Headphones className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
            <Button variant="ghost" onClick={showFAQ}>
              <Users className="w-4 h-4 mr-2" />
              Ask Questions
            </Button>
          </div>
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

export default Pricing;