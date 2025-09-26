import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

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
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                  📊 Download the Special Report on Equinox Gold
                </CardTitle>
                <p className="text-xl text-white/90 leading-relaxed">
                  Get exclusive insights into Valentine, Greenstone, Castle Mountain, and the strategy 
                  positioning Equinox Gold as a leading North American gold producer.
                </p>
              </CardHeader>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    What's Inside the Report:
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>Detailed analysis of Valentine Gold Mine operations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>Growth strategy and upcoming catalysts</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>Leadership team track record and vision</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      <span>Castle Mountain Phase 2 project timeline</span>
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
                      className="w-full bg-gradient-gold hover:bg-gradient-to-r hover:from-gold-dark hover:to-gold text-gold-foreground font-semibold py-6 text-lg shadow-gold transition-spring hover:scale-105 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending Report..." : "📧 Get Your Free Report"}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      We respect your privacy. No spam, unsubscribe anytime.
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