import { motion } from "motion/react";
import { MapPin, Building2, FlaskConical, Code2, Download } from "lucide-react";
import cvHtml from "/src/imports/Antoine_laforgue_(3)-1.html?raw";

export function QuickFacts() {
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

  const facts = [
    { icon: Building2, label: "Affiliation", value: "Inria HeKA – Université Paris Cité" },
    { icon: FlaskConical, label: "Research Area", value: "Geometry-Aware Generative Modeling" },
    { icon: MapPin, label: "Location", value: "Paris, France" },
    { icon: Code2, label: "Role", value: "PhD Student in AI for Medicine" },
  ];

  const skills = [
    "Python",
    "PyTorch",
    "Riemannian VAEs",
    "Latent Space Methods",
    "Normalizing Flows",
    "Probabilistic Modeling",
    "Biomedical ML",
    "Scientific ML",
    "Metric Learning",
    "Manim"
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display mb-8">Quick Facts</h2>
            <div className="space-y-4">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-[var(--orange)]/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-5 h-5 text-[var(--orange)]" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                    <div className="font-medium">{fact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-[var(--orange)] text-white rounded-xl hover:bg-[var(--orange-dark)] transition-all transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Full CV</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Research Interests & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display mb-8">Research Interests & Tools</h2>
            <div className="p-6 bg-card border border-border rounded-2xl">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I work at the intersection of geometry, probability, and machine learning, with applications to scientific and biomedical data. My research combines methodological questions about latent-space structure with practical applications.
              </p>
              
              <div className="mb-6">
                <h3 className="text-sm text-muted-foreground mb-3">Tools & Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted hover:bg-[var(--orange)]/10 hover:text-[var(--orange)] hover:border-[var(--orange)]/20 border border-transparent transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm text-muted-foreground mb-3">Current Focus</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--orange)] mt-2 flex-shrink-0" />
                    <span>Geometric structure in latent representations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] mt-2 flex-shrink-0" />
                    <span>Temporal dynamics on learned manifolds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--purple)] mt-2 flex-shrink-0" />
                    <span>Anisotropic metrics for low-data generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)] mt-2 flex-shrink-0" />
                    <span>Interpretable probabilistic frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}