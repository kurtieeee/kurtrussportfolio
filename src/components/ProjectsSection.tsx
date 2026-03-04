import Section from "./Section";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "WHSPR – Transcription & Translation Tool",
    description:
      "Built responsive interfaces using HTML, CSS, and JavaScript. Migrated the project to React with reusable components, improving performance and maintainability.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    feature: "Frontend Developer",
    demo: "https://appdev-whspr.netlify.app/login",
  },
  {
    title: "BadyetHero – Gamified Budget Tracker (Prototype)",
    description:
      "Built backend logic using Flutter. Developed a Layered LSTM model in Google Colab and deployed it using Flask for real-time inference.",
    tech: ["Flutter", "Python", "Flask", "TensorFlow", "Google Colab"],
    feature: "Backend Developer / ML Engineer",
    demo: "https://github.com/ielliee/badyethero",
  },
    {
    title: "Noteweave – Audio to Sheet-Music Tool (Frontend Prototype)",
    description:
      "Developed a responsive and interactive frontend interface for recording or uploading piano performances and generating readable sheet music. Built with React and TypeScript using reusable components, ensuring clean state management, type safety, and a scalable UI architecture.",
    tech: ["React", "HTML", "CSS", "JavaScript", "TypeScript"],
    feature: "Full-Stack Developer",
    demo: "https://github.com/kurtieeee/noteweave",
  },
];

const ProjectsSection = () => (
  <Section id="projects">
    <SectionHeading
      title="Projects"
      subtitle="Hands-on work across front-end development, back-end development, and applied ML."
    />
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  </Section>
);

export default ProjectsSection;
