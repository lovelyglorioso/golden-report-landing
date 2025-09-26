export const CEOQuote = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl text-gold mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              Commissioning of the Valentine process plant is progressing extremely well, 
              with mill throughput averaging 47% of nameplate for the first 15 days of operation, 
              resulting in first gold being poured earlier than expected.
            </blockquote>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-2xl font-bold text-gold-foreground">
              DH
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Darren Hall</div>
              <div className="text-white/80">Chief Executive Officer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};