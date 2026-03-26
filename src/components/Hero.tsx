import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Lightbulb, Play } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { scrollToSection } from "@/utils/navigation";
import heroImage from "@/assets/ai-hero-bg.jpg";

const Hero = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 to-tech-dark/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <Zap className="w-5 h-5 text-tech-accent" />
                <span className="text-sm font-medium">AI-Powered Business Solutions</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-heading">
              Deploy AI that moves metrics
              <span className="block bg-gradient-to-r from-tech-accent to-tech-secondary bg-clip-text text-transparent animate-pulse-glow">
                in weeks, not quarters
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed font-sans">
              From pilot to production: content, support, HR, finance — one team, one stack. 
              We build custom AI solutions that drive growth and efficiency for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                variant="tech" 
                size="lg" 
                className="group animate-scale-in"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="tech-outline" 
                size="lg" 
                className="animate-scale-in"
                onClick={() => scrollToSection('pricing')}
              >
                See Pricing
              </Button>
            </div>
            
            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Target className="w-8 h-8 text-tech-accent" />
                </div>
                <h3 className="text-lg font-semibold">AI Business Solutions</h3>
                <p className="text-sm text-white/80">Custom AI implementation for your specific needs</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Zap className="w-8 h-8 text-tech-accent" />
                </div>
                <h3 className="text-lg font-semibold">IT & Infrastructure</h3>
                <p className="text-sm text-white/80">Complete technical foundation and integration</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <Lightbulb className="w-8 h-8 text-tech-accent" />
                </div>
                <h3 className="text-lg font-semibold">Training & Consulting</h3>
                <p className="text-sm text-white/80">Expert guidance and education for your team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="demo"
      />
    </>
  );
};

export default Hero;