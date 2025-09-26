
import { Hero } from "@/components/Hero";
import { DefiningMoment } from "@/components/DefiningMoment";
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
  return (
    <div className="min-h-screen">
      <Hero />
      <DefiningMoment />
      <KeyHighlights />
      <CEOQuote />
      <StrategicMoves />
      <Leadership />
      <WhatsNext />
      <WhyTiming />
      <EmailOptIn />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Index;
