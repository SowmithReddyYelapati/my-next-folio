import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "📰 NewsHub – News Aggregation Platform",
      category: "fullstack",
      description: "A dynamic news aggregator that fetches trending headlines from multiple reliable sources using cron jobs. The platform supports smooth navigation, responsive UI, and backend scalability to deliver a consistent news experience.",
      technologies: ["React", "Spring Boot", "JavaScript", "HTML/CSS", "Cron Jobs"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "🧾 Smart Billing System with GUI and Real-Time Invoice Generation",
      category: "desktop",
      description: "The Billing System is a desktop-based application built using Java and PostgreSQL, designed to streamline invoice generation and sales tracking. I developed a user-friendly GUI using Eclipse IDE that allows dynamic product entry, real-time pricing updates, and instant receipt generation. The system ensures accurate billing with automated calculations and database integration for persistent data storage.",
      technologies: ["Java", "Swing", "PostgreSQL", "Eclipse IDE"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "🎮 Hangman Game",
      category: "console",
      description: "A classic word guessing game developed in C with a terminal-based interface. Implements logic for guessing, tracking lives, and revealing word progress, emphasizing fundamental C concepts.",
      technologies: ["C Language"],
      githubLink: "#",
      liveDemo: null
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <Badge 
                  variant="secondary" 
                  className={
                    project.category === 'fullstack' ? 'bg-portfolio-orange/20 text-portfolio-orange' : 
                    project.category === 'desktop' ? 'bg-portfolio-blue/20 text-portfolio-blue' :
                    'bg-muted text-muted-foreground'
                  }
                >
                  {project.category}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                {project.liveDemo && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;