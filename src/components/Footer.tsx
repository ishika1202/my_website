import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Contact & Button */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <a 
            href="mailto:ishika.mittal@mail.utoronto.ca"
            className="text-muted-foreground hover:text-[#6699cc] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://calendly.com/ishika-mittal-02/yc-connect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#6699cc] hover:bg-[#5588bb] text-white rounded-lg transition-colors text-sm font-medium"
          >
            Schedule a call
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-muted-foreground text-xs">
            © 2025 Ishika Mittal. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
