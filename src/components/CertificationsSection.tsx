import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { BadgeCheck } from "lucide-react";

const certs = [
  {
    title: "JavaScript Essential 1",
    issuer: "CISCO Networking Academy",
    date: "May 2025",
  },
  {
    title: "International Conference on Artificial Intelligence 2026",
    issuer: "DLSU-D",
    date: "Feb 2026",
  },
];

const CertificationsSection = () => (
  <Section id="certifications">
    <SectionHeading title="Certifications" subtitle="Continuous learning and professional development." />
    <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
      {certs.map((c) => (
        <div
          key={c.title}
          className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
        >
          <BadgeCheck className="w-6 h-6 text-primary mt-0.5 shrink-0" />
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm">{c.title}</h3>
            <p className="text-muted-foreground text-xs mt-1">{c.issuer}</p>
            <p className="text-xs font-mono text-primary mt-1">{c.date}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default CertificationsSection;
