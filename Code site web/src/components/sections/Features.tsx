import { Eye, Target, Flame, Bell, Cloud, Camera, BarChart3, Users } from "lucide-react";

const features = [
  { icon: Eye, title: "Real-time detection", description: "Instant person detection with high accuracy" },
  { icon: Target, title: "Accurate tracking", description: "Stable ID tracking across frames" },
  { icon: Flame, title: "Heatmaps", description: "Visual activity patterns and hotspots" },
  { icon: Bell, title: "Smart alerts", description: "Notifications for long queues and abandonment" },
  { icon: Cloud, title: "Cloud-ready", description: "Seamless cloud integration and storage" },
  { icon: Camera, title: "CCTV compatible", description: "Works with existing camera systems" },
  { icon: BarChart3, title: "Predictive analytics", description: "AI-powered peak hour forecasting" },
  { icon: Users, title: "Staff suggestions", description: "Optimal staffing recommendations" },
];

export const Features = () => {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Powerful <span className="neon-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground">Everything you need to optimize your queue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary hover:bg-card/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-4 p-4 bg-primary/10 rounded-xl w-fit group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
