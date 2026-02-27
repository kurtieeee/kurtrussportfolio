interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-12">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
      {title}
      <span className="text-primary">.</span>
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>
    )}
    <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
  </div>
);

export default SectionHeading;
