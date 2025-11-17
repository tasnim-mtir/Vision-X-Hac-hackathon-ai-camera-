import { Card } from "@/components/ui/card";
import { Clock, Users, TrendingUp, Activity } from "lucide-react";

const metrics = [
  { icon: Clock, label: "Avg Waiting Time", value: "3.5 min", trend: "-25%" },
  { icon: Users, label: "Current Queue", value: "12 people", trend: "normal" },
  { icon: TrendingUp, label: "Peak Hour Prediction", value: "14:00-16:00", trend: "+40%" },
  { icon: Activity, label: "Heatmap Activity", value: "High", trend: "active" },
];

export const Demo = () => {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="neon-text">Live Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground">See Vision X in action</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video mockup */}
          <div className="lg:col-span-2">
            <Card className="relative aspect-video bg-card border-2 border-primary/30 rounded-2xl overflow-hidden animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 border-4 border-primary rounded-full mx-auto animate-glow-pulse"></div>
                  <p className="text-xl font-bold text-primary">Camera Feed Simulation</p>
                  <p className="text-sm text-muted-foreground">Bounding boxes • Stable IDs • Real-time tracking</p>
                </div>
              </div>

              {/* Simulated bounding boxes */}
              <div className="absolute top-20 left-20 w-16 h-20 border-2 border-primary rounded animate-pulse">
                <div className="absolute -top-6 left-0 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
                  ID: 001 • 2:30
                </div>
              </div>
              <div className="absolute top-32 right-32 w-16 h-20 border-2 border-cyan-500 rounded animate-pulse" style={{ animationDelay: "0.5s" }}>
                <div className="absolute -top-6 left-0 bg-cyan-500 text-white px-2 py-1 rounded text-xs font-bold">
                  ID: 002 • 4:15
                </div>
              </div>
            </Card>
          </div>

          {/* Metrics panel */}
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border border-border hover:border-primary transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-xs text-primary mt-1">{metric.trend}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
