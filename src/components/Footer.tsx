import { Building2, MapPin, BarChart3, Phone, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gold/20 rounded-lg">
                <Building2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-3xl font-bold">
                <span className="bg-gradient-gold bg-clip-text text-transparent">Equinox</span> Gold
              </h3>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Canada's emerging major gold producer with world-class assets 
              and a proven leadership team driving disciplined growth.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Investor Relations</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Corporate Info</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <h4 className="font-semibold text-lg">Key Assets</h4>
            </div>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center space-x-2 hover:text-gold transition-colors">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                <span>Valentine Gold Mine - Newfoundland</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-gold transition-colors">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                <span>Greenstone Mine - Ontario</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-gold transition-colors">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                <span>Castle Mountain - California</span>
              </li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-5 h-5 text-gold" />
              <h4 className="font-semibold text-lg">Stock Information</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors">
                <div className="font-semibold text-gold">TSX: EQX</div>
                <div className="text-sm text-white/80">Toronto Stock Exchange</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors">
                <div className="font-semibold text-gold">NYSE-A: EQX</div>
                <div className="text-sm text-white/80">New York Stock Exchange</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="max-w-6xl mx-auto text-white/90 text-xs leading-relaxed text-justify space-y-4">
            <h3 className="text-sm font-bold text-center mb-4">DISCLAIMERS - THIS IS A PAID ADVERTISEMENT.</h3>
            
            <p>
              Disclaimer: This article is a paid advertisement for Equinox Gold Corp. (TSX: EQX | NYSE-A: EQX). IRP Holdings Corporation dba IRPub, its owners, directors, officers, employees, affiliates, agents and assignees (collectively the "Publisher") is often paid by one or more of the profiled companies or a third party to disseminate these types of communications. In this case, the Publisher has been compensated by Equinox Gold to conduct public investor awareness, distribution and investor education marketing by producing and disseminating this article and similar articles and advertisements.
            </p>
            
            <p>
              Year to date, IRP Holdings Corporation dba IRPub has received Two Hundred Eighty-Five Thousand Dollars paid by Equinox Gold Corp. ( TSX: EQX NYSE-A: EQX ) for brand awareness, marketing distribution and investor education marketing for a period of 12 Months.
            </p>
            
            <p>
              This communication is for entertainment purposes only. Never invest purely based on our communication. Always do your own research and consult with a licensed investment professional before investing. This communication should be viewed as a commercial advertisement only.
            </p>
            
            <p className="text-center pt-4 text-white/70">
              For complete disclaimers and disclosures, visit: <a href="http://irpub.com/Disclaimer" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">irpub.com/Disclaimer</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};