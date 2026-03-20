const experiences = [
  {
    title: "Frontend Engineering Trainee",
    company: "Craxinno Technologies",
    link: "#",
    year: "Dec 2025 – Jan 2026",
    description: "Completed an intensive 2-month programme in Next.js and Shopify theme engineering, contributing to 2 live client-facing projects. Recognised by leadership for outstanding initiative — one of very few trainees to receive a formal commendation."
  },
  {
    title: "Shopify Theme Developer",
    company: "Visda Organix (Freelance)",
    link: "#",
    year: "2024",
    description: "Sole developer for a full organic e-commerce storefront. Authored all custom Liquid section templates with schema-driven controls so the client could manage content post-launch without developer assistance."
  },
  {
    title: "Interface Designer",
    company: "SAKE Clothing (Freelance)",
    link: "#",
    year: "2023",
    description: "Designed a 12-screen Figma prototype covering all primary user journeys, plus a full design system — cutting estimated future design iteration time by over 40%."
  }
];

export default function Experience() {
  return (
    <section className="w-full max-w-[680px] mx-auto px-6 mt-24 md:mt-32 section-reveal">
      <h3 className="font-body font-medium text-[0.9rem] uppercase tracking-widest text-muted mb-12">
        Experience
      </h3>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex items-baseline justify-between mb-2">
              <h4 className="font-body text-[1.1rem] tracking-tight font-normal">
                <a 
                  href={exp.link} 
                  className="hover:underline underline-offset-4 decoration-1 transition-all"
                >
                  {exp.title} — {exp.company} {exp.link !== "#" && "↗"}
                </a>
              </h4>
              <span className="font-mono text-[0.9rem] text-muted">({exp.year})</span>
            </div>
            <p className="font-body text-[1rem] leading-[1.6] text-muted tracking-tight">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
