import { BarChart3, TrendingUp, Clock, MapPin, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const marketMetrics = [
  {
    icon: BarChart3,
    title: "Undervalued",
    subtitle: "Market Position",
    description: "Trading at discount to peers despite strong fundamentals"
  },
  {
    icon: TrendingUp,
    title: "Ramping Up",
    subtitle: "Production Growth", 
    description: "Two Canadian cornerstone assets entering production"
  },
  {
    icon: Clock,
    title: "Strategic",
    subtitle: "Market Timing",
    description: "Positioned for potential re-rating as milestones achieved"
  }
];

const catalysts = [
  {
    icon: MapPin,
    title: "Valentine Mine",
    description: "First gold production establishing operational track record"
  },
  {
    icon: Zap,
    title: "Greenstone Ramp-Up", 
    description: "Major asset coming online to boost production profile"
  },
  {
    icon: Shield,
    title: "Permitting Certainty",
    description: "Regulatory clarity improving across key jurisdictions"
  }
];

export const WhyTiming = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why the <span className="bg-gradient-gold bg-clip-text text-transparent">Timing Matters</span>
            </h2>
            
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Equinox Gold trades at a valuation that analysts view as low compared to peers. With two Canadian cornerstone assets ramping up, exploration programs underway, and permitting certainty improving, the potential for a market re-rate is significant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {marketMetrics.map((metric, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gold/20 rounded-full w-fit">
                    <metric.icon className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{metric.title}</CardTitle>
                  <p className="text-gold font-semibold">{metric.subtitle}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/90">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-xl leading-relaxed">
              But beyond valuation, this story is about scale, execution, and focus. Equinox Gold is proving it can deliver—and in the mining industry, that's what separates opportunity from risk.
            </p>
          </div>
          
          <div className="border-t border-white/20 pt-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Key Catalysts Ahead</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {catalysts.map((catalyst, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="p-2 bg-gold/20 rounded-lg mt-1">
                    <catalyst.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{catalyst.title}</h4>
                    <p className="text-white/80 text-sm">{catalyst.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-hero/20 rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">A Company on the Move</h3>
              <p className="text-xl leading-relaxed">
                Equinox Gold has moved from vision to reality. First gold at Valentine signals the start of a new era, and with Greenstone, Castle Mountain, and exploration projects lining up, the company has a clear path to growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};