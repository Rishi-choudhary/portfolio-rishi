import { Code, Palette, ShoppingBag, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design",
      description: "Creating beautiful, responsive websites with modern design principles and clean code that works seamlessly across all devices."
    },
    {
      icon: ShoppingBag,
      title: "Shopify Development",
      description: "Custom Shopify stores built from scratch using Liquid, fully optimized for mobile and designed to convert visitors into customers."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive user experiences and stunning interfaces in Figma that solve real problems and delight users."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <span className="section-label">Services</span>
        <div className="grid md:grid-cols-2 gap-12 mt-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold">
              A Comprehensive look at what I offer
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground">
              A comprehensive look at my services and how I deliver them
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
