function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Experience
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold">
              Software Developer Intern
            </h3>

            <p className="text-blue-600 mt-2 font-medium">
              SP Financial Service
            </p>

            <p className="text-gray-500 mt-2">
              Feb 2026 - May 2026
            </p>

            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• .NET & React.js Development</li>
              <li>• JWT Authentication</li>
              <li>• API Integration</li>
              <li>• Database Operations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold">
              Full Stack Java Developer Intern
            </h3>

            <p className="text-blue-600 mt-2 font-medium">
              The Skybrisk
            </p>

            <p className="text-gray-500 mt-2">
              Dec 2025 - Jun 2026
            </p>

            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• Spring Boot Development</li>
              <li>• React.js Frontend</li>
              <li>• REST APIs</li>
              <li>• MySQL Database</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold">
              Java Developer Intern
            </h3>

            <p className="text-blue-600 mt-2 font-medium">
              Giri's Tech Hub Pvt Ltd
            </p>

            <p className="text-gray-500 mt-2">
              Feb 2026 - May 2026
            </p>

            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• Java Programming</li>
              <li>• Data Structures & Algorithms</li>
              <li>• OOP Concepts</li>
              <li>• Problem Solving</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;