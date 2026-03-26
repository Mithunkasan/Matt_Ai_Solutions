import { jsPDF } from "jspdf";

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Account for sticky header
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export const openExternalLink = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const downloadFile = (filename: string, content: string, mimeType: string = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const generateCapabilityDeck = async () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // Fetch logo for the PDF
  let logoBase64 = null;
  try {
    const response = await fetch('/logo.png');
    const blob = await response.blob();
    const reader = new FileReader();
    logoBase64 = await new Promise<string>((resolve) => {
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.error("Failed to load logo for PDF", err);
  }

  // Draw wavy background shapes using large ellipses off-canvas

  // Top Darker Blue curve
  doc.setFillColor('#0b2e59');
  doc.ellipse(width - 20, -40, 170, 80, 'F');
  
  // Top Gold curve
  doc.setFillColor('#fbc531');
  doc.ellipse(width + 10, -30, 180, 75, 'F');
  
  // Top Primary Blue curve
  doc.setFillColor('#13498a');
  doc.ellipse(width + 20, -40, 180, 70, 'F');

  // Bottom massive swoops (lowered to prevent text overlap)
  // Bottom Gold layer
  doc.setFillColor('#fbc531');
  doc.ellipse(0, height + 40, 200, 140, 'F');
  doc.ellipse(width, height + 60, 220, 150, 'F');
  
  // Bottom Primary Blue layer
  doc.setFillColor('#13498a');
  doc.ellipse(width - 40, height + 50, 250, 160, 'F');
  doc.ellipse(-20, height + 60, 180, 140, 'F');

  // Emblem (Top Left)
  doc.setDrawColor('#13498a');
  doc.setFillColor(255, 255, 255);
  doc.setLineWidth(1.5);
  doc.circle(25, 45, 25, 'FD'); // Outer white fill with blue border
  
  doc.setDrawColor('#0b2e59');
  doc.setLineWidth(3);
  doc.circle(25, 45, 28, 'S'); // Outer thicker ring

  if (logoBase64) {
    // Render the logo directly in the center of the emblem
    doc.addImage(logoBase64, 'PNG', 10, 30, 30, 30);
  } else {
    // Fallback if logo fails
    doc.setFont("helvetica", "normal");
    doc.setTextColor('#7f8c8d');
    doc.setFontSize(10);
    doc.text("MATT AI", 15, 43);
    doc.setFont("helvetica", "bold");
    doc.setTextColor('#102e52');
    doc.setFontSize(11);
    doc.text("SOLUTIONS", 12, 50);
  }

  // Right Side text (Pushed to the right nicely)
  doc.setFont("helvetica", "normal");
  doc.setTextColor('#13498a');
  doc.setFontSize(14);
  doc.text("COMPANY", width - 15, 45, { align: 'right' });
  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.text("PROFILE", width - 15, 57, { align: 'right' });

  doc.setFont("helvetica", "normal");
  doc.setTextColor('#555555');
  doc.setFontSize(9);
  const profileBlurb = "Matt AI Solutions transforms businesses\nthrough practical AI implementation\nstarting from just $25.\nYour partner in growth.";
  doc.text(profileBlurb, width - 15, 65, { align: 'right' });

  // Middle Hero text
  doc.setFont("helvetica", "bold");
  doc.setTextColor('#13498a');
  doc.setFontSize(40);
  doc.text("TRANSFORM", 25, 115);
  doc.text("YOUR BUSINESS", 25, 133);
  doc.text("WITH AI", 25, 151);

  doc.setFontSize(12);
  doc.text("PRACTICAL AI IMPLEMENTATION", 27, 168);
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor('#555555');
  doc.setFontSize(10);
  doc.text("Deploy AI that moves metrics in weeks, not quarters.\nFrom pilot to production, we solve real business problems.", 27, 176);

  // Footer / Bottom text details (White)
  doc.setTextColor(255, 255, 255);

  const rx = width - 15;
  
  // Addresses & Contact
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("HEADQUARTERS", rx, height - 75, { align: 'right' });
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("3rd Floor, Pillars Gate", rx, height - 70, { align: 'right' });
  doc.text("Vadasery, Kanyakumari, TN", rx, height - 65, { align: 'right' });
  
  doc.setFont("helvetica", "bold");
  doc.text("CONTACT US", rx, height - 53, { align: 'right' });
  
  doc.setFont("helvetica", "normal");
  doc.text("info@mattai.com", rx, height - 48, { align: 'right' });
  doc.text("+91 7339585868", rx, height - 43, { align: 'right' });
  
  doc.setFont("helvetica", "bold");
  doc.text("WEBSITE", rx, height - 31, { align: 'right' });
  
  doc.setFont("helvetica", "normal");
  doc.text("www.mattai.com", rx, height - 26, { align: 'right' });

  // Left year and blurb
  doc.setFont("helvetica", "bold");
  doc.setFontSize(35);
  doc.text("2026", 25, height - 45);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const leftBlurb = "Comprehensive AI Services:\n• AI-Powered Solutions (Marketing, Support)\n• IT & Infrastructure Services\n• AI Training & Consulting\nFlexible Pricing: Starter Projects from $25.";
  doc.text(leftBlurb, 25, height - 32);

  doc.save("Matt_AI_Solutions_Capability_Deck.pdf");
};