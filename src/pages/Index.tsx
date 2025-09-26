import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { KeyHighlights } from "@/components/KeyHighlights";
import { CEOQuote } from "@/components/CEOQuote";
import { EmailOptIn } from "@/components/EmailOptIn";
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
      <div ref={emailOptInRef}>
        <EmailOptIn />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
