import { motion } from "motion/react";
import { ArrowRight, Github, ExternalLink, Video } from "lucide-react";
import { useState } from "react";
import { GeometryBackground, AnisotropicBackground, MusicNotesBackground } from "./ProjectBackgrounds";

interface ProjectCardProps {
  title: string;
  summary: string;
  description: string;
  tags: string[];
  status: string;
  statusColor: string;
  image?: string;
  backgroundType?: "geometry" | "anisotropic" | "music";
  videoUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  methods?: string[];
}

export function ProjectCard({
  title,
  summary,
  description,
  tags,
  status,
  statusColor,
  image,
  backgroundType,
  videoUrl,
  githubUrl,
  externalUrl,
  methods
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderBackground = () => {
    switch (backgroundType) {
      case "geometry":
        return <GeometryBackground />;
      case "anisotropic":
        return <AnisotropicBackground />;
      case "music":
        return <MusicNotesBackground />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`absolute -inset-1 bg-[var(--${statusColor})] opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl`} />
      
      <motion.div
        layout
        className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-[var(--orange)]/50 transition-all"
      >
        {/* Header with image or custom background */}
        <div className="relative h-80 overflow-hidden cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
          
          {backgroundType ? (
            <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
              {renderBackground()}
            </div>
          ) : (
            videoUrl && isExpanded ? (
              <div className="absolute inset-0 z-20 p-4">
                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                  <p className="text-white text-sm">Video player placeholder: {videoUrl}</p>
                </div>
              </div>
            ) : image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : null
          )}
          
          {/* Status badge */}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono bg-[var(--${statusColor})]/90 text-white backdrop-blur-sm`}>
              {status}
            </span>
            {videoUrl && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/50 text-white backdrop-blur-sm flex items-center gap-1">
                <Video className="w-3 h-3" />
                Video
              </span>
            )}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-2xl font-display text-white drop-shadow-lg mb-2">{title}</h3>
            <p className="text-white/90 drop-shadow-lg text-sm">{summary}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {methods && methods.length > 0 && (
              <div className="mb-4 pt-4 border-t border-border">
                <h4 className="text-sm font-medium mb-2">Methods & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {methods.map((method) => (
                    <span
                      key={method}
                      className="px-2 py-1 text-xs rounded bg-[var(--orange)]/10 text-[var(--orange)] border border-[var(--orange)]/20"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-[var(--orange)] hover:text-[var(--orange-dark)] transition-colors group/btn"
            >
              <span className="text-sm">{isExpanded ? 'Show less' : 'Learn more'}</span>
              <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
            </button>

            <div className="flex gap-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {externalUrl && (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="External link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}