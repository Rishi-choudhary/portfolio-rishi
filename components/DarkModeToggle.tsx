'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-5 h-5" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-1 focus:outline-none transition-opacity hover:opacity-70"
      aria-label="Toggle dark mode"
    >
      {theme === 'light' ? (
        <span className="text-xl">☾</span>
      ) : (
        <span className="text-xl">☼</span>
      )}
    </button>
  );
}
