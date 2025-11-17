import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$$$$",
    period: "",
    description: "Perfect for small patisseries",
    features: [
      "1 camera connection",
      "Basic analytics dashboard",
      "Real-time queue detection",
      "Email support",
      "Data retention: 7 days",
    ],
  },
  {
    name: "Professional",
    price: "$$$$",
    period: "",
    description: "For growing businesses",
    features: [
      "Up to 5 cameras",
      "Advanced analytics & reports",
      "Predictive peak hours",
      "Staff recommendations",
      "Priority support",
      "Data retention: 30 days",
      "Custom alerts",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$$$$",
    period: "",
    description: "Tailored solutions for chains",
    features: [
      "Unlimited cameras",
      "Multi-location support",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited data retention",
      "SLA guarantee",
      "On-premise option",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Simple <span className="neon-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card border-2 rounded-2xl transition-all duration-300 animate-fade-in-up ${
                plan.popular
                  ? "border-primary scale-105 md:scale-110 shadow-2xl shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black neon-text">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-lg font-bold rounded-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground neon-border animate-glow-pulse"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Buy Now"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
