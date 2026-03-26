import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ContactModal from "@/components/ContactModal";
import { generateCapabilityDeck } from "@/utils/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  Send,
  Clock,
  Award
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleScheduleConsultation = () => {
    setIsContactModalOpen(true);
  };

  const handleDownloadBrochure = () => {
    generateCapabilityDeck();
    toast({
      title: "Download Started",
      description: "Service brochure is being downloaded.",
    });
  };

  const locations = [
    {
      name: "Nagercoil (HQ)",
      address: "3rd floor, Pillars Gate, Vadasery",
      phone: "+91 7339585868",
      email: "info@mattai.com",
      badge: "Headquarters"
    },
    {
      name: "Thukalay",
      address: "Regional Support Hub",
      phone: "+91 7339585868",
      email: "support@mattai.com",
      badge: "Support Hub"
    },
    {
      name: "Aralvaimozhi",
      address: "AI Training Center",
      phone: "+91 7339585868", 
      email: "training@mattai.com",
      badge: "Training Center"
    },
    {
      name: "Kochi",
      address: "Enterprise Solutions Office",
      phone: "+91 7339585868",
      email: "enterprise@mattai.com",
      badge: "Enterprise Hub"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-tech-dark">
      {/* Background Elements */}
      <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-tech-primary/30 rounded-full blur-[120px] opacity-70 pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-tech-secondary/20 rounded-full blur-[150px] opacity-70 pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
            <MessageSquare className="w-5 h-5 text-tech-accent" />
            <span className="text-sm font-medium text-white">Contact Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">
            Let's Build Your AI Future Together
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="p-8 bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(19,73,138,0.2)]">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-white">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project or questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="tech" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information & Locations */}
          <div className="space-y-6">
            {/* Office Locations */}
            <div className="grid gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="p-6 bg-black/30 backdrop-blur-lg border border-white/10 hover:bg-white/5 hover:border-tech-primary/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{location.name}</h4>
                      <p className="text-white/70 text-sm">{location.address}</p>
                    </div>
                    <Badge className="bg-tech-accent/20 text-tech-accent border-tech-accent/30">
                      {location.badge}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-white/80">
                      <Phone className="w-4 h-4 text-tech-accent" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/80">
                      <Mail className="w-4 h-4 text-tech-accent" />
                      <span>{location.email}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="p-8 bg-gradient-to-br from-tech-primary/20 via-black/40 to-tech-secondary/20 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(177,32,36,0.15)] mt-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your AI Journey?</h3>
              <p className="text-white/80 mb-6">
                Whether you need custom AI solutions, technical infrastructure, or team training, 
                we're here to help you harness the power of artificial intelligence.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="tech" 
                  size="lg" 
                  className="w-full"
                  onClick={handleScheduleConsultation}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Free Consultation
                </Button>
                <Button 
                  variant="tech-outline" 
                  size="lg" 
                  className="w-full"
                  onClick={handleDownloadBrochure}
                >
                  <Award className="w-4 h-4 mr-2" />
                  Download Service Brochure
                </Button>
              </div>
              </div>
            </Card>

            {/* Response Time */}
            <div className="text-center">
              <p className="text-white/60 text-sm mb-4">
                We typically respond within 2-4 hours during business hours
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-4 h-4 text-tech-accent" />
                <span className="text-tech-accent font-medium text-sm">Mon - Fri: 9 AM - 6 PM IST</span>
              </div>
            </div>
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

export default Contact;