import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "fullstack",
      description: "A fully responsive e-commerce platform with user authentication, shopping cart, payment integration, and admin dashboard for managing products and orders.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "Task Management App",
      category: "fullstack", 
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "Weather Dashboard",
      category: "frontend",
      description: "A modern weather dashboard providing real-time weather data, forecasts, and interactive maps with a clean, responsive design.",
      technologies: ["React", "CSS", "Weather API"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "Social Media Platform",
      category: "fullstack",
      description: "A social media platform where users can share posts, connect with friends, and engage through comments and likes with real-time chat functionality.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "Portfolio Website",
      category: "frontend",
      description: "A responsive portfolio website showcasing projects and skills with modern design principles and smooth animations.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "Banking Application",
      category: "fullstack",
      description: "A secure banking application with account management, transaction history, and modern financial services integration.",
      technologies: ["Next.js", "TypeScript", "Appwrite"],
      githubLink: "#",
      liveDemo: "#"
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
                  className={project.category === 'fullstack' ? 'bg-portfolio-orange/20 text-portfolio-orange' : 'bg-portfolio-blue/20 text-portfolio-blue'}
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