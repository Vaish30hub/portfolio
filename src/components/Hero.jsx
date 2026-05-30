import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-20 right-20 h-72 w-72 bg-purple-300 rounded-full blur-3xl opacity-20"></div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Photo */}
<div className="relative flex justify-center mb-8">
  <div className="absolute w-52 h-52 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

  <img
    src="/profile.jpeg"
    alt="Vaishnavi Hippargi"
    className="
      relative
      w-48
      h-48
      object-cover
      object-top
      rounded-full
      border-4
      border-white
      shadow-2xl
      hover:scale-105
      transition-all
      duration-500
    "
  />
</div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900"
        >
          Vaishnavi Hippargi
        </motion.h1>

        {/* Role */}
        <div className="mt-4">
  <TypeAnimation
    sequence={[
      "Software Developer",
      2000,
      "Full Stack Developer",
      2000,
      "AI Enthusiast",
      2000,
      "Machine Learning Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-xl md:text-2xl text-blue-600 font-medium"
  />
</div>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-8"
        >
          Computer Science Engineering student passionate about
          Artificial Intelligence, Full-Stack Development,
          Machine Learning, Software Engineering and building
          impactful technology solutions.
        </motion.p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="
              bg-blue-600
              hover:bg-blue-700
              hover:scale-105
              transition-all
              duration-300
              text-white
              px-8
              py-3
              rounded-xl
              shadow-lg
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              border
              border-gray-300
              hover:border-blue-600
              hover:text-blue-600
              hover:scale-105
              transition-all
              duration-300
              px-8
              py-3
              rounded-xl
              bg-white
            "
          >
            Download Resume
          </a>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              3+
            </h3>
            <p className="text-gray-600 mt-2">
              Internships
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              10+
            </h3>
            <p className="text-gray-600 mt-2">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-600">
              1
            </h3>
            <p className="text-gray-600 mt-2">
              Research Publication
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;