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
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 Equinox Gold Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};