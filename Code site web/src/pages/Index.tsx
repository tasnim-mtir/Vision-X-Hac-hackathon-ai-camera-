import { Hero } from "@/components/sections/Hero";
import { EmotionalStory } from "@/components/sections/EmotionalStory";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Pipeline } from "@/components/sections/Pipeline";
import { Demo } from "@/components/sections/Demo";
import { Impact } from "@/components/sections/Impact";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Team } from "@/components/sections/Team";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <EmotionalStory />
      <Problem />
      <Solution />
      <Pipeline />
      <Demo />
      <Impact />
      <Features />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
