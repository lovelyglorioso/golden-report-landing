import { Shield, AlertTriangle, FileCheck, Info } from "lucide-react";

export const Disclaimer = () => {
  return (
    <section className="py-16 bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Important Disclaimer</h3>
          </div>
          
          <div className="bg-white/70 rounded-lg p-8 shadow-sm border border-border/50">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Investment Risk</div>
                  <div className="text-xs text-muted-foreground">High risk investments</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Information Only</div>
                  <div className="text-xs text-muted-foreground">Not investment advice</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Public Data</div>
                  <div className="text-xs text-muted-foreground">Based on press releases</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">Due Diligence</div>
                  <div className="text-xs text-muted-foreground">Consult professionals</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border/30 pt-6">
              <p className="text-sm text-foreground leading-relaxed text-center">
                <strong>Important Disclaimer:</strong> This page is for informational purposes only and not investment advice. All statements are based on publicly available data from Equinox Gold press releases and related sources. Mining investments involve significant risks including operational, regulatory, environmental, and commodity price risks. Past performance does not guarantee future outcomes. Always conduct your own research and consult with qualified financial professionals before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};