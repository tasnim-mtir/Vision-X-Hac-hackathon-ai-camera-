import { Eye, Target, Clock, CheckCircle, BarChart3 } from "lucide-react";

const steps = [
  { icon: Eye, title: "Detect people", color: "from-primary to-cyan-500" },
  { icon: Target, title: "Track individuals", color: "from-cyan-500 to-blue-500" },
  { icon: Clock, title: "Measure waiting time", color: "from-blue-500 to-purple-500" },
  { icon: CheckCircle, title: "Identify 'served' customers", color: "from-purple-500 to-pink-500" },
  { icon: BarChart3, title: "Update dashboard", color: "from-pink-500 to-primary" },
];

export const Pipeline = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            What <span className="neon-text">Vision X</span> Sees
          </h2>
          <p className="text-xl text-muted-foreground">AI Pipeline Visualization</p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-30 hidden md:block"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col items-center text-center group">
                  {/* Circle */}
                  <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${step.color} p-1 mb-6 animate-glow-pulse`}>
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center group-hover:bg-card transition-colors">
                      <step.icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
