import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Linguaskill English Certification",
      category: "English Language Proficiency",
      issuer: "Cambridge University Press & Assessment",
      description: "Demonstrated strong command of the English language across all four skills: Listening (B1), Reading (C1), Speaking (B2), and Writing (B2), achieving an overall CEFR level of B2. Proficient in understanding complex texts, expressing ideas fluently, and writing clear, structured content suitable for academic and professional settings.",
      verifyLink: "#"
    },
    {
      title: "Deloitte Technology Job Simulation",
      category: "Coding & Development",
      issuer: "Deloitte via Forage",
      description: "Completed a virtual job simulation where I worked on practical tasks involving software development and coding, gaining hands-on experience aligned with real-world expectations at Deloitte. Developed skills in analyzing requirements, writing clean code, and understanding technology consulting practices.",
      verifyLink: "#"
    },
    {
      title: "HackerRank Skill Certifications",
      category: "Programming Proficiency",
      issuer: "HackerRank",
      description: "Earned certifications by demonstrating strong problem-solving and coding abilities in key areas such as Java, Problem Solving, and Data Structures. These assessments reflect industry-level coding standards and validate practical proficiency through timed, hands-on challenges.",
      verifyLink: "#"
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="grid gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <Badge variant="secondary" className="mb-2">{cert.category}</Badge>
                <p className="text-portfolio-green font-medium">Issued by {cert.issuer}</p>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Verify Certificate
              </Button>
            </div>
            <p className="text-muted-foreground">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;