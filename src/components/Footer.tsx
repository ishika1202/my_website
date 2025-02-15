const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/ishika1202"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ishika-mittal1202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ishika.mittal@mail.utoronto.ca"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ishika Mittal. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
