import { Link } from 'react-router-dom';
import { Youtube, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1D4F4F] text-white" data-testid="footer">
      {/* Newsletter */}
      <div className="bg-[#17C3C9] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-base">Stay Connected with Our Newsletter</h4>
            <p className="text-white/80 text-sm mt-0.5">Subscribe to our newsletter to get more news, promo, or news services</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-1 sm:w-64 px-4 py-2.5 rounded-lg bg-white text-gray-800 text-sm placeholder-gray-400 outline-none"
              data-testid="newsletter-email-input"
            />
            <button
              className="px-5 py-2.5 bg-[#1D4F4F] hover:bg-[#143838] text-white font-semibold rounded-lg text-sm transition-colors"
              data-testid="newsletter-subscribe-btn"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 border-2 border-[#17C3C9] rounded-full flex items-center justify-center">
                  <span className="text-[#17C3C9] font-bold text-xs">T</span>
                </div>
                <span className="font-bold text-base tracking-widest">TECHOS</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Techos adalah tujuan utama Anda untuk perbaikan dan smart home service
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-white/60 hover:text-white transition-colors" data-testid="footer-youtube"><Youtube size={18} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" data-testid="footer-instagram"><Instagram size={18} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" data-testid="footer-facebook"><Facebook size={18} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" data-testid="footer-twitter"><Twitter size={18} /></a>
                <a href="#" className="text-white/60 hover:text-white transition-colors" data-testid="footer-email"><Mail size={18} /></a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-bold text-white mb-4">Company</h5>
              <ul className="space-y-2">
                {['About us', 'Services', 'Our Blog', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-bold text-white mb-4">Legal</h5>
              <ul className="space-y-2">
                {['Terms', 'Privacy', 'Cookies', 'License'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
