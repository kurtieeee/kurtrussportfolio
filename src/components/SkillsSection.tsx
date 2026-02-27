import Section from "./Section";
import SectionHeading from "./SectionHeading";
import Chip from "./Chip";
import { Code2, Layers, Wrench, Palette } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Python", "JavaScript", "Dart", "SQL", "HTML", "CSS"],
    variant: "primary" as const,
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: ["React", "Flask", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Flutter"],
    variant: "primary" as const,
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Google Colab", "VS Code", "Supabase"],
    variant: "secondary" as const,
  },
  {
    title: "Multimedia Tools",
    icon: Palette,
    items: ["Figma", "Canva", "Capcut", "Adobe Photoshop", "Filmora"],
    variant: "secondary" as const,
  },
];

const SkillsSection = () => (
  <Section id="skills">
    <SectionHeading title="Skills" subtitle="Technical depth meets creative versatility." />
    <div className="grid md:grid-cols-2 gap-10">
      {categories.map((cat) => (
        <div key={cat.title}>
          <div className="flex items-center gap-2 mb-4">
            <cat.icon className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.items.map((s) => (
              <Chip key={s} label={s} variant={cat.variant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default SkillsSection;
