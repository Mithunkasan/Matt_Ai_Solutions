import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContactModal from "@/components/ContactModal";
import { scrollToSection, openExternalLink } from "@/utils/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Zap
} from "lucide-react";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    "Content Automation",
    "Lead Scoring & Prediction",
    "AI Chatbots & Support",
    "Process Automation (RPA)",
    "Invoice & Expense OCR",
    "Custom AI Development"
  ];

  const training = [
    "AI for Executives",
    "AI for Marketing Teams",
    "AI for Developers",
    "Certified AI Prompt Engineer",
    "AI Business Analyst",
    "Ethical AI Workshop"
  ];

  const company = [
    "About Us",
    "Case Studies",
    "Careers",
    "Partner Program",
    "Resource Library",
    "Blog & Insights"
  ];

  const locations = [
    {
      city: "Nagercoil (HQ)",
      address: "3rd floor, Pillars Gate, Vadasery, kanyakumari Dist, TamilNadu-629001."
    },
    {
      city: "Thukalay",
      address: "1st Floor, IOB Bank Building, Near Bus Stand, Thuckalay, TamilNadu-629175"
    },
    {
      city: "Aralvaimozhi",
      address: "DMI Engineering College, Kumarapuram, Aralvoimozhi, TamilNadu-629301"
    },
    {
      city: "Kochi",
      address: "1st Floor, Quality Bakers, HMT Junction, Kalamassery, Ernakulam-683104"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Matt AI Solutions</h3>
                  <p className="text-sm text-muted-foreground">The "AI Office"</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deploy AI that moves metrics in weeks, not quarters. From pilot to production,
                we build AI solutions that solve real business problems across marketing,
                support, HR, and finance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-accent-primary" />
                  <span>+91 7339585868</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-accent-primary" />
                  <span>info@mattai.com</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-tech-primary/10 text-tech-primary border-tech-primary/20 text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  ISO 27001
                </Badge>
                <Badge className="bg-accent-primary/10 text-accent-primary border-accent-primary/20 text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  AI Certified
                </Badge>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-6">AI Solutions</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="text-sm text-muted-foreground hover:text-accent-primary transition-colors flex items-center gap-2 group text-left"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training */}
            <div>
              <h4 className="font-semibold mb-6">Training & Consulting</h4>
              <ul className="space-y-3">
                {training.map((course, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setIsContactModalOpen(true)}
                      className="text-sm text-muted-foreground hover:text-accent-primary transition-colors flex items-center gap-2 group text-left"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {course}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3 mb-6">
                {company.map((item, index) => {
                  const handleClick = () => {
                    if (item === "About Us") scrollToSection('about');
                    else if (item === "Case Studies") scrollToSection('case-studies');
                    else setIsContactModalOpen(true);
                  };

                  return (
                    <li key={index}>
                      <button
                        onClick={handleClick}
                        className="text-sm text-muted-foreground hover:text-accent-primary transition-colors flex items-center gap-2 group text-left"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => openExternalLink('https://www.linkedin.com/company/mattengineeringsolutions/posts/?feedView=all')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => openExternalLink('https://x.com/mattenggsoln')}
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => openExternalLink('https://www.youtube.com/channel/UC67EYmlVbMyypqMO4fckmIw')}
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Locations Section */}
        <div className="py-12">
          <h4 className="font-semibold mb-8 text-center flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-accent-primary" />
            Our Locations
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="text-center">
                <h5 className="font-medium mb-2">{location.city}</h5>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© {new Date().getFullYear()} Matt AI Solutions. All rights reserved.</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-accent-primary transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-accent-primary transition-colors"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-accent-primary transition-colors"
                >
                  Cookie Policy
                </button>
              </div>
            </div>

            {/* <div className="text-xs">
              Built with AI by Matt AI Solutions 🚀
            </div> */}
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        type="contact"
      />
    </footer>
  );
};

export default Footer;