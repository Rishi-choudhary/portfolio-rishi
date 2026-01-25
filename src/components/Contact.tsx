import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Instagram, Linkedin, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    // Replace these with your EmailJS credentials
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          sender_email: formData.email, // Explicitly include sender email for contacts
          message: formData.message,
          to_email: "rishichoudhary582@gmail.com", // Your email address
          reply_to: formData.email, // Enable direct reply to sender
        },
        PUBLIC_KEY
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India"
    },
    {
      icon: Mail,
      label: "Email",
      value: "rishichoudhary582@gmail.com",
      href: "mailto:rishichoudhary582@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7984769981",
      href: "tel:+917984769981"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rishi-choudhary",
      href: "https://github.com/rishi-choudhary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@rishichoudharii",
      href: "https://www.instagram.com/rishichoudharii/"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rishichoudharii",
      href: "https://www.linkedin.com/in/rishichoudharii/"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <span className="section-label">Contact</span>
        <h2 className="text-5xl font-bold mt-8 mb-12">Let's work together</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          <Card className="p-8 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border/50"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="border-border/50"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
