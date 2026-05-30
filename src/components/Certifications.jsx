function Certifications() {
  const certifications = [
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM SkillsBuild",
    },
    {
      title: "Java (4★ Badge)",
      issuer: "HackerRank",
    },
    {
      title: "Java Using DSA",
      issuer: "Giri's Tech Hub Pvt Ltd",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              <p className="text-blue-600 mt-3">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;