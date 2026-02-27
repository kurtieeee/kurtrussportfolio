import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { Mail, Github, Linkedin, Instagram, Music2 } from "lucide-react";

const ContactSection = () => (
  <Section id="contact">
    <SectionHeading title="Get In Touch" subtitle="Always open to interesting conversations and opportunities." />
    <div className="max-w-xl">
      <div className="flex flex-col gap-4">
        <a
          href="mailto:acostakurtruss@gmail.com"
          className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5 text-primary" />
          <span>acostakurtruss@gmail.com</span>
        </a>
        <a href="https://github.com/kurtieeee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <Github className="w-5 h-5 text-primary" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/kurt-russell-acosta-4b3a943a9/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5 text-primary" />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/kurtrussss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <Instagram className="w-5 h-5 text-primary" />
          <span>Instagram</span>
        </a>
        <a href="https://www.tiktok.com/@kurtrussss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
          <Music2 className="w-5 h-5 text-primary" />
          <span>TikTok</span>
        </a>
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <a
          href="mailto:acostakurtruss@gmail.com"
          className="inline-flex items-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity glow"
        >
          Say Hello →
        </a>
      </div>
    </div>
  </Section>
);

export default ContactSection;
