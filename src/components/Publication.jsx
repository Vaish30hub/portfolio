function Publication() {
  return (
    <section id="publication" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Research Publication
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">

          <h3 className="text-2xl font-bold">
            CarbonNet – AI Carbon Emission Monitoring System
          </h3>

          <p className="mt-4 text-gray-600">
            Published in International Journal of Scientific
            Research & Engineering Trends (IJSRET),
            Vol 11, Issue 6, Nov–Dec 2025.
          </p>

          <p className="mt-4 text-gray-600">
            AI-powered carbon emission monitoring and prediction
            platform developed using Machine Learning,
            Spring Boot, React.js, Flutter, and MySQL.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="/paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              View Research Paper
            </a>

            <a
              href="/publication-certificate.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition"
            >
              View Certificate
            </a>


          </div>

        </div>

      </div>
    </section>
  );
}

export default Publication;