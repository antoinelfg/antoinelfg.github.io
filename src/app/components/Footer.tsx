import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/antoinelfg", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/antoine-laforgue/", label: "LinkedIn" },
    { icon: ExternalLink, href: "https://heka.gitlabpages.inria.fr/", label: "Lab Page" },
    { icon: Mail, href: "mailto:antoine.laforgue@inria.fr", label: "Email" },
  ];

  return (
    <footer className="relative py-16 px-6 lg:px-8 border-t border-border overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/5 via-transparent to-[var(--purple)]/5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--orange)] to-[var(--purple)] rounded-lg" />
              <span className="text-xl font-display">Antoine Laforgue</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              PhD student working on geometry-aware variational autoencoders and latent-space structure. Open to research conversations, collaborations, and thoughtful technical exchange.
            </p>
          </motion.div>

          {/* Right: Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start md:items-end"
          >
            <h3 className="text-lg font-display mb-4">Get in Touch</h3>
            <a
              href="mailto:antoine.laforgue@inria.fr"
              className="text-muted-foreground hover:text-[var(--orange)] transition-colors mb-6"
            >
              antoine.laforgue@inria.fr
            </a>
            
            <div className="flex gap-3">
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
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Antoine Laforgue. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="w-4 h-4 text-[var(--red)] fill-current" /> and geometry
          </p>
        </motion.div>
      </div>
    </footer>
  );
}