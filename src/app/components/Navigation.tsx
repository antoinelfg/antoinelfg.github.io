import { Link, useLocation } from "react-router";
import { Moon, Sun, Download, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import cvHtml from "/src/imports/Antoine_laforgue_(3)-1.html?raw";

interface NavigationProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export function Navigation({ theme, toggleTheme }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
  ];

  const handleDownloadCV = () => {
    const blob = new Blob([cvHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--orange)] to-[var(--purple)] rounded-lg" />
            <span className="font-display text-lg tracking-tight">Antoine Laforgue</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--orange)]"
                  />
                )}
              </Link>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </button>
            <a
              href="mailto:antoine.laforgue@inria.fr"
              className="flex items-center space-x-2 px-4 py-2 bg-[var(--orange)] text-white rounded-lg hover:bg-[var(--orange-dark)] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-[var(--orange)]/10 text-[var(--orange)]'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 px-3 py-2 text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
              <a
                href="mailto:antoine.laforgue@inria.fr"
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-[var(--orange)] text-white rounded-lg hover:bg-[var(--orange-dark)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}