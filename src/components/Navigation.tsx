import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">RC</h1>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-foreground/70 hover:text-foreground transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('services')} className="text-foreground/70 hover:text-foreground transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-foreground/70 hover:text-foreground transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </button>
        </div>
        <Button 
          variant="outline" 
          className="rounded-full"
          onClick={() => scrollToSection('contact')}
        >
          Get in Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
