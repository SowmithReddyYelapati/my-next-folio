const EducationSection = () => {
  return <section className="w-full max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="mb-4 py-[2px] my-px">
          <h3 className="text-xl font-semibold py-[5px]">Bachelor of Technology (B.Tech) – Computer Science and Engineering</h3>
          <p className="text-portfolio-blue font-medium">Koneru Lakshmaiah University</p>
          <p className="text-muted-foreground">2023 - 2027</p>
        </div>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 flex-shrink-0"></span>
            Gained a strong foundation in computer science: Data Structures, Algorithms, DBMS, OS, and OOP.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 flex-shrink-0"></span>
            Developed a deep understanding of software development principles and best practices.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 flex-shrink-0"></span>
            Worked on real-world projects, gaining hands-on experience in full-stack development.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 flex-shrink-0"></span>
            Collaborated with teams to deliver high-quality, user-friendly applications.
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 flex-shrink-0"></span>
            Stayed updated with the latest web development trends and technologies.
          </li>
        </ul>
      </div>
    </section>;
};
export default EducationSection;