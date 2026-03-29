import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GeometryBackground, AnisotropicBackground, MusicNotesBackground } from "./ProjectBackgrounds";

export function FeaturedWork() {
  const projects = [
    {
      title: "Geometry-Aware Generative Models for Longitudinal Data",
      description: "A research direction on variational autoencoders whose latent spaces carry learned geometry, with temporal evolution modeled along structured manifolds. The goal is to better represent complex longitudinal dynamics in scientific and biomedical data.",
      status: "Ongoing PhD research",
      statusColor: "orange",
      tags: ["Riemannian geometry", "VAE", "longitudinal modeling", "normalizing flows", "latent space", "probabilistic modeling"],
      backgroundType: "geometry" as const
    },
    {
      title: "Anisotropic Manifold for Low Data Generation",
      description: "A project exploring anisotropic latent geometry for generation in low-data regimes, with controlled geometric variants and diagnostic tools to better understand how learned metrics shape representation and synthesis.",
      status: "Ongoing project",
      statusColor: "blue",
      tags: ["anisotropy", "RHVAE", "metric learning", "low-data generation", "geometry diagnostics", "latent geometry"],
      backgroundType: "anisotropic" as const
    },
    {
      title: "Decision Interfaces for Sparse Generative Backbones",
      description: "A methods-oriented project on how decision layers and interfaces interact with sparse generative backbones. The emphasis is on separating representation quality from downstream decision mechanisms, and studying how interface design changes performance and interpretability.",
      status: "Paper in preparation",
      statusColor: "purple",
      tags: ["sparse generative models", "decision interfaces", "latent structure", "inference", "representation vs decision"],
      backgroundType: "music" as const
    }
  ];

  const renderBackground = (type: "geometry" | "anisotropic" | "music") => {
    switch (type) {
      case "geometry":
        return <GeometryBackground />;
      case "anisotropic":
        return <AnisotropicBackground />;
      case "music":
        return <MusicNotesBackground />;
    }
  };

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-display mb-4">Selected Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Current projects and research directions
            </p>
          </div>
          <a
            href="#/projects"
            className="hidden md:flex items-center space-x-2 text-[var(--orange)] hover:text-[var(--orange-dark)] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
            >
              <div className={`absolute -inset-1 bg-[var(--${project.statusColor})] opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl`} />
              
              <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-[var(--orange)]/50 transition-all">
                {/* Background */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
                    {renderBackground(project.backgroundType)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent opacity-60 z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono bg-[var(--${project.statusColor})]/90 text-white backdrop-blur-sm`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display mb-3 group-hover:text-[var(--orange)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-[var(--orange)] group-hover:text-[var(--orange-dark)] transition-colors">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden mt-8 text-center"
        >
          <a
            href="#/projects"
            className="inline-flex items-center space-x-2 text-[var(--orange)] hover:text-[var(--orange-dark)] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}