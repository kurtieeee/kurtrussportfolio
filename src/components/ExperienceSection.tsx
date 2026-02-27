import Section from "./Section";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Director of Public Relations - Internal",
    org: "DLSUD Computer Science Program Council",
    period: "Nov 2025 – Present",
    description:
      "Leading internal communications and public relations efforts for the CS Program Council, ensuring effective outreach and engagement within the department.",
  },
  {
    role: "Member of Technical Committee",
    org: "DLSUD Computer Science Program Council",
    period: "Sept 2025 – Nov 2025",
    description:
      "Contributed to the planning and execution of technical events and initiatives for the CS program.",
  },
];

const ExperienceSection = () => (
  <Section id="experience">
    <SectionHeading
      title="Experience & Leadership"
      subtitle="Building impact through initiative and collaboration."
    />
    <div className="space-y-8 max-w-3xl">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-6 border-l-2 border-primary/30">
          <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
            <span className="text-sm font-mono text-primary">{exp.period}</span>
          </div>
          <p className="text-sm text-secondary mb-2">{exp.org}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default ExperienceSection;
