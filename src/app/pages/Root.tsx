import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { LoadingScreen } from "../components/LoadingScreen";
import { ScrollToTop } from "../components/ScrollToTop";

export function Root() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
      <ScrollToTop />
    </div>
  );
}