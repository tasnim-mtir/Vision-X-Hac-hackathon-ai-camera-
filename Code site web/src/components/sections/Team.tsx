import { Card } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "Ikram Menyaoui",
    role: "AI & Vision Engineer",
    education: "ESPRIM DS/AI",
    avatar: "I",
  },
  {
    name: "Razi Ammari",
    role: "Computer Vision Engineer",
    education: "ESPRIM AI",
    avatar: "R",
  },
  {
    name: "Tasnime Mtir",
    role: "ML Engineer",
    education: "ESPRIM AI",
    avatar: "T",
  },
  {
    name: "Nour Saibi",
    role: "Backend Developer & Analytics",
    education: "ESPRIM AI",
    avatar: "N",
  },
  {
    name: "Aya Mekni",
    role: "Product & UX Designer",
    education: "ESPRIM AI",
    avatar: "A",
  },
];

export const Team = () => {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Meet the <span className="neon-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Built during the AI Camera Challenge 2025
          </p>
          <p className="text-lg text-muted-foreground">
            Novation City & ANAVID
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group p-6 bg-card border-2 border-border rounded-2xl hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-full animate-glow-pulse"></div>
                  <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
                    <span className="text-4xl font-black neon-text">{member.avatar}</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.education}</p>

                {/* Social links */}
                <div className="flex justify-center gap-4">
                  <button className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </button>
                  <button className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
