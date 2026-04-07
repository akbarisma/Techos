import { Phone, Check } from 'lucide-react';

const CTASection = () => (
  <section className="bg-[#1D4F4F] text-white relative overflow-hidden" data-testid="cta-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 font-outfit">
            Butuh perbaikan atau beralih ke smart home? kami siap melayani
          </h2>
          <div className="flex gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-white/90">
              <Check size={16} className="text-[#17C3C9]" />
              Free Quotes
            </div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <Check size={16} className="text-[#17C3C9]" />
              100% Commitment-Free
            </div>
          </div>
          <button
            className="flex items-center gap-3 bg-[#17C3C9] hover:bg-[#34C7C7] text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#17C3C9]/30 hover:scale-105"
            data-testid="cta-call-now-btn"
          >
            Call Us Now
            <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
              <Phone size={14} />
            </div>
          </button>
        </div>
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&fit=crop"
            alt="Smart Home Technician"
            className="w-full h-80 object-cover rounded-3xl opacity-80"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
