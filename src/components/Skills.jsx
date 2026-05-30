function Skills() {
  const skills = [
    "Java",
    "Python",
    "React.js",
    "Spring Boot",
    "Flask",
    "MySQL",
    "Git",
    "Machine Learning",
    "DSA",
    "DBMS",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white p-4 rounded-lg shadow text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;