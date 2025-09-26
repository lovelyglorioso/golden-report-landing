import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const DefiningMoment = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to download the report.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank You!",
        description: "Your special report on Equinox Gold will be sent to your email shortly.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            A Defining Moment in 
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Canadian Gold Mining</span>
          </h2>
          
          <div className="prose prose-lg md:prose-xl max-w-none text-muted-foreground mb-12 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              In mining, milestones matter. And for Equinox Gold (TSX: EQX | NYSE-A: EQX), one of the most important has just arrived. The company poured first gold at its Valentine Gold Mine in Newfoundland and Labrador—an achievement that marks the start of a new era for both Equinox Gold and Canadian gold production.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Valentine is more than another mine. Once fully ramped up, it will be the largest gold mine in Atlantic Canada, producing 175,000–200,000 ounces per year for the first 12 years of its 14-year reserve life. Together with Equinox Gold's Greenstone Mine in Ontario, now also ramping up, this milestone positions the company to become Canada's second-largest gold producer.
            </p>
          </div>

          {/* Email Opt-in Form */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
              Get Your Free Special Report
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="max-w-md mx-auto space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-border focus:border-primary rounded-lg"
                  disabled={isSubmitting}
                />
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-dark hover:to-gold text-gold-foreground font-semibold px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg shadow-gold transition-spring hover:scale-105 w-full"
                >
                  {isSubmitting ? "Sending..." : "Download the Special Report on Equinox Gold Here"}
                </Button>
              </div>
            </form>
            
            <p className="text-xs text-muted-foreground mt-6 max-w-2xl mx-auto">
              I acknowledge I have read and understand the{" "}
              <a 
                href="https://tipsfortraders.com/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TipsForTraders
              </a>{" "}
              and{" "}
              <a 
                href="https://www.equinoxgold.com/privacy-policy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Equinox Gold
              </a>{" "}
              privacy policies, and consent to the use of my personal data for marketing purposes by clicking the button above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};