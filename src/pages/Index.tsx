import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import CreativeSection from "@/components/CreativeSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import { Instagram, Linkedin, Github, Music2 } from "lucide-react";

const footerSocials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Music2, href: "#", label: "TikTok" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CreativeSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
          </div>
          <p className="text-muted-foreground text-xs font-mono">
            © {new Date().getFullYear()} Kurt Russell M. Acosta
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
