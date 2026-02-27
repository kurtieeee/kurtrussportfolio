import { motion } from "framer-motion";
import Chip from "./Chip";
import heroPhoto from "../assets/hero-photo.png";
import acostaCV from "../assets/Acosta_CV.pdf";
import { Instagram, Linkedin, Github, Music2 } from "lucide-react";

const techStack = ["React", "Python", "Flask", "JavaScript", "Flutter"];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/kurtrussss", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kurt-russell-acosta-4b3a943a9/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/kurtieeee", label: "GitHub" },
  { icon: Music2, href: "https://www.tiktok.com/@kurtrussss", label: "TikTok" },
];

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center pt-16">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-4">Hi, I'm</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4">
            Kurt Russell
            <br />
            <span className="text-gradient">M. Acosta</span>
          </h1>
          <p className="text-secondary font-mono text-sm mb-4">
            Software Engineer
          </p>
          <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
            Aspiring software engineer with hands-on experience in front-end and back-end development, along with applied machine learning.
            Focused on delivering clean, efficient, and scalable digital solutions.
            Passionate about learning new technologies and continuously improving my skills.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity glow"
            >
              View Projects
            </a>
            <a
              href={acostaCV}
              download="Acosta_CV.pdf"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary/40 text-primary font-display font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Download CV ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-muted-foreground font-display font-semibold text-sm hover:text-primary hover:border-primary/40 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mb-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <Chip key={t} label={t} variant="muted" />
            ))}
          </div>
        </motion.div>

        {/* Right - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />
            <img
              alt="Kurt Russell M. Acosta"
              className="relative w-[28rem] md:w-[40rem] h-[36rem] md:h-[44rem] object-cover object-top rounded-none shadow-inner"
              src={heroPhoto}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
