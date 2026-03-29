import { motion } from "motion/react";
import { Shapes, GitBranch, Sparkles, Activity, Minimize2, LineChart } from "lucide-react";
import { GridPattern } from "./GridPattern";

export function ResearchFocus() {
  const focuses = [
    {
      icon: Shapes,
      title: "Geometry-Aware Generative Models",
      description: "Developing variational autoencoders whose latent spaces carry learned Riemannian geometry for improved representation and generation.",
      color: "orange"
    },
    {
      icon: GitBranch,
      title: "Latent Space Structure & Dynamics",
      description: "Studying how geometric and topological structure in latent representations enables better modeling of complex temporal evolution.",
      color: "blue"
    },
    {
      icon: Sparkles,
      title: "Probabilistic Representation Learning",
      description: "Exploring probabilistic frameworks that capture uncertainty, enable robust inference, and provide interpretable learned representations.",
      color: "purple"
    },
    {
      icon: Activity,
      title: "Longitudinal Biomedical Modeling",
      description: "Applying geometric and probabilistic methods to understand disease progression and temporal dynamics in health data.",
      color: "green"
    },
    {
      icon: Minimize2,
      title: "Low-Data Generation & Anisotropy",
      description: "Investigating anisotropic metric learning and geometric variants for generation in low-data regimes with diagnostic tools.",
      color: "yellow"
    },
    {
      icon: LineChart,
      title: "Scientific Visualization & Research Interfaces",
      description: "Creating visual explanations and interactive interfaces to communicate mathematical and algorithmic ideas elegantly.",
      color: "red"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <GridPattern />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display mb-4">Research Focus</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of mathematics, computation, and real-world applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focuses.map((focus, index) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-[var(--${focus.color})] opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl`} />
              
              <div className="relative h-full p-8 bg-card border border-border rounded-2xl hover:border-[var(--orange)]/50 transition-all">
                <div className={`w-14 h-14 bg-[var(--${focus.color})]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <focus.icon className={`w-7 h-7 text-[var(--${focus.color})]`} />
                </div>
                <h3 className="text-xl font-display mb-3">{focus.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{focus.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}