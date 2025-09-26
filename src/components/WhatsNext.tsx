import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  "Valentine reaching full throughput of 2.5 million tonnes per year in Q2 2026.",
  "Steady production growth from Greenstone, which is ramping up from ~230,000 ounces in 2025 toward ~330,000 ounces per year when operating at capacity.",
  "Permitting progress at Castle Mountain, with a clear federal permitting timeline under FAST-41.",
  "Closing of the Nevada divestment, delivering cash proceeds and streamlining the portfolio.",
  "Ongoing exploration success in Canada, Nicaragua, and Brazil, which could extend mine lives and unlock new resources."
];

export const WhatsNext = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What <span className="bg-gradient-gold bg-clip-text text-transparent">Comes Next</span>
            </h2>
            <p className="text-xl text-foreground">
              Looking ahead, investors and industry watchers can expect several near-term milestones:
            </p>
          </div>
          
          <Card className="shadow-elegant border-border/50 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {milestones.map((milestone, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-gold-foreground font-bold text-sm mt-1 flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-foreground leading-relaxed">{milestone}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-lg text-foreground font-medium text-center">
                  These milestones reinforce Equinox Gold's evolution from a developer into a diversified, long-life producer with operations in tier-one jurisdictions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};