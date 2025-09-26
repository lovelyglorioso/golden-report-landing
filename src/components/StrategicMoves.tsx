import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const StrategicMoves = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Streamlined Growth, <span className="bg-gradient-gold bg-clip-text text-transparent">Strategic Moves</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equinox Gold's growth plans aren't stopping at Valentine. The company has made several recent moves that sharpen its focus and strengthen its pipeline:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                <span className="text-3xl">🏗️</span>
                Castle Mountain Accepted into FAST-41 Program
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Equinox Gold's planned Castle Mountain Phase 2 project in California has been added to the U.S. federal FAST-41 permitting program. This designation provides a streamlined process, improved coordination, and a clear permitting timeline. According to the FAST-41 dashboard, the federal Record of Decision will be complete by December 2026—a rare level of certainty in U.S. permitting.
              </p>
              <p className="text-foreground font-medium">
                Once built, Castle Mountain could produce ~200,000 ounces annually over 14 years, making it another cornerstone asset in a tier-one jurisdiction.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
                <span className="text-3xl">💎</span>
                Nevada Assets Divested
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Equinox Gold recently agreed to sell its non-core Nevada projects (the Pan Mine, Gold Rock, and Illipah) for US$115 million. The deal delivers US$90 million in cash and US$25 million in equity in Minera Alamos, subject to approvals.
              </p>
              <p className="text-foreground font-medium">
                This move strengthens the balance sheet while ensuring management remains focused on high-impact assets like Valentine, Greenstone, and Castle Mountain.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-foreground font-semibold">
            Together, these developments tell a story of focus, scale, and disciplined growth.
          </p>
        </div>
      </div>
    </section>
  );
};