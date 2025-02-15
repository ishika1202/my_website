import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Ishika Mittal
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#experience" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Experience
          </a>
          <a 
            href="#projects" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="/Ishika_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-800 text-white hover:bg-gray-700 h-10 px-4 py-2">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;