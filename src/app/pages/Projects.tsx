import { motion } from "motion/react";
import { ProjectCard } from "../components/ProjectCard";
import { Footer } from "../components/Footer";
import { Layers } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Geometry-Aware Generative Models for Longitudinal Data",
      summary: "Latent spaces with learned Riemannian geometry",
      description: "A research direction on variational autoencoders whose latent spaces carry learned geometry, with temporal evolution modeled along structured manifolds. Investigating metric learning, normalizing flows on learned manifolds, and RHMC-based geometric posterior sampling. The goal is to better represent complex longitudinal dynamics in scientific and biomedical data.",
      tags: ["Riemannian geometry", "VAE", "longitudinal modeling", "normalizing flows", "latent space", "probabilistic modeling"],
      status: "Ongoing PhD research",
      statusColor: "orange",
      backgroundType: "geometry" as const,
      videoUrl: "latent_trajectory_animation.mp4",
      methods: ["PyTorch", "Riemannian VAE", "Normalizing Flows", "RHMC", "Metric Learning"],
      githubUrl: "#"
    },
    {
      title: "Anisotropic Manifold for Low Data Generation",
      summary: "Exploring anisotropic latent geometry",
      description: "A project exploring anisotropic latent geometry for generation in low-data regimes. Investigating Riemannian VAE geometry variants, anisotropic/inverse-metric formulations, attractor/void mechanisms, and metric landscape analysis. Includes log-determinant and geometric diagnostics to better understand how learned metrics shape representation and synthesis.",
      tags: ["anisotropy", "RHVAE", "metric learning", "low-data generation", "geometry diagnostics", "latent geometry"],
      status: "Ongoing project",
      statusColor: "blue",
      backgroundType: "anisotropic" as const,
      videoUrl: "anisotropic_metric_landscape.mp4",
      methods: ["RHVAE", "Anisotropic Geometry", "Metric Diagnostics", "Low-Data Learning"],
      githubUrl: "#"
    },
    {
      title: "Decision Interfaces for Sparse Generative Backbones",
      summary: "Separating representation from decision",
      description: "A methods-oriented project on how decision layers and interfaces interact with sparse generative backbones. The emphasis is on separating representation quality from downstream decision mechanisms, and studying how interface design changes performance and interpretability. Investigating signal decomposition, structured sparse supports, and clean decision pipelines.",
      tags: ["sparse generative models", "decision interfaces", "latent structure", "inference", "representation vs decision"],
      status: "Paper in preparation",
      statusColor: "purple",
      backgroundType: "music" as const,
      videoUrl: "sparse_decision_interface_visualizer.mp4",
      methods: ["Sparse Models", "Decision Theory", "Interface Design", "Interpretability"]
    }
  ];

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/5 via-transparent to-[var(--purple)]/5" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--orange)]/10 border border-[var(--orange)]/20 mb-6">
              <Layers className="w-4 h-4 text-[var(--orange)]" />
              <span className="text-[var(--orange)] text-sm font-mono">Research Portfolio</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display mb-6">Projects & Work in Progress</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              This page gathers ongoing research directions, technical explorations, and visual experiments around geometry-aware generative modeling, latent spaces, and scientific machine learning.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: "Active Projects", value: "3" },
              { label: "Research Themes", value: "3" },
              { label: "Collaborations", value: "Soon" },
              { label: "Visual Demos", value: "Soon" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-card border border-border rounded-xl">
                <div className="text-3xl font-display text-[var(--orange)] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 bg-gradient-to-br from-[var(--orange)]/10 via-[var(--purple)]/5 to-[var(--blue)]/10 rounded-3xl border border-border">
            <h2 className="text-3xl font-display mb-4">Interested in Collaboration?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm open to research conversations, collaborations, and thoughtful technical exchange around these topics.
            </p>
            <a
              href="mailto:antoine.laforgue@inria.fr"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[var(--orange)] text-white rounded-xl hover:bg-[var(--orange-dark)] transition-all transform hover:scale-105"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}