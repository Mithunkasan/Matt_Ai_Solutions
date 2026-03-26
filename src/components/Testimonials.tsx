import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CFO",
      company: "TechCorp Industries",
      content: "Matt AI Solutions reduced our invoice processing time from 3 days to 30 minutes. The ROI was immediate and the team's expertise in AI implementation is unmatched.",
      rating: 5,
      metric: "94% faster processing"
    },
    {
      name: "Priya Sharma", 
      role: "Head of Marketing",
      company: "Fashion Forward Ltd",
      content: "The personalization engine they built increased our conversion rates by 124%. Their approach is practical, measurable, and they deliver on their promises.",
      rating: 5,
      metric: "124% conversion uplift"
    },
    {
      name: "David Chen",
      role: "CTO", 
      company: "FinServe Solutions",
      content: "From pilot to production in just 6 weeks. Their technical expertise and business understanding made the AI integration seamless. Highly recommended.",
      rating: 5,
      metric: "6-week deployment"
    },
    {
      name: "Anita Reddy",
      role: "HR Director",
      company: "Consulting Group",
      content: "The AI screening system transformed our hiring process. We now identify quality candidates 90% faster while improving hire quality by 31%.",
      rating: 5,
      metric: "90% faster screening"
    },
    {
      name: "Michael Thompson",
      role: "Operations Manager",
      company: "Manufacturing Inc",
      content: "Their RPA solutions automated 80% of our manual processes. The team provided excellent training and ongoing support. Exceptional value.",
      rating: 5,
      metric: "80% automation achieved"
    },
    {
      name: "Sarah Williams",
      role: "Customer Success Lead",
      company: "SaaS Startup",
      content: "The AI chatbot handles 75% of our support tickets automatically while maintaining high customer satisfaction. Game-changing technology.",
      rating: 5,
      metric: "75% ticket automation"
    }
  ];

  return (
    <section className="py-12 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-tech-secondary/10 text-tech-secondary border-tech-secondary/20">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Trusted by Forward-Thinking Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what business leaders say about partnering with Matt AI Solutions 
            for their AI transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-accent-primary/20 hover:border-accent-primary/40 transition-all duration-300 h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 bg-gradient-primary">
                      <AvatarFallback className="text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-accent-primary">{testimonial.company}</p>
                    </div>
                  </div>
                  <Badge className="bg-tech-secondary/10 text-tech-secondary border-tech-secondary/20 text-xs">
                    {testimonial.metric}
                  </Badge>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-tech-secondary text-tech-secondary" />
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="relative">
                  <Quote className="w-6 h-6 text-accent-primary/30 mb-3" />
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-tech-secondary text-tech-secondary" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5 Average Rating</span>
            </div>
            <Badge className="bg-tech-primary/10 text-tech-primary border-tech-primary/20">
              98% Client Retention Rate
            </Badge>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50+ companies that have transformed their operations with Matt AI Solutions. 
            Your success story could be next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;