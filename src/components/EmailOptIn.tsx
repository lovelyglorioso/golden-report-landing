import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { FileText, CheckCircle, TrendingUp, Target } from "lucide-react";

export const EmailOptIn = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Success!",
      description: "Your special report will be sent to your email shortly.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-border/50 overflow-hidden">
            <div className="bg-gradient-hero p-8 text-white text-center">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                  Get the Special Report: Equinox Gold's Growth Path
                </CardTitle>
                <p className="text-xl text-white/90 leading-relaxed">
                  Inside, you'll find a deeper look at Valentine, Greenstone, Castle Mountain, and the strategy that's positioning Equinox Gold as a leading North American gold producer.
                </p>
              </CardHeader>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Get the full story behind:
                  </h3>
                  <ul className="space-y-4 text-foreground">
                    <li className="flex items-center space-x-3 group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">The milestones that matter</span>
                    </li>
                    <li className="flex items-center space-x-3 group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">The strategy behind the growth</span>
                    </li>
                    <li className="flex items-center space-x-3 group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium">What's next for this rising Canadian gold producer</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-subtle p-6 rounded-lg">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-dark hover:to-gold text-gold-foreground font-semibold px-4 py-4 text-xs md:text-sm shadow-gold transition-spring hover:scale-105 disabled:opacity-50 leading-tight"
                    >
                      {isSubmitting ? "Sending..." : "Download Your Free Special Report on Equinox Gold"}
                    </Button>
                    
                    <p className="text-xs text-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
                      I acknowledge I have read and understand the{" "}
                      <a 
                        href="https://tipsfortraders.com/privacy-policy/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        TipsForTraders
                      </a>{" "}
                      and{" "}
                      <a 
                        href="https://www.equinoxgold.com/privacy-policy/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        Equinox Gold
                      </a>{" "}
                      privacy policies, and consent to the use of my personal data for marketing purposes by clicking the button above.
                    </p>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};