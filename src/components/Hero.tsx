import heroImage from "@/assets/hero-mining.jpg";
import equinoxLogo from "@/assets/equinox-logo.png";

export const Hero = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Equinox Gold: Canada's Next Major Gold Producer
            </span>
          </h1>
          
          <div className="mb-8">
            <img 
              src={equinoxLogo} 
              alt="Equinox Gold Logo" 
              className="h-16 md:h-20 mx-auto"
            />
          </div>
          
          <p className="text-xs text-white/70 mb-4 max-w-4xl mx-auto leading-relaxed">
            This is a paid advertisement for Equinox Gold Corp. (TSX: EQX | NYSE-A: EQX). IRP Holdings Corporation dba IRPub and Tips For Traders has been compensated for its marketing services. This content is not investment advice. Investing involves risk, and readers should do their own research before making any investment decisions. This article also includes forward-looking information and forward-looking statements within the meaning of applicable securities legislation and may include estimates of future financial or operational performance (collectively "Forward-looking Information"). Actual results may vary materially from the estimates and assumptions set out in any Forward-looking Information.
          </p>
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