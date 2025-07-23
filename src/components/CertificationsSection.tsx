import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      category: "Cloud Computing",
      issuer: "Amazon Web Services",
      description: "Comprehensive understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      verifyLink: "#"
    },
    {
      title: "MongoDB Associate Developer",
      category: "Database",
      issuer: "MongoDB",
      description: "Advanced proficiency in MongoDB, NoSQL, and modern database development practices.",
      verifyLink: "#"
    },
    {
      title: "React Developer Certification",
      category: "Frontend",
      issuer: "Meta",
      description: "Advanced proficiency in React, component architecture, and modern frontend development practices.",
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