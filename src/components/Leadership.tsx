import { Award, TrendingUp, Building2, Target, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import rossBeaty from "@/assets/ross-beaty.jpg";
import darrenHall from "@/assets/darren-hall.jpg";

const leaders = [
  {
    name: "Ross Beaty",
    title: "Executive Chairman",
    image: rossBeaty,
    experience: "40+ Years",
    achievements: [
      { icon: Award, text: "Founded multiple successful mining companies" },
      { icon: TrendingUp, text: "Track record of creating shareholder value" },
      { icon: Building2, text: "Resource sector veteran and entrepreneur" }
    ],
    description: "A renowned mining entrepreneur with decades of proven success in building and operating world-class mining companies."
  },
  {
    name: "Darren Hall",
    title: "Chief Executive Officer", 
    image: darrenHall,
    experience: "25+ Years",
    achievements: [
      { icon: Target, text: "Operational excellence and strategic vision" },
      { icon: Users, text: "Leading high-performance teams" },
      { icon: Calendar, text: "Delivering projects on time and budget" }
    ],
    description: "Brings extensive operational and financial expertise, guiding Equinox Gold's transformation from development to production."
  }
];

export const Leadership = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Leadership With a <span className="bg-gradient-gold bg-clip-text text-transparent">Track Record</span>
            </h2>
            
            <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto mb-12">
              At the center of this transformation is a leadership team that blends vision with proven execution, 
              setting Equinox Gold apart from many mid-tier mining companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {leaders.map((leader, index) => (
              <Card key={leader.name} className="shadow-elegant border-border/50 overflow-hidden hover:shadow-gold transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="bg-gradient-hero text-white p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-bold text-white mb-1">
                        {leader.name}
                      </CardTitle>
                      <p className="text-white/90 font-semibold">{leader.title}</p>
                      <p className="text-gold text-sm font-medium">{leader.experience}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-foreground leading-relaxed mb-6">
                    {leader.description}
                  </p>
                  
                  <div className="space-y-3">
                    {leader.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-3 group">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <achievement.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm text-foreground font-medium">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-white/50 rounded-lg p-8 border border-border/50">
            <p className="text-xl font-semibold text-foreground leading-relaxed">
              Equinox Gold is writing the next chapter of Canadian mining history, with tangible milestones already achieved and more catalysts on the horizon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};