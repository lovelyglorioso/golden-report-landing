export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-gold bg-clip-text text-transparent">Equinox</span> Gold
            </h3>
            <p className="text-white/80 leading-relaxed">
              Canada's emerging major gold producer with world-class assets 
              and a proven leadership team driving disciplined growth.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Key Assets</h4>
            <ul className="space-y-2 text-white/80">
              <li>Valentine Gold Mine - Newfoundland</li>
              <li>Greenstone Mine - Ontario</li>
              <li>Castle Mountain - California</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Stock Information</h4>
            <div className="space-y-2 text-white/80">
              <div>TSX: EQX</div>
              <div>NYSE-A: EQX</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="max-w-6xl mx-auto text-white/90 text-xs leading-relaxed text-justify">
            <p className="mb-4">
              <strong>Disclaimer:</strong> This article is a paid advertisement for Equinox Gold Corp. (TSX: EQX | NYSE-A: EQX). IRP Holdings Corporation dba IRPub, its owners, directors, officers, employees, affiliates, agents and assignees (collectively the "Publisher") is often paid by one or more of the profiled companies or a third party to disseminate these types of communications. In this case, the Publisher has been compensated by Equinox Gold to conduct public investor awareness, distribution and investor education marketing by producing and disseminating this article and similar articles and advertisements. This compensation should be viewed as a major conflict with the Publisher's ability to provide unbiased information or opinion. This article also includes Forward-looking Information. Forward-looking Information involves numerous risks, uncertainties and other factors that may cause actual results and developments to differ materially from those expressed or implied by such Forward-looking Information. Such factors include those described in the section "Risk Factors" in Equinox Gold's MD&A dated March 13, 2025 for the year ended December 31, 2024, and in the section titled "Risks Related to the Business" in Equinox Gold's most recently filed Annual Information Form, both of which are available on SEDAR+ at www.sedarplus.ca and on EDGAR at www.sec.gov/edgar. Readers should visit Equinox Gold's website at www.equinoxgold.com and view Equinox Gold's continuous disclosure documents published on SEDAR+ and on EDGAR to learn more about the company.
            </p>
            <p className="mb-4">
              TipsForTraders (Tips4Traders) is a brand owned and operated by IRP Holdings Corporation dba IRPub.com. For the purposes of this campaign it has been licensed for use by a Third Party, Equinox Gold Corp. (TSX: EQX NYSE-A: EQX), for the sole purpose of hosting the prior-approved content contained herein by which we have been paid to feature. Any wording found on this website / media webpage or disclaimer referencing to "I" or "we" or "our" or "IRPub" refers to IRP Holdings Corporation. This website/media webpage is a paid advertisement, not a recommendation nor an offer to buy or sell securities. Our business model is to be financially compensated to market and promote public companies. By reading our website / media webpage you agree to the terms of our disclaimer, which are subject to change at any time. We are not registered or licensed in any jurisdiction whatsoever to provide investing advice or anything of an advisory or consultancy nature and are therefore unqualified to give investment recommendations. Always do your own research and consult with a licensed investment professional before investing. This communication is never to be used as the basis for making investment decisions and is for entertainment purposes only. At most, this communication should serve only as a starting point to do your own research and consult with a licensed professional regarding the companies profiled and discussed. Conduct your own research. Companies with low price per share are speculative and carry a high degree of risk, so only invest what you can afford to lose. By using our service you agree not to hold our site, its editor's, owners, or staff liable for any damages, financial or otherwise, that may occur due to any action you may take based on the information contained within our website / media webpage.
            </p>
            <p className="mb-4">
              Year to date, IRP Holdings Corporation dba IRPub has received Two Hundred Eighty-Five Thousand Dollars paid by Equinox Gold Corp. ( TSX: EQX NYSE-A: EQX ) for brand awareness, marketing distribution and investor education marketing for a period of 12 Months.
            </p>
            <p>
              IR Pub has not received any shares nor owns any shares of Equinox Gold Corp. ( TSX: EQX NYSE-A: EQX ) For a full disclaimer | disclosure please click here: <a href="http://irpub.com/Disclaimer" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">http://irpub.com/Disclaimer</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};