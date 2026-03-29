import { motion } from "motion/react";
import { Shapes, GitBranch, Sparkles } from "lucide-react";

export function Bio() {
  const highlights = [
    {
      icon: Shapes,
      title: "Mathematical Structure",
      gradient: "from-[var(--orange)] to-[var(--yellow)]"
    },
    {
      icon: GitBranch,
      title: "Interpretable Latent Spaces",
      gradient: "from-[var(--blue)] to-[var(--purple)]"
    },
    {
      icon: Sparkles,
      title: "Elegant Visual Communication",
      gradient: "from-[var(--green)] to-[var(--blue)]"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display mb-8">About</h2>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a <span className="text-foreground font-semibold text-[var(--orange)]">PhD student</span> in AI for Medicine at{" "}
              <span className="text-foreground font-semibold text-[var(--blue)]">Inria</span> HeKA – Université Paris Cité – Inserm, 
              supervised by{" "}
              <a 
                href="https://sites.google.com/site/stephanieallassonniere/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground font-semibold text-[var(--purple)] hover:text-[var(--purple)]/80 underline decoration-[var(--purple)]/30 hover:decoration-[var(--purple)] transition-colors"
              >
                Stéphanie Allassonnière
              </a>.
              {" "}I graduated from <span className="text-foreground font-semibold text-[var(--purple)]">Mines Paris – PSL</span> and work on 
              geometry-aware variational autoencoders, latent representations, and probabilistic generative modeling. My interests span both 
              methodological questions and scientific applications, especially in biomedical settings.
            </p>
            <p>
              My work focuses on how geometric structure in latent spaces can improve generative modeling, representation learning, and the 
              study of complex data. I'm particularly interested in Riemannian approaches, probabilistic modeling, and visually meaningful 
              ways of communicating technical ideas. Alongside my PhD, I'm also pursuing an{" "}
              <span className="text-foreground font-semibold text-[var(--green)]">MBA at the Collège des Ingénieurs</span>, 
              which provides interdisciplinary training and broader perspectives on innovation and scientific work.
            </p>
          </div>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl"
                   style={{ backgroundImage: `linear-gradient(to bottom right, ${item.gradient})` }} />
              <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-[var(--orange)]/50 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}