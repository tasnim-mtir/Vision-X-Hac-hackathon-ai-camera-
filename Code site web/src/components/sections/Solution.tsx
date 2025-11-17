import cameraImg from "@/assets/camera.png";

export const Solution = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse"></div>
            <img 
              src={cameraImg} 
              alt="Vision X Camera" 
              className="relative w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Meet <span className="neon-text">Vision X</span>
              <br />
              Your Real-Time Queue Manager.
            </h2>
            
            <p className="text-2xl font-medium text-muted-foreground">
              Detect. Track. Time. Predict. Assist.
            </p>

            <div className="space-y-4">
              {[
                "AI-powered person detection",
                "Individual tracking with stable IDs",
                "Precise waiting time measurement",
                "Real-time dashboard updates",
                "Predictive analytics for peak hours",
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 animate-slide-in-left"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <p className="text-lg text-foreground/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
