import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { KeyHighlights } from "@/components/KeyHighlights";
import { CEOQuote } from "@/components/CEOQuote";
import { StrategicMoves } from "@/components/StrategicMoves";
import { Leadership } from "@/components/Leadership";
import { WhatsNext } from "@/components/WhatsNext";
import { WhyTiming } from "@/components/WhyTiming";
import { EmailOptIn } from "@/components/EmailOptIn";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";

const Index = () => {
  const emailOptInRef = useRef<HTMLDivElement>(null);

  const scrollToEmailOptIn = () => {
    emailOptInRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      <Hero onDownloadClick={scrollToEmailOptIn} />
      <KeyHighlights />
      <CEOQuote />
      <StrategicMoves />
      <Leadership />
      <WhatsNext />
      <WhyTiming />
      <div ref={emailOptInRef}>
        <EmailOptIn />
      </div>
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Index;
