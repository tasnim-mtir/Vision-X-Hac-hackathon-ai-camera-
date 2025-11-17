import { Clock, Users, TrendingDown, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Waiting time unknown",
    description: "Customers have no visibility into expected wait times",
  },
  {
    icon: AlertCircle,
    title: "Abandonment undetected",
    description: "Lost customers leave silently, untracked and unmanaged",
  },
  {
    icon: Users,
    title: "Peak hours unmanaged",
    description: "No data to predict or prepare for busy periods",
  },
  {
    icon: TrendingDown,
    title: "Revenue loss",
    description: "Invisible queue problems lead to measurable financial impact",
  },
];

export const Problem = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Queues Aren't Lines.
            <br />
            <span className="neon-text">They're Invisible Data.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-2xl hover:border-primary transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
