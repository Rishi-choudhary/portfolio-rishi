export default function Footer() {
  return (
    <footer className="w-full max-w-[680px] mx-auto px-6 mt-32 mb-16 section-reveal">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-zinc-100 dark:border-zinc-800 pt-12">
        <p className="font-body text-[1rem] tracking-tight">
          Be nice © ツ
        </p>
        <div className="flex flex-wrap items-center gap-6 font-body text-[1rem] tracking-tight">
          <a href="https://github.com/rishi-choudhary" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-1">GitHub</a>
          <a href="https://linkedin.com/in/rishichoudharii" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-1">LinkedIn</a>
          <a href="https://www.instagram.com/rishichoudharii/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4 decoration-1">Instagram</a>
          <a href="mailto:rishichoudhary582@gmail.com" className="hover:underline underline-offset-4 decoration-1">Email</a>
        </div>
      </div>
      <p className="mt-8 font-mono text-[0.8rem] text-muted tracking-tight">
        Updated March 2026
      </p>
    </footer>
  );
}
