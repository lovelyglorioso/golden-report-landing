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
            In mining, milestones matter. And for Equinox Gold (TSX: EQX | NYSE-A: EQX), one of the most important has just arrived. The company poured first gold at its Valentine Gold Mine in Newfoundland and Labrador—an achievement that marks the start of a new era for both Equinox Gold and Canadian gold production.
          </p>
          
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-3xl mx-auto">
            Valentine is more than another mine. Once fully ramped up, it will be the largest gold mine in Atlantic Canada, producing 175,000–200,000 ounces per year for the first 12 years of its 14-year reserve life. Together with Equinox Gold's Greenstone Mine in Ontario, now also ramping up, this milestone positions the company to become Canada's second-largest gold producer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={onDownloadClick}
              size="lg"
              className="bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-dark hover:to-gold text-gold-foreground font-semibold px-8 py-6 text-lg shadow-gold transition-spring hover:scale-105"
            >
              📊 Download the Special Report on Equinox Gold Here
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