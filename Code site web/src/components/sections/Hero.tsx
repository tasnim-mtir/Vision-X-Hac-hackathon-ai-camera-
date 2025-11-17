import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Patisserie" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-7xl md:text-9xl font-black mb-6 leading-tight animate-fade-in-up">
          <span className="neon-text">VISION X</span>
        </h1>
        
        <p className="text-3xl md:text-5xl font-bold mb-4 text-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          The Smart Camera That Ends Queues.
        </p>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Real-time AI detection, queue analytics, peak-hours prediction.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full neon-border animate-glow-pulse group"
            onClick={() => window.location.href = '/demo'}
          >
            Try Live Demo
            <Play className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full group"
          >
            Get Vision X
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll indicator - moved further down */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
