import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Phone, Mail, Building, Users } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "demo" | "consultation" | "contact" | "pricing";
}

const ContactModal = ({ isOpen, onClose, type }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    interest: "",
    message: ""
  });

  const modalConfig = {
    demo: {
      title: "Book a Demo",
      subtitle: "See AI solutions in action with your data",
      icon: Calendar,
      submitText: "Schedule Demo"
    },
    consultation: {
      title: "Schedule Consultation", 
      subtitle: "Get expert guidance for your AI strategy",
      icon: Phone,
      submitText: "Book Consultation"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your AI transformation",
      icon: Mail,
      submitText: "Send Message"
    },
    pricing: {
      title: "Get Custom Quote",
      subtitle: "Tailored pricing for your business needs", 
      icon: Building,
      submitText: "Request Quote"
    }
  };

  const config = modalConfig[type];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create detailed message for the email
      const detailedMessage = `
Request Type: ${config.title}

Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Company Size: ${formData.employees || 'Not specified'}
Primary Interest: ${formData.interest || 'Not specified'}

Message: ${formData.message || 'No additional message provided'}
      `.trim();

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: `${config.title} Request from ${formData.company}`,
          message: detailedMessage
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: `Your ${type} request has been submitted. We'll contact you within 24 hours.`,
      });

      onClose();
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        employees: "",
        interest: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <config.icon className="w-6 h-6 text-tech-primary" />
            {config.title}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">{config.subtitle}</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                placeholder="John Smith"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                required
                placeholder="Company Name"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91 9876543210"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="employees">Company Size</Label>
            <Select onValueChange={(value) => handleInputChange("employees", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-1000">201-1000 employees</SelectItem>
                <SelectItem value="1000+">1000+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="interest">Primary Interest</Label>
            <Select onValueChange={(value) => handleInputChange("interest", value)}>
              <SelectTrigger>
                <SelectValue placeholder="What interests you most?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="content">Content Automation</SelectItem>
                <SelectItem value="lead-scoring">Lead Scoring & Sales</SelectItem>
                <SelectItem value="customer-support">Customer Support AI</SelectItem>
                <SelectItem value="hr-automation">HR & Operations</SelectItem>
                <SelectItem value="finance-ocr">Finance & Invoice Processing</SelectItem>
                <SelectItem value="custom-ai">Custom AI Development</SelectItem>
                <SelectItem value="training">AI Training & Consulting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your specific needs or challenges..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              variant="tech"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                config.submitText
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>

        <div className="text-xs text-muted-foreground text-center">
          We respect your privacy and will never share your information.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;