import { Award, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <span className="section-label">About Me</span>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Design has always been more than just a job – it's my passion.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated and creative Web Developer & UI/UX Designer with expertise in Shopify, Flask, Figma, and responsive design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing Bachelor's in Computer Science (Data Science) at Manipal University Jaipur, graduating in 2028. I'm passionate about intelligent automation, modern UI, responsive interfaces, and human-centered design.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">SIH Winner</h3>
                <p className="text-sm text-muted-foreground">Smart India Hackathon Winner for Smart Parking System</p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">AIFF Football</h3>
                <p className="text-sm text-muted-foreground">Represented Dadra & Nagar Haveli in Sub-Junior Nationals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
