import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const DemoVideo = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="relative z-10 p-6">
        <Button
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to Home
        </Button>
      </div>

      {/* Video Container */}
      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              <span className="neon-text">Vision X</span> Live Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              See our AI-powered queue detection in action
            </p>
          </div>

          {/* Video Placeholder - Replace with actual video */}
          <div className="relative aspect-video bg-card border-2 border-primary/30 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 border-4 border-primary rounded-full mx-auto animate-glow-pulse"></div>
                <p className="text-xl font-bold text-primary">Upload your demo video here</p>
                <p className="text-sm text-muted-foreground max-w-md">
                  Replace this placeholder with your actual demo video file.<br />
                  Supported formats: MP4, WebM, MOV
                </p>
              </div>
            </div>
            
            {/* Uncomment and update src when you have the video */}
            {/* <video 
              className="w-full h-full object-contain"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/path-to-your-demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </div>

          {/* Video Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <p className="text-sm text-muted-foreground mb-2">Real-time Tracking</p>
              <p className="text-2xl font-bold neon-text">100%</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <p className="text-sm text-muted-foreground mb-2">Detection Accuracy</p>
              <p className="text-2xl font-bold neon-text">98.5%</p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <p className="text-sm text-muted-foreground mb-2">Processing Speed</p>
              <p className="text-2xl font-bold neon-text">30 FPS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
