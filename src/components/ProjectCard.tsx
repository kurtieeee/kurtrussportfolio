import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  feature?: string;
  github?: string;
  demo?: string;
  icon?: ReactNode;
}

const ProjectCard = ({ title, description, tech, feature, github, demo }: ProjectCardProps) => (
  <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:glow">
    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
    {feature && (
      <p className="text-xs text-secondary font-mono mb-4">⚡ {feature}</p>
    )}
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t) => (
        <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/15">
          {t}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-secondary transition-colors font-medium">
          View Project →
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          View Project →
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
