import familyWaiting from "@/assets/family-waiting.jpg";
import { useEffect, useState } from "react";

export const EmotionalStory = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const fullText1 = "Every minute a customer waits is a minute they'll remember.";
  const fullText2 = "But what if you could see the queue before they left?";

  useEffect(() => {
    let index = 0;
    const timer1 = setInterval(() => {
      if (index < fullText1.length) {
        setText1(fullText1.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer1);
        // Start second text
        setTimeout(() => {
          let index2 = 0;
          const timer2 = setInterval(() => {
            if (index2 < fullText2.length) {
              setText2(fullText2.slice(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);
            }
          }, 50);
        }, 500);
      }
    }, 50);

    return () => clearInterval(timer1);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${familyWaiting})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <p className="text-4xl md:text-5xl font-bold text-foreground leading-relaxed min-h-[120px]">
            {text1}
            <span className="animate-pulse">|</span>
          </p>
          
          {text2 && (
            <p className="text-3xl md:text-4xl font-medium text-muted-foreground leading-relaxed animate-fade-in-up">
              {text2}
              <span className="animate-pulse">|</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
