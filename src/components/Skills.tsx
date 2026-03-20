const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["HTML", "CSS", "JavaScript", "Python", "C (Basics)"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Flask", "Figma", "Canva", "Adobe XD", "Framer"]
    },
    {
      title: "Platforms",
      skills: ["Shopify (Liquid)", "WordPress (Basics)"]
    },
    {
      title: "Specializations",
      skills: ["Web Development", "Shopify Theme Customization", "UI/UX Design", "Responsive Web Design", "Prototyping", "Branding"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <span className="section-label">Skills & Expertise</span>
        <h2 className="text-5xl font-bold mt-8 mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary text-sm rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
