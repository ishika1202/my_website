const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ishika Mittal
              </span>
            </h3>
            <p className="text-muted-foreground text-sm">
              AI Engineer & Founder
            </p>
          </div>
          
          {/* Center - Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-8">
              <a
                href="https://github.com/ishika1202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ishika-mittal1202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="mailto:ishika.mittal@mail.utoronto.ca"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Email
              </a>
              <a
                href="/Ishika_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Resume
              </a>
            </div>
          </div>
          
          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ishika Mittal.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with React & TypeScript
            </p>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            Turning ideas into intelligent solutions, one project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
