import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Music, Camera, Piano } from "lucide-react";
import { motion } from "framer-motion";

const creativeItems = [
  {
    title: "Singing & Vocal Covers",
    description:
      "I share vocal covers and creative performances showcasing musical expression and stage presence.",
    icon: Music,
    button: "Watch on TikTok",
    href: "https://www.tiktok.com/@kurtrussss", // Replace with your TikTok link
  },
  {
    title: "Photography",
    description:
      "A curated collection of portraits, lifestyle, and creative photography projects.",
    icon: Camera,
    button: "View on Instagram",
    href: "https://www.instagram.com/kurt.pitiks", // Replace with your Instagram link
  },
  {
    title: "Piano & Instrumentals",
    description:
      "Instrumental performances and creative musical interpretations on piano.",
    icon: Piano,
    button: "Listen / Watch",
    href: "https://www.tiktok.com/@kurtrussss", // Replace with TikTok, Instagram, or YouTube link
  },
];

const floatingNotes = ["♪", "♫", "📷", "🎵"];

const CreativeSection = () => (
  <Section id="creative">
    <div className="relative">
      {/* Floating decorative elements */}
      {floatingNotes.map((note, i) => (
        <motion.span
          key={i}
          className="absolute text-primary/10 text-2xl pointer-events-none select-none"
          style={{
            top: `${15 + i * 22}%`,
            right: `${5 + i * 8}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {note}
        </motion.span>
      ))}

      <SectionHeading
        title="Creative Side"
        subtitle="Beyond code and algorithms, I express creativity through music and visual storytelling."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {creativeItems.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="group relative rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.25)] cursor-pointer block no-underline"
          >
            {/* Warm gradient overlay on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              <span className="inline-flex items-center gap-1.5 text-sm font-display font-semibold text-primary group-hover:gap-2.5 transition-all">
                {item.button}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </Section>
);

export default CreativeSection;
