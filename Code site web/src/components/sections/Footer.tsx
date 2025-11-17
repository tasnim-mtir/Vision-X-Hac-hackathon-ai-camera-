import { Camera } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Camera className="w-8 h-8 text-primary" />
            <span className="text-2xl font-black neon-text">VISION X</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Made with ❤️ at the AI Camera Challenge
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Novation City • 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
