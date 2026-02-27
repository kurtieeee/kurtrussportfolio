interface ChipProps {
  label: string;
  variant?: "primary" | "secondary" | "muted";
}

const Chip = ({ label, variant = "primary" }: ChipProps) => {
  const variants = {
    primary: "bg-primary/15 text-primary border-primary/20",
    secondary: "bg-secondary/15 text-secondary border-secondary/20",
    muted: "bg-muted text-muted-foreground border-border",
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-mono rounded-md border ${variants[variant]}`}
    >
      {label}
    </span>
  );
};

export default Chip;
