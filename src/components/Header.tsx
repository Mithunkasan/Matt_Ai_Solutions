import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import { scrollToSection } from "@/utils/navigation";

const Header = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Matt AI Solutions Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-tech-dark">Matt AI Solutions</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Business Solutions</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-tech-primary transition-colors cursor-pointer"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('demos')}
                className="text-foreground hover:text-tech-primary transition-colors cursor-pointer"
              >
                Live Demos
              </button>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="text-foreground hover:text-tech-primary transition-colors cursor-pointer"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-foreground hover:text-tech-primary transition-colors cursor-pointer"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-tech-primary transition-colors cursor-pointer"
              >
                About
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4 text-tech-primary" />
                  <span>7339585868</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4 text-tech-primary" />
                  <span>info@mattai.com</span>
                </div>
              </div>
              <Button
                variant="tech"
                size="sm"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="contact"
      />
    </>
  );
};

export default Header;