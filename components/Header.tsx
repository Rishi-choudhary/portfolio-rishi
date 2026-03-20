import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  return (
    <header className="w-full max-w-[680px] mx-auto px-6 pt-12 flex justify-between items-center">
      <Link href="#top" className="font-body text-[1.1rem] tracking-tight hover:opacity-70 transition-opacity">
        Rishi Choudhary
      </Link>
      <div className="flex items-center gap-6">
        <DarkModeToggle />
        <a 
          href="mailto:rishichoudhary582@gmail.com" 
          className="font-body text-[1rem] tracking-tight hover:underline underline-offset-4"
        >
          rishichoudhary582@gmail.com
        </a>
      </div>
    </header>
  );
}
