import { useEffect, useState } from "react";

const kpis = [
  { value: 35, suffix: "%", label: "faster service" },
  { value: 20, suffix: "%", label: "more customers served" },
  { value: 0, suffix: "", label: "lost clients" },
  { value: 30, suffix: "%", label: "satisfaction increase" },
];

export const Impact = () => {
  const [counters, setCounters] = useState(kpis.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("impact-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers = kpis.map((kpi, index) => {
      const duration = 2000;
      const steps = 50;
      const increment = kpi.value / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= kpi.value) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = kpi.value;
            return newCounters;
          });
          clearInterval(timers[index]);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, duration / steps);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section id="impact-section" className="relative py-32 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      {/* Background map effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            The <span className="neon-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground">Real results from Vision X deployment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card border border-border rounded-2xl hover:border-primary transition-all duration-300 animate-counter-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-6xl md:text-7xl font-black neon-text mb-4 animate-neon-flicker">
                {counters[index]}
                {kpi.suffix}
              </div>
              <p className="text-lg font-medium text-muted-foreground">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
