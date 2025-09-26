import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    title: "Valentine Gold Mine",
    subtitle: "First Gold Poured",
    description: "Largest gold mine in Atlantic Canada, producing 175,000–200,000 ounces per year for 14 years.",
    icon: "⚡",
    metric: "200k oz/year"
  },
  {
    title: "Ahead of Schedule",
    subtitle: "Mill Performance",
    description: "Mill throughput averaging 47% of nameplate capacity in first 15 days, exceeding expectations.",
    icon: "📈",
    metric: "47% capacity"
  },
  {
    title: "Strategic Growth",
    subtitle: "Castle Mountain",
    description: "FAST-41 program acceptance provides streamlined permitting with December 2026 completion target.",
    icon: "🏗️",
    metric: "Dec 2026"
  },
  {
    title: "Focused Portfolio",
    subtitle: "Nevada Divestiture",
    description: "US$115 million sale strengthens balance sheet while maintaining focus on tier-one assets.",
    icon: "💎",
    metric: "$115M"
  }
];

export const KeyHighlights = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why This <span className="bg-gradient-gold bg-clip-text text-transparent">First Gold Pour Matters</span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            For any mining company, moving from construction to production is a turning point. Valentine's first pour demonstrates execution: commissioning of the processing plant has been smoother than anticipated, with mill throughput averaging nearly half of design capacity during the first two weeks.
          </p>
          <p className="text-xl text-foreground max-w-3xl mx-auto mt-4">
            This means Equinox Gold is already ahead of schedule and on track to have Valentine hit full nameplate capacity of 2.5 million tonnes per year by Q2 2026.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-spring hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-spring">
                  {highlight.icon}
                </div>
                <div className="text-3xl font-bold text-gold mb-2">
                  {highlight.metric}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">
                  {highlight.subtitle}
                </p>
                <p className="text-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};