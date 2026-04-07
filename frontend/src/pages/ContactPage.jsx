import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import CTASection from '../components/CTASection';

const ContactPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#1D4F4F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-outfit mb-3">Contact Us</h1>
          <p className="text-white/70 text-base">Kami siap membantu Anda 24 jam sehari, 7 hari seminggu</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-outfit">Hubungi Kami</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, title: 'Alamat', desc: 'Karisidenan Pati, Jawa Tengah, Indonesia' },
                  { icon: Phone, title: 'Telepon', desc: '0800-TECHOS (83-2467)' },
                  { icon: Mail, title: 'Email', desc: 'hello@techos.id' },
                  { icon: Clock, title: 'Jam Operasional', desc: '24 Jam / 7 Hari Seminggu' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#17C3C9]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#17C3C9]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-0.5">{title}</h4>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100" data-testid="contact-form">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-outfit">Kirim Pesan</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama Anda" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#17C3C9] transition-colors" data-testid="contact-name-input" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#17C3C9] transition-colors" data-testid="contact-email-input" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">Pesan</label>
                  <textarea placeholder="Ceritakan masalah Anda..." rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#17C3C9] transition-colors resize-none" data-testid="contact-message-input"></textarea>
                </div>
                <button
                  className="w-full bg-[#17C3C9] hover:bg-[#34C7C7] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                  data-testid="contact-submit-btn"
                >
                  <Send size={16} />
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ContactPage;
