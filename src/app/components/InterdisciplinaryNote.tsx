import { motion } from "motion/react";
import { Lightbulb, Users, TrendingUp } from "lucide-react";

export function InterdisciplinaryNote() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-[var(--purple)]/5 via-transparent to-[var(--orange)]/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--purple)]/20 to-[var(--orange)]/20 blur-2xl opacity-50 rounded-3xl" />
          
          <div className="relative p-8 lg:p-12 bg-card/80 backdrop-blur-sm border border-border rounded-2xl">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="hidden sm:block w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--purple)] to-[var(--orange)] flex-shrink-0 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-display mb-3">Interdisciplinary Perspective</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Alongside my PhD, I completed the MBA program at <span className="text-foreground font-medium">Collège des Ingénieurs</span>, 
                  a selective interdisciplinary track that bridges scientific research with innovation strategy, leadership, and broader perspectives 
                  on scientific work and technology development.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--purple)]/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-[var(--purple)]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Innovation</div>
                      <div className="text-xs text-muted-foreground">Strategic thinking</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--orange)]/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-[var(--orange)]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Leadership</div>
                      <div className="text-xs text-muted-foreground">Team dynamics</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--blue)]/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-[var(--blue)]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Strategy</div>
                      <div className="text-xs text-muted-foreground">Broader perspectives</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
