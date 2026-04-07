import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Clock, MapPin, Calendar, Check, Phone, Search,
  ChevronLeft, ChevronRight, Award, MessageCircle, Users,
  Send, Zap, Tv, AirVent, Thermometer, Wifi, Lightbulb, Camera
} from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

const services = [
  { id: 'ac', name: 'Service Air Conditioner', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80&fit=crop', icon: AirVent },
  { id: 'cctv', name: 'CCTV', image: 'https://images.unsplash.com/photo-1589935447067-5531094415d1?w=500&q=80&fit=crop', icon: Camera },
  { id: 'smart-home', name: 'Smart Home', image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&q=80&fit=crop', icon: Wifi },
  { id: 'listrik', name: 'Instalasi Kelistrikan', image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=500&q=80&fit=crop', icon: Zap },
  { id: 'mesin-cuci', name: 'Service Mesin Cuci', image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=500&q=80&fit=crop', icon: Thermometer },
  { id: 'kulkas', name: 'Kulkas', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&q=80&fit=crop', icon: Thermometer },
  { id: 'water-heater', name: 'Water Heater', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop', icon: Thermometer },
  { id: 'tv', name: 'Television', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=500&q=80&fit=crop', icon: Tv },
];

const technicians = [
  { name: 'Amad Amar', specialty: 'Teknisi CCTV', image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=300&q=80&fit=crop&crop=faces' },
  { name: 'Reyhan', specialty: 'Teknisi Listrik', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80&fit=crop&crop=faces' },
  { name: 'Farhan', specialty: 'Teknisi AC', image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&q=80&fit=crop&crop=faces' },
];

const benefits = [
  {
    icon: Award,
    title: 'Jaminan Kepuasan',
    desc: 'Anda tidak perlu khawatir tentang penipuan atau hasil kinerja kami. Perusahaan kami telah diverifikasi dan berupaya mencapai hasil yang optimal.',
  },
  {
    icon: Clock,
    title: 'Layanan Cepat 24 Jam',
    desc: 'Butuh penanganan cepat untuk perbaikan kulkas, CCTV, atau masalah lainnya? Para ahli kami siap membantu Anda menyelesaikan masalah kapan saja.',
  },
  {
    icon: MessageCircle,
    title: 'Bebas Komitmen 100%',
    desc: 'Anda bebas bertanya kepada kami tentang masalah yang Anda hadapi. Kami menawarkan pendekatan tanpa kewajiban untuk menenangkan pikiran Anda.',
  },
  {
    icon: MapPin,
    title: 'Profesional Lokal',
    desc: 'Layanan kami mencakup seluruh wilayah Karisidenan Pati, termasuk lokasi perkotaan, pinggiran kota, dan pedesaan untuk perawatan jangka panjang maupun jangka pendek.',
  },
  {
    icon: Calendar,
    title: 'Penjadwalan yang Fleksibel',
    desc: 'Kami menawarkan waktu janji temu yang nyaman yang dapat menyesuaikan dengan jadwal sibuk Anda, siang atau malam, 7 hari seminggu.',
  },
];

const suggestions = [
  'Berikan saya rekomendasi teknisi terdekat',
  'Bagaimana cara memesan teknisi terbaik?',
  'Saya mengalami kerusakan pada CCTV berikan rekomendasi teknisi',
];

const HomePage = () => {
  const [chatInput, setChatInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const carouselRef = useRef(null);

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* ===== HERO ===== */}
      <section className="bg-[#1D4F4F] text-white relative overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
            {/* Text */}
            <div className="flex flex-col justify-center py-16 lg:py-20 pr-0 lg:pr-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#17C3C9] text-sm font-medium">Perawatan</span>
                <span className="text-white/40">·</span>
                <span className="text-[#17C3C9] text-sm font-medium">Service</span>
                <span className="text-white/40">·</span>
                <span className="text-[#17C3C9] text-sm font-medium">Instalasi</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6 font-outfit">
                Temukan teknisi terpercaya untuk perawatan, service, hingga instalasi
              </h1>
              <div className="flex gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-[#17C3C9]" />
                  <span className="text-sm text-white/90">Free Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-[#17C3C9]" />
                  <span className="text-sm text-white/90">100% Commitment-Free</span>
                </div>
              </div>
              <button
                className="self-start flex items-center gap-3 bg-[#17C3C9] hover:bg-[#34C7C7] text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg hover:scale-105"
                data-testid="hero-call-btn"
              >
                Call Us Now
                <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone size={14} />
                </div>
              </button>
            </div>

            {/* Images */}
            <div className="hidden lg:grid grid-cols-2 gap-3 py-6 pl-4">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80&fit=crop"
                alt="Teknisi 1"
                className="w-full h-full object-cover rounded-tl-3xl rounded-bl-xl opacity-90"
              />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop"
                alt="Teknisi 2"
                className="w-full h-full object-cover rounded-tr-3xl rounded-br-xl opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-white text-gray-800 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: 'Garansi 100%' },
                { icon: Clock, label: 'Tersedia 24 Jam' },
                { icon: Users, label: 'Local Teknisi Profesional' },
                { icon: Calendar, label: 'Penjadwalan Fleksibel' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-9 h-9 rounded-full bg-[#17C3C9]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#17C3C9]" />
                  </div>
                  <span className="font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECA CHATBOT ===== */}
      <section className="bg-[#1D4F4F] py-10" data-testid="chatbot-section">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">+</span>
                </div>
              </div>
              <p className="text-white font-semibold text-lg">Ask Teca anything u want</p>
            </div>

            {/* Suggestions */}
            <div className="mb-5">
              <p className="text-white/70 text-xs mb-3">Suggestions on what to ask Our AI</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setChatInput(s)}
                    className="bg-white/15 hover:bg-white/25 text-white text-xs px-3 py-2 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
                    data-testid={`suggestion-chip-${i}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex gap-3">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask me anything about your problem"
                className="flex-1 bg-white/15 border border-white/30 text-white placeholder-white/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-white/60 backdrop-blur-sm"
                data-testid="teca-chat-input"
              />
              <Link to="/teca">
                <button
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
                  data-testid="teca-send-btn"
                >
                  <Send size={18} className="text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE SEARCH + CAROUSEL ===== */}
      <section className="bg-white py-16" data-testid="service-search-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-outfit">
              Temukan teknisi yang kamu butuhkan!
            </h2>
            <Link to="/services">
              <button
                className="bg-[#17C3C9] hover:bg-[#34C7C7] text-white font-semibold px-10 py-3 rounded-full transition-all hover:shadow-lg"
                data-testid="service-search-btn"
              >
                <span className="flex items-center gap-2">
                  <Search size={16} />
                  Search
                </span>
              </button>
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative">
            <button
              onClick={() => scrollCarousel(-1)}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#17C3C9] hover:bg-[#34C7C7] rounded-full flex items-center justify-center shadow-lg transition-colors"
              data-testid="carousel-prev-btn"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto carousel-scroll pb-2"
            >
              {services.map((svc) => (
                <Link
                  key={svc.id}
                  to={`/services/${svc.id}`}
                  className="flex-shrink-0 w-56 service-card relative overflow-hidden rounded-2xl cursor-pointer shadow-md group"
                  data-testid={`service-card-${svc.id}`}
                >
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
                    <p className="text-white font-bold text-sm mb-3">{svc.name}</p>
                    <button className="bg-[#17C3C9] text-white text-xs font-semibold py-1.5 px-3 rounded-full w-full transition-colors hover:bg-[#34C7C7]">
                      Buat Pesanan
                    </button>
                  </div>
                </Link>
              ))}
            </div>
            <button
              onClick={() => scrollCarousel(1)}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#17C3C9] hover:bg-[#34C7C7] rounded-full flex items-center justify-center shadow-lg transition-colors"
              data-testid="carousel-next-btn"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Di Techos, setiap hari Anda dapat menemukan diskon tertinggi di semua kategori layanan yang tersedia di situs web.
          </p>
        </div>
      </section>

      {/* ===== NEAREST TECHNICIANS ===== */}
      <section className="bg-[#17C3C9] py-16" data-testid="technicians-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1D4F4F] mb-10 font-outfit">
            Teknisi terdekat di sekitar anda
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {technicians.map((tech, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col items-center p-6 text-center hover:-translate-y-1 transition-transform duration-300"
                data-testid={`technician-card-${i}`}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-4 border-[#17C3C9]/20">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#17C3C9] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {tech.name}
                </div>
                <p className="text-gray-700 font-semibold text-sm mb-4">{tech.specialty}</p>
                <button
                  className="bg-[#1D4F4F] hover:bg-[#143838] text-white text-sm font-semibold px-6 py-2 rounded-full transition-colors w-full"
                  data-testid={`panggilan-btn-${i}`}
                >
                  Panggilan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="bg-[#1D4F4F] text-white py-20 relative" data-testid="benefits-section">
        {/* Wave top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-outfit">
                Cepat, Ramah, dan<br />Kepuasan Tejamin
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Tidak peduli seberapa kecil permasalahan yang anda miliki, layanan kami akan memberikan pelayanan terbaik. Kami siap melayani dan membantu anda menyelesaikan masalah.
              </p>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-4">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="flex gap-4" data-testid={`benefit-${i}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-[#17C3C9]" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </section>

      {/* ===== OUR SERVICES GRID ===== */}
      <section className="bg-gray-50 py-20" data-testid="our-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="text-[#17C3C9] font-semibold text-sm">Welcome to Techos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3 font-outfit">
            Teknisi Profesional untuk<br />Peralatan Elektronik Rumah Tangga
          </h2>
          <p className="text-gray-500 text-center text-sm mb-12 max-w-2xl mx-auto">
            Anda memiliki masalah dengan peralatan elektronik rumah tangga, atau butuh instalasi smart home, kami siap membantu!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.slice(0, 7).map((svc) => (
              <Link
                key={svc.id}
                to={`/services/${svc.id}`}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group"
                data-testid={`service-grid-card-${svc.id}`}
              >
                <div className="w-12 h-12 bg-[#17C3C9]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#17C3C9]/20 transition-colors">
                  <svc.icon size={22} className="text-[#17C3C9]" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{svc.name}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {svc.id === 'ac' && 'Tambah Freon, Cuci Inverter, Service, Perawatan, dan Instalasi'}
                  {svc.id === 'cctv' && 'Instalasi dan Pengecekan'}
                  {svc.id === 'kulkas' && 'Ganti Freo, Tambah Isi Freon, Perawatan rutin'}
                  {svc.id === 'water-heater' && 'Service, Instalasi dan Perawatan'}
                  {svc.id === 'listrik' && 'Pemasangan MCB, Ganti Sekring, Instalasi Kabel dan lainnya'}
                  {svc.id === 'lampu' && 'Tambah titik lampu, ganti downlight/lampu'}
                  {svc.id === 'tv' && 'Pemasangan bracket tv, Pemasangan tv diatas meja'}
                  {svc.id === 'mesin-cuci' && 'Service, Perawatan, Instalasi'}
                  {svc.id === 'smart-home' && 'Instalasi dan Konfigurasi Smart Home'}
                </p>
              </Link>
            ))}
            {/* More service card */}
            <div className="bg-[#17C3C9] rounded-2xl p-5 flex flex-col items-center justify-center text-center">
              <p className="text-white font-semibold text-sm mb-3">More service?</p>
              <p className="text-white/80 text-xs mb-4">Anda dapat langsung menghubungi kami, kami akan memberikan solusi terbaik</p>
              <button className="bg-white text-[#17C3C9] font-bold text-xs px-4 py-2 rounded-full hover:bg-white/90 transition-colors" data-testid="more-service-btn">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <HowItWorks />

      {/* ===== CTA ===== */}
      <CTASection />
    </div>
  );
};

export default HomePage;
