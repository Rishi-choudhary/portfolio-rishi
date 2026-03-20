import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full max-w-[680px] mx-auto px-6 mt-24 md:mt-32 section-reveal">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        <div className="md:w-[65%] space-y-6 font-body text-[1.1rem] leading-[1.7] tracking-tight">
          <p>
            I&apos;m a Computer Science (Data Science) student at Manipal University, Jaipur (2024–2028) — building at the intersection of Shopify development, AI integrations, and SaaS products. Within my first year of college, I shipped production e-commerce platforms for real clients, trained under senior engineers at Craxinno Technologies, and won Smart India Hackathon.
          </p>
          <p>
            I am passionate about intelligent automation, modern UI, and human-centered design. Currently building <a href="https://github.com/rishi-choudhary" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">VibeQA</a> — an automated QA and testing platform for AI-generated web apps.
          </p>
          <p>
            Find me on <a href="https://github.com/rishi-choudhary" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">GitHub</a>, <a href="https://linkedin.com/in/rishichoudharii" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">LinkedIn</a>, or email me at <a href="mailto:rishichoudhary582@gmail.com" className="underline underline-offset-4 decoration-1 hover:decoration-2 transition-all">rishichoudhary582@gmail.com</a>.
          </p>
        </div>
        <div className="md:w-[30%]">
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-400 ease-in-out bg-zinc-100 dark:bg-zinc-800">
            <Image 
              src="/images/rishi.jpeg" 
              alt="That's me!" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
