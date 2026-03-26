import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveDemos from "@/components/LiveDemos";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="demos">
        <LiveDemos />
      </div>
      <HowItWorks />
      <div id="services">
        <Services />
      </div>
      <div id="case-studies">
        <CaseStudies />
      </div>
      <Testimonials />
      <div id="about">
        <About />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
