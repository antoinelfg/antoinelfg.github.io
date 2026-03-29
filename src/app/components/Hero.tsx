import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowRight } from "lucide-react";
import { GeometricBackground } from "./GeometricBackground";
const profilePhoto = "/profile.png";
import cvHtml from "/src/imports/Antoine_laforgue_(3)-1.html?raw";

export function Hero() {
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

  const socialLinks = [
    { icon: Github, href: "https://github.com/antoinelfg", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/antoine-laforgue/", label: "LinkedIn" },
    { icon: ExternalLink, href: "https://heka.gitlabpages.inria.fr/", label: "Lab Page" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Geometric Background */}
      <GeometricBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 rounded-full bg-[var(--orange)]/10 border border-[var(--orange)]/20 mb-6"
            >
              <span className="text-[var(--orange)] text-sm font-mono">PhD Student in AI for Medicine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl lg:text-6xl font-display mb-6 leading-tight whitespace-nowrap"
            >
              <span className="text-[var(--orange)]">Antoine</span> Laforgue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-muted-foreground mb-4 leading-relaxed"
            >
              Geometry-aware generative modeling for structured and scientific data
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              PhD student at Inria HeKA working on geometry-aware variational autoencoders, latent-space structure, and probabilistic learning for scientific and biomedical data.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--orange)] text-white rounded-lg hover:bg-[var(--orange-dark)] transition-all transform hover:scale-105"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleDownloadCV(); }}
                className="inline-flex items-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
              <a
                href="mailto:antoine.laforgue@inria.fr"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card border border-border hover:border-[var(--orange)] hover:bg-[var(--orange)]/5 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo with Geometric Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-xs mx-auto">
              {/* Geometric frame matching background style */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-[var(--orange)]/30" />
              <div className="absolute -inset-6 rounded-2xl border border-[var(--orange)]/15" />
              <div className="absolute -inset-9 rounded-2xl border border-[var(--orange)]/8" />

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--orange)]/60 rounded-tl-lg" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[var(--blue)]/60 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[var(--purple)]/60 rounded-bl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--orange)]/60 rounded-br-lg" />
              
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/5 via-transparent to-[var(--purple)]/5 z-10 pointer-events-none" />
                <img
                  src={profilePhoto}
                  alt="Antoine Laforgue"
                  className="w-full h-full object-cover grayscale-[20%] contrast-[1.05]"
                />
              </div>

              {/* Accent shapes */}
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-gradient-to-br from-[var(--yellow)] to-[var(--orange)] rounded-lg opacity-40 blur-xl" />
              <div className="absolute bottom-1/4 -left-6 w-16 h-16 bg-gradient-to-br from-[var(--blue)] to-[var(--purple)] rounded-full opacity-40 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-[var(--orange)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
