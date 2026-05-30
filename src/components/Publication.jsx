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
            platform built using Machine Learning, Spring Boot,
            React.js, Flutter, and MySQL.
          </p>

          <div className="mt-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Published Research Paper
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publication;