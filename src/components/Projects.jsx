import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "CarbonNet",
      description:
        "AI-powered Carbon Emission Monitoring and Prediction System with real-time analytics dashboard and mobile application support.",
      tech: [
        "Spring Boot",
        "React",
        "Flutter",
        "Python",
        "MySQL",
      ],
      github: "https://github.com/Vaish30hub",
    },

    {
      title: "IntelliGuard",
      description:
        "Self-learning AI Cybersecurity Tool for detecting malicious activities using Machine Learning and real-time monitoring.",
      tech: [
        "Flask",
        "React",
        "Machine Learning",
        "Python",
        "MySQL",
      ],
      github:
        "https://github.com/Vaish30hub/IntelliGuard-AI-Cybersecurity-Tool",
    },

    {
      title: "Loan Approval Prediction System",
      description:
        "Machine Learning-powered web application that predicts loan approval status based on applicant information using trained classification models and an interactive user interface.",
      tech: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "FastAPI",
        "HTML",
        "CSS",
        "Jinja2",
      ],
      github:
        "https://github.com/Vaish30hub/Loan_Approval",
    },

    {
      title: "Weather Forecast App",
      description:
        "Weather analytics dashboard using external APIs to provide real-time weather information and forecasts.",
      tech: [
        "React",
        "API Integration",
      ],
      github: "https://github.com/Vaish30hub",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-gray-900"
        >
          Projects
        </motion.h2>

        <div className="w-16 h-1 bg-blue-600 rounded-full mb-12"></div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-md
                border
                border-gray-100
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-7 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                      px-3
                      py-1
                      bg-blue-100
                      text-blue-700
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  shadow-md
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <FaGithub />
                View Code
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;