import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { generateCapabilityDeck } from "@/utils/navigation";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, Users, Award, Target, Zap, Shield 
} from "lucide-react";

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { toast } = useToast();

  const handleDownloadDeck = () => {
    generateCapabilityDeck();
    toast({
      title: "Download Started",
      description: "Matt AI Solutions capability deck is being downloaded.",
    });
  };

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure success in metrics that matter to your business, not AI buzzwords."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "From pilot to production in weeks, not quarters. Speed without compromise."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security, compliance-ready architecture, and ethical AI practices."
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "AI that enhances human potential, never replaces it. Training included."
    }
  ];

  const locations = [
    {
      name: "Nagercoil HQ",
      address: "3rd floor, Pillars Gate, Vadasery",
      role: "Main Operations & Development"
    },
    {
      name: "Thukalay",
      role: "Regional Support Hub"
    },
    {
      name: "Aralvaimozhi", 
      role: "Training Center"
    },
    {
      name: "Kochi",
      role: "Enterprise Solutions"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-tech-primary/10 text-tech-primary border-tech-primary/20">
            About Matt AI Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            The "AI Office" for Modern Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're not just another AI consultancy. We're your dedicated AI department, 
            building and deploying solutions that move the needle on revenue, efficiency, 
            and customer experience. Based in Tamil Nadu, serving enterprises worldwide.
          </p>
        </div>

        {/* Mission & Approach */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="glass-card border-accent-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Target className="w-6 h-6 text-accent-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize AI for businesses of all sizes by delivering practical, 
                measurable solutions that create immediate value. We believe AI should 
                solve real problems, not create new ones.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card border-tech-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Zap className="w-6 h-6 text-tech-secondary" />
                Our Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Start small, scale fast. Every project begins with a focused pilot 
                that proves ROI before full deployment. We integrate with your existing 
                systems and train your team for long-term success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/5 via-transparent to-tech-secondary/5 rounded-3xl"></div>
          <div className="relative p-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent">
                What Drives Us
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our core principles that shape every AI solution we deliver
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="glass-card text-center border-muted/20 hover:border-accent-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-tech-primary via-tech-accent to-tech-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse shadow-lg">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-tech-dark to-tech-primary bg-clip-text text-transparent">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-accent-primary" />
            Our Locations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="glass-card border-muted/20 hover:border-tech-primary/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                  {location.address && (
                    <CardDescription className="text-sm">
                      {location.address}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-xs">
                    {location.role}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Credentials & Certifications */}
        <Card className="glass-card border-success/20 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-success" />
              Credentials & Partnerships
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge className="bg-tech-primary/10 text-tech-primary border-tech-primary/20">
                OpenAI Partner
              </Badge>
              <Badge className="bg-accent-primary/10 text-accent-primary border-accent-primary/20">
                Google Cloud AI Certified
              </Badge>
              <Badge className="bg-tech-secondary/10 text-tech-secondary border-tech-secondary/20">
                AWS ML Certified
              </Badge>
              <Badge className="bg-success/10 text-success border-success/20">
                ISO 27001 Compliant
              </Badge>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team holds industry certifications and maintains partnerships with 
              leading AI platforms to ensure you get enterprise-grade solutions.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your AI Office?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a 20-minute discovery call. We'll show you exactly how AI can 
            impact your specific business metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="tech" 
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
            >
              Schedule Discovery Call
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadDeck}
            >
              Download Capability Deck
            </Button>
          </div>
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

export default About;