import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Virtual Intern",
      company: "Google",
      location: "Remote",
      period: "2024",
      type: "Virtual Internship",
      description: [
        "Completed comprehensive AI/ML training program focusing on machine learning fundamentals",
        "Worked on real-world AI projects and case studies",
        "Gained hands-on experience with Google's AI/ML tools and technologies",
        "Developed understanding of neural networks, deep learning, and data analysis"
      ],
      technologies: ["Python", "TensorFlow", "Machine Learning", "Data Analysis", "Neural Networks"]
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-light mb-8 text-center">Work Experience</h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-border bg-card">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-medium">{exp.title}</CardTitle>
                  <p className="text-lg text-muted-foreground font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end gap-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <Badge variant="secondary" className="w-fit">{exp.type}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed">
                    • {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;