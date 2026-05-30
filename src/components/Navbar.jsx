import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="font-bold text-xl text-gray-900">
          Vaishnavi Hippargi
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-blue-600 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/Vaish30hub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/vaish30/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin size={22} />
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;