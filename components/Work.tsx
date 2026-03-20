import Image from 'next/image';

const projects = [
  {
    title: "RePairPods - Lovable to Shopify Conversion",
    link: "https://custom-store-22243.myshopify.com/",
    year: "2025",
    description: "Successfully converted a complete Lovable website into a fully functional Shopify theme for RePairPods, a leading electronics store in the Netherlands. Delivered pixel-perfect conversion with all features intact, including product configurator and seamless e-commerce functionality.",
    stack: "Shopify · Liquid · Theme Development · E-commerce",
    tagline: "Delivered in 14 hours — Pixel-perfect conversion",
    image: "/images/projects/repairpods.png",
    bgColor: "bg-zinc-100 dark:bg-zinc-800"
  },
  {
    title: "VibeQA",
    badge: "In Development",
    link: "https://github.com/rishi-choudhary",
    year: "2025",
    description: "Automated QA and testing platform for AI-generated web apps — four-stage pipeline: URL crawler → LLM test generator → Playwright executor → failure reporter.",
    stack: "Python · Playwright · LLM APIs · Next.js · Supabase",
    image: "/images/projects/vibeqa.jpg", 
    bgColor: "bg-zinc-100 dark:bg-zinc-800"
  },
  {
    title: "Smart Parking System",
    link: "https://github.com/Rishi-choudhary/Smart-Parking-System",
    year: "2024",
    description: "Real-time urban parking management platform — built and won 1st place at Smart India Hackathon against 100+ national teams in a 36-hour sprint.",
    stack: "HTML5 · CSS3 · JavaScript · Python",
    tagline: "Smart India Hackathon — 1st Place, Web Engineering",
    image: "/images/projects/smart-parking.png",
    bgColor: "bg-zinc-100 dark:bg-zinc-800"
  },
  {
    title: "Visda Organix — Shopify Store",
    link: "https://visdaorganix.com",
    year: "2024",
    description: "Full e-commerce storefront for an organic personal care brand — 6 custom Liquid section templates, schema-driven CMS controls, mobile-first build. Delivered solo in under 3 weeks.",
    stack: "Shopify Liquid · Theme 2.0 · CSS3 · JavaScript",
    image: "/images/projects/visda.png",
    bgColor: "bg-zinc-100 dark:bg-zinc-800"
  },
  {
    title: "Adversarial-AI",
    link: "http://adversarial-ai.onrender.com/",
    year: "2024",
    description: "An AI-powered legal debate platform with pixel-art interface, built for IEEE's 'Pixel Palettes' hackathon. Generates structured pro and con arguments using ML models and a legal knowledge base.",
    stack: "AI · Legal Tech · ML · Hackathon",
    image: "/images/projects/iira.png",
    bgColor: "bg-zinc-100 dark:bg-zinc-800"
  },
  {
    title: "StockMarket Simulator",
    link: "https://github.com/rishi-choudhary",
    year: "2024",
    description: "An interactive stock market simulation platform that allows users to practice trading strategies in a risk-free environment with real-time market data.",
    stack: "Python · Trading · Simulation · Finance",
    image: "/images/projects/stockmarket.png",
    bgColor: "bg-zinc-100 dark:bg-zinc-800"
  },
  {
    title: "SAKE Clothing — Interface Design",
    link: "https://www.figma.com/proto/HzhXJItPWNvEbqqa5zCyk7/SAKE?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=WipSwaQrRhe9jthn-1",
    year: "2023",
    description: "12-screen website prototype for a fashion label — complete design system including typography scale, colour tokens, and reusable component library.",
    stack: "Figma · Adobe XD",
    image: "/images/projects/sake.png",
    bgColor: "bg-zinc-100 dark:bg-zinc-800"
  }
];

export default function Work() {
  return (
    <section className="w-full max-w-[680px] mx-auto px-6 mt-24 md:mt-32 section-reveal">
      <h3 className="font-mono font-medium text-[0.7rem] uppercase tracking-[0.2em] text-muted mb-12">
        Select Work
      </h3>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className={`relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-6 transition-transform duration-500 ease-out hover:scale-[1.02] ${project.bgColor}`}>
              {project.image && !project.image.includes('.jpg') ? (
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity duration-700 opacity-90 group-hover:opacity-100"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-mono text-[0.6rem] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.image ? project.image.split('/').pop() : 'IMAGE'}
                </div>
              )}
            </div>
            
            <div className="flex items-baseline justify-between mb-3">
              <h4 className="font-body text-[1.15rem] tracking-tight font-medium">
                <a 
                  href={project.link} 
                  target={project.link === "#" ? "_self" : "_blank"} 
                  rel={project.link === "#" ? "" : "noopener noreferrer"}
                  className="hover:underline underline-offset-[6px] decoration-[0.5px] transition-all"
                >
                  {project.title} {project.link !== "#" && <span className="text-[0.8em] ml-0.5 opacity-50">↗</span>}
                </a>
                {project.badge && (
                  <span className="ml-3 font-mono text-[0.6rem] uppercase tracking-wider text-muted border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-[2px]">
                    {project.badge}
                  </span>
                )}
              </h4>
              <span className="font-mono text-[0.85rem] text-muted opacity-80">({project.year})</span>
            </div>
            
            <p className="font-body text-[1.05rem] leading-[1.65] text-muted mb-5 tracking-tight">
              {project.description}
            </p>
            
            <div className="flex flex-col gap-2.5">
              <p className="font-mono text-[0.7rem] text-muted uppercase tracking-wider flex items-center">
                <span className="mr-3 opacity-60 font-medium">Stack</span>
                <span className="opacity-90">{project.stack}</span>
              </p>
              {project.tagline && (
                <p className="font-body italic text-[0.9rem] text-muted opacity-70 tracking-tight">
                  {project.tagline}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
