const ExperienceSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Freelance Developer</h3>
          <p className="text-muted-foreground">2024 - Present</p>
        </div>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mt-2 flex-shrink-0"></span>
            Built fully responsive, custom web applications tailored to client needs across various industries.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mt-2 flex-shrink-0"></span>
            Designed and developed intuitive user interfaces using React, Tailwind CSS, and modern design principles.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mt-2 flex-shrink-0"></span>
            Created secure RESTful APIs and backend systems using Node.js, Express, and MongoDB.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mt-2 flex-shrink-0"></span>
            Integrated third-party services like payment gateways, email services, and cloud storage.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mt-2 flex-shrink-0"></span>
            Implemented authentication systems, admin dashboards, and role-based access controls.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mt-2 flex-shrink-0"></span>
            Implemented JWT-based authentication and authorization for secure user sessions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;