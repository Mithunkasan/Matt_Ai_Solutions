import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email:", { name, email, subject });

    // Send email to info@mattengg.com
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Matt AI Solutions <noreply@resend.dev>",
      to: ["info@mattengg.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007acc; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007acc; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Matt AI Solutions contact form.</p>
            <p>Received at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (emailError) {
      console.error("Error sending notification email:", emailError);
      throw new Error(`Failed to send notification email: ${emailError.message}`);
    }

    console.log("Notification email sent successfully:", emailData);

    // Send confirmation email to the user
    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: "Matt AI Solutions <noreply@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Matt AI Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007acc; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            Thank You for Contacting Us!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to Matt AI Solutions. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007acc;">
            <h3 style="color: #007acc; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
          </div>
          
          <p>Our AI experts are reviewing your inquiry and will provide you with a detailed response soon.</p>
          
          <p>Best regards,<br>
          <strong>The Matt AI Solutions Team</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Matt AI Solutions</p>
            <p>3rd floor, Pillars Gate, Vadasery, Nagercoil</p>
            <p>Phone: +91 7339585868 | Email: info@mattengg.com</p>
          </div>
        </div>
      `,
    });

    if (confirmError) {
      console.error("Error sending confirmation email:", confirmError);
      throw new Error(`Failed to send confirmation email: ${confirmError.message}`);
    }

    console.log("Confirmation email sent successfully:", confirmData);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Emails sent successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);