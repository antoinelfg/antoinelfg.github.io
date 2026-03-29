import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { GridPattern } from "./GridPattern";

export function Timeline() {
  const experiences = [
    {
      type: "education",
      icon: GraduationCap,
      title: "PhD in AI for Medicine",
      organization: "Inria HeKA – Université Paris Cité – Inserm",
      location: "Paris, France",
      period: "Apr 2025 - Sep 2028",
      description: "Researching geometry-aware variational autoencoders (Riemannian VAE), latent-space structure, and probabilistic learning for scientific and biomedical data. Supervised by Stéphanie Allassonnière.",
      color: "orange"
    },
    {
      type: "education",
      icon: Award,
      title: "MBA – Sciences & Management",
      organization: "Collège des Ingénieurs",
      location: "Paris, France",
      period: "2025 - 2028",
      description: "Interdisciplinary program bridging scientific research with innovation strategy and leadership perspectives.",
      color: "purple"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Engineering Degree",
      organization: "Mines Paris – PSL (École des Mines de Paris)",
      location: "Paris, France",
      period: "Sep 2021 - Sep 2025",
      description: "Specialized training in applied mathematics, data science, statistics, NLP, and medical imaging. Specialization in Health and AI.",
      color: "blue"
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Research Intern - Deep Learning",
      organization: "New York Genome Center – Weill Cornell Medicine",
      location: "New York, USA",
      period: "Sep 2023 - Mar 2024",
      description: "Research into somatic cells that can develop into cancer or lethal diseases. Supervised by Dan Landau and Andrew D'Avino.",
      color: "green"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Exchange Semester",
      organization: "Universidad de Buenos Aires - Facultad de Ingeniería",
      location: "Buenos Aires, Argentina",
      period: "Mar 2023 - Aug 2023",
      description: "Relevant courses: Image Analysis for the Biomedical Sector, Biological Systems, Operations Research.",
      color: "yellow"
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Research Intern - Bioinformatics",
      organization: "Institut Curie / CBIO – Mines Paris",
      location: "Paris, France",
      period: "Nov 2022 - Feb 2023",
      description: "Worked on computational methods for cancer research and biomedical data analysis.",
      color: "red"
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "Preparatory Classes (CPGE)",
      organization: "Lycée Pierre de Fermat",
      location: "Toulouse, France",
      period: "Sep 2019 - Jul 2021",
      description: "Two years of intensive theoretical scientific studies preparing for competitive entrance exams to French Grandes Écoles.",
      color: "blue"
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <GridPattern />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Academic and professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`hidden md:flex relative z-10 w-16 h-16 flex-shrink-0 rounded-xl bg-[var(--${exp.color})] items-center justify-center shadow-lg`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 group">
                    <div className="p-6 bg-card border border-border rounded-2xl hover:border-[var(--orange)]/50 transition-all hover:shadow-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-display mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="font-medium">{exp.organization}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <span className={`hidden sm:block px-3 py-1 rounded-full text-xs font-mono bg-[var(--${exp.color})]/10 text-[var(--${exp.color})] border border-[var(--${exp.color})]/20 whitespace-nowrap`}>
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <span className={`sm:hidden inline-block mt-3 px-3 py-1 rounded-full text-xs font-mono bg-[var(--${exp.color})]/10 text-[var(--${exp.color})] border border-[var(--${exp.color})]/20`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}