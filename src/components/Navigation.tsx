import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
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
              href="#skills" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Skills
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

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/Ishika_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-800 text-white hover:bg-gray-700 h-10 px-4 py-2">
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <a 
                href="#experience"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => handleMobileNavClick('experience')}
              >
                Experience
              </a>
              <a 
                href="#skills"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => handleMobileNavClick('skills')}
              >
                Skills
              </a>
              <a 
                href="#projects"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => handleMobileNavClick('projects')}
              >
                Projects
              </a>
              <a 
                href="#contact"
                className="block text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
                onClick={() => handleMobileNavClick('contact')}
              >
                Contact
              </a>
              <a 
                href="/Ishika_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;