import headshotImg from "@/assets/rishi.jpeg";

const Hero = () => {

  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 items-center md:grid-cols-2">
          <div className="space-y-6 animate-fade-in text-center md:text-left max-w-2xl md:max-w-none">
            <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground">
              Designer • Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              Web Developer &
              <span className="text-foreground/60 block sm:inline">
                {" "}
                UI/UX Designer
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
              Hi, I'm Rishi Choudhary, a passionate designer and developer creating intuitive digital experiences using design + technology.
            </p>
            <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Web Design</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Shopify Development</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">UI/UX Design</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-[26rem] lg:w-[26rem] lg:h-[30rem] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/60 transition-all duration-300">
                <img
                  src={headshotImg}
                  alt="Rishi Choudhary"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
