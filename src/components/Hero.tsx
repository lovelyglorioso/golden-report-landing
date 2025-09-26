import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mining.jpg";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero = ({ onDownloadClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark/90" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Equinox Gold:
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Canada's Next Major
            </span>
            <br />
            Gold Producer
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            A defining moment in Canadian gold mining. Valentine Gold Mine has poured first gold, 
            positioning Equinox Gold to become Canada's second-largest gold producer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onDownloadClick}
              size="lg"
              className="bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-dark hover:to-gold text-gold-foreground font-semibold px-8 py-6 text-lg shadow-gold transition-spring hover:scale-105"
            >
              📊 Download Special Report
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg transition-smooth backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};