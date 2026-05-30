function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Let's Connect
        </h2>

        <p className="text-gray-600 mb-10">
          Feel free to connect with me for internships,
          collaborations, projects, or opportunities.
        </p>

        <div className="space-y-4">

          <p className="text-lg">
            📧 hippargivaishnavi30@gmail.com
          </p>

          <p className="text-lg">
            📍 Solapur, Maharashtra
          </p>

          <a
            href="https://www.linkedin.com/in/vaish30/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold block"
          >
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/Vaish30hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold block"
          >
            GitHub Profile
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;