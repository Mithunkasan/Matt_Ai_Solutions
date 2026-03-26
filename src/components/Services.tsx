import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { 
  Bot, 
  Users, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Database, 
  GraduationCap, 
  Lightbulb,
  MessageSquare,
  UserCheck,
  Calculator,
  Cog
} from "lucide-react";

const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "The AI Office",
      description: "Build and implement AI solutions to solve specific business problems",
      icon: Bot,
      color: "from-tech-primary to-tech-secondary",
      features: [
        {
          icon: TrendingUp,
          title: "Marketing & Sales Solutions",
          description: "Content automation, personalization engines, lead scoring, and AI chatbots for sales"
        },
        {
          icon: MessageSquare,
          title: "Customer Service & Support",
          description: "Intelligent chatbot deployment, ticket routing automation, and sentiment analysis"
        },
        {
          icon: Users,
          title: "HR & Operations",
          description: "Automated candidate screening, employee onboarding, and robotic process automation"
        },
        {
          icon: Calculator,
          title: "Finance & Accounting",
          description: "Invoice automation, fraud detection, and financial forecasting"
        }
      ]
    },
    {
      title: "IT & Infrastructure Services",
      subtitle: "Technical Foundation",
      description: "Build the foundation and provide technical expertise for AI implementation",
      icon: Cloud,
      color: "from-tech-secondary to-tech-accent",
      features: [
        {
          icon: Cog,
          title: "AI System Integration",
          description: "Integrate third-party AI APIs and connect different AI tools with business systems"
        },
        {
          icon: Database,
          title: "Custom AI Model Development",
          description: "Build and train bespoke AI/ML models for specific business needs"
        },
        {
          icon: Cloud,
          title: "Cloud Infrastructure Management",
          description: "Set up and manage AI infrastructure on AWS, Google Cloud, and Azure"
        },
        {
          icon: Shield,
          title: "Data Strategy & Analytics",
          description: "Develop company-wide data strategy and build custom AI-powered dashboards"
        }
      ]
    },
    {
      title: "AI Courses, Training & Consulting",
      subtitle: "Education & Advisory",
      description: "Educational and advisory services to build authority and drive revenue",
      icon: GraduationCap,
      color: "from-tech-accent to-tech-primary",
      features: [
        {
          icon: UserCheck,
          title: "Corporate Training Programs",
          description: "AI for Executives, Marketing Teams, and Developers with hands-on training"
        },
        {
          icon: GraduationCap,
          title: "AI Certification Courses",
          description: "Create certified courses like 'Certified AI Prompt Engineer' and 'AI Business Analyst'"
        },
        {
          icon: Lightbulb,
          title: "AI Strategy Consulting",
          description: "Develop long-term AI strategy and conduct AI audits for opportunity identification"
        },
        {
          icon: Shield,
          title: "Ethical AI & Governance",
          description: "Workshops on responsible AI use, data privacy, bias prevention, and internal policies"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-tech-dark">
            Our <span className="bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions starting from as low as <span className="text-tech-primary font-bold">$25</span>. Transform your business operations across three core pillars.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="max-w-7xl mx-auto">
              <Card className="p-8 bg-gradient-card shadow-card border-0">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Service Header */}
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-tech-dark mb-2">{service.title}</h3>
                    <p className="text-tech-primary font-semibold mb-4">{service.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button 
                      variant="tech-outline" 
                      size="sm"
                      onClick={() => setIsContactModalOpen(true)}
                    >
                      Learn More
                    </Button>
                  </div>

                  {/* Features Grid */}
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 border border-border/50">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10 flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-5 h-5 text-tech-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-tech-dark mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="contact"
      />
    </section>
  );
};

export default Services;