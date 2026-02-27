import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award } from "lucide-react";

const AboutSection = () => (
  <Section id="about">
    <SectionHeading title="About Me" />
    <div className="max-w-3xl">
      <p className="text-foreground text-lg leading-relaxed mb-8">
          I specialize in front-end architecture, API integrations, and applied machine learning.
          I design and build scalable, production-ready systems that translate complex requirements into efficient, real-world solutions.
          My approach emphasizes clean architecture, performance optimization, maintainability, and long-term scalability.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
          <GraduationCap className="w-6 h-6 text-primary mt-0.5 shrink-0" />
          <div>
            <h3 className="font-display font-semibold text-foreground">
              BS Computer Science
            </h3>
            <p className="text-muted-foreground text-sm">
              De La Salle University – Dasmariñas (2023 – Present)
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="text-xs font-mono text-secondary">GPA: 3.50 / 4.00</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
          <Award className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
          <div>
            <h3 className="font-display font-semibold text-foreground">
              Dean's Lister
            </h3>
            <p className="text-muted-foreground text-sm">2023 – Present</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
          <GraduationCap className="w-6 h-6 text-primary mt-0.5 shrink-0" />
          <div>
            <h3 className="font-display font-semibold text-foreground">
              STEM Graduate
            </h3>
            <p className="text-muted-foreground text-sm">
              Rogationist College (2021 – 2023)
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;
