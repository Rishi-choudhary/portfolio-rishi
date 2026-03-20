const recognitions = [
  {
    title: "Smart India Hackathon — 1st Place",
    type: "Award",
    year: "2024",
    link: "https://github.com/rishi-choudhary",
    description: "Web Engineering category, national level, 100+ competing teams"
  },
  {
    title: "Sub-Junior AIFF Football — National Representative",
    type: "Achievement",
    year: "2023",
    link: "#",
    description: "Selected to represent Dadra and Nagar Haveli at the national level"
  },
  {
    title: "Frontend Engineering Certification — Craxinno",
    type: "Certification",
    year: "2026",
    link: "#",
    description: "Certified by a Senior Software Developer post 2-month programme"
  },
  {
    title: "AI & Machine Learning — Active Course",
    type: "Certification",
    year: "2025–26",
    link: "#",
    description: "Ongoing certification programme alongside college curriculum"
  }
];

export default function Recognition() {
  return (
    <section className="w-full max-w-[680px] mx-auto px-6 mt-24 md:mt-32 section-reveal">
      <h3 className="font-body font-medium text-[0.9rem] uppercase tracking-widest text-muted mb-12">
        Recognition
      </h3>
      <div className="space-y-12">
        {recognitions.map((rec, index) => (
          <div key={index} className="group">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
              <h4 className="font-body text-[1.1rem] tracking-tight font-normal">
                <a 
                  href={rec.link} 
                  target={rec.link === "#" ? "_self" : "_blank"}
                  rel={rec.link === "#" ? "" : "noopener noreferrer"}
                  className="hover:underline underline-offset-4 decoration-1 transition-all"
                >
                  {rec.title} {rec.link !== "#" && "↗"}
                </a>
              </h4>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <span className="font-mono text-[0.8rem] text-muted uppercase tracking-wider">{rec.type}</span>
                <span className="font-mono text-[0.9rem] text-muted">({rec.year})</span>
              </div>
            </div>
            <p className="font-body text-[1rem] leading-[1.6] text-muted tracking-tight">
              {rec.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
