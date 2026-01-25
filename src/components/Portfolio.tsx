import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Clock } from "lucide-react";
import repairpodsImg from "@/assets/repairpods.png";
import smartParkingImg from "@/assets/smart-parking.png";
import visdaImg from "@/assets/visda.png";
import sakeImg from "@/assets/sake.png";
import stockMarketImg from "@/assets/stockmarket.png";
import iiraImg from "@/assets/iira.png";

const Portfolio = () => {
  const projects = [
    {
      title: "RePairPods - Lovable to Shopify Conversion",
      year: "2025",
      category: "Shopify Development",
      description: "Successfully converted a complete Lovable website into a fully functional Shopify theme for RePairPods, a leading electronics store in the Netherlands. Delivered pixel-perfect conversion with all features intact, including product configurator, AirPod finder tool, and seamless e-commerce functionality.",
      image: repairpodsImg,
      tags: ["Shopify", "Liquid", "Theme Development", "E-commerce"],
      featured: true,
      deliveryTime: "14 hours",
      links: [
        { label: "Original Lovable Site", url: "https://appel-air-onderdelen.lovable.app/en" },
        { label: "Shopify Store", url: "https://custom-store-22243.myshopify.com/" }
      ]
    },
    {
      title: "Smart Parking System",
      year: "2024",
      category: "Web Application",
      description: "SIH Winner Project - A web application improving urban parking management with a simple, intuitive UI. Built with Flask and modern web technologies.",
      image: smartParkingImg,
      tags: ["Flask", "Python", "UI/UX", "Winner Project"],
      github: "https://github.com/rishi-choudhary"
    },
    {
      title: "Visda Organix",
      year: "2024",
      category: "E-commerce",
      description: "Complete Shopify website built from scratch using Liquid, featuring organic skincare products. Fully mobile-optimized with custom theme development.",
      image: visdaImg,
      tags: ["Shopify", "Liquid", "E-commerce", "Mobile-First"],
      link: "http://visdaorganix.com"
    },
    {
      title: "SAKE Clothing Brand",
      year: "2023",
      category: "UI/UX Design",
      description: "Modern UI/UX website design made using Figma & Canva, matching fashion branding aesthetics with bold typography and clean layouts.",
      image: sakeImg,
      tags: ["Figma", "Canva", "Branding", "Fashion"],
      link: "https://www.figma.com/proto/HzhXJItPWNvEbqqa5zCyk7/SAKE?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=WipSwaQrRhe9jthn-1"
    },
    {
      title: "StockMarket Simulator",
      year: "2024",
      category: "Web Application",
      description: "An interactive stock market simulation platform that allows users to practice trading strategies in a risk-free environment with real-time market data.",
      image: stockMarketImg,
      tags: ["Python", "Trading", "Simulation", "Finance"],
      github: "https://github.com/rishi-choudhary"
    },
    {
      title: "Adversarial-AI",
      year: "2024",
      category: "AI Application",
      description: "🧑‍⚖️ An AI-powered legal debate platform with pixel-art interface, built for IEEE's 'Pixel Palettes' hackathon by Team 17. Generates structured pro and con arguments using classical ML models and legal knowledge base. Because every argument deserves its day in court.",
      image: iiraImg,
      tags: ["AI", "Legal Tech", "ML", "Hackathon"],
      link: "http://adversarial-ai.onrender.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <span className="section-label">Portfolio</span>
        <div className="grid md:grid-cols-2 gap-12 mt-8 mb-12">
          <div>
            <h2 className="text-5xl font-bold">
              Explore my portfolio of creative solutions
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-muted-foreground">
              Explore my portfolio full of creative solutions.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`overflow-hidden group cursor-pointer border-border/50 hover:shadow-2xl transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <div className={`overflow-hidden bg-secondary ${project.featured ? "aspect-[21/9]" : "aspect-video"}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className={`space-y-4 ${project.featured ? "p-8" : "p-6"}`}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    {project.deliveryTime && (
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-medium text-primary">Delivered in {project.deliveryTime}</span>
                      </div>
                    )}
                  </div>
                </div>
                <h3 className={`font-semibold ${project.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                  {project.title}
                </h3>
                <p className={`text-muted-foreground leading-relaxed ${project.featured ? "text-lg" : ""}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2 flex-wrap">
                  {project.links && project.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
