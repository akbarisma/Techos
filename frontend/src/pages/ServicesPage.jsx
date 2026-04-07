import { Link } from 'react-router-dom';
import { Zap, Camera, Wifi, AirVent, Thermometer, Tv, Lightbulb, Droplets, ArrowRight } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

const allServices = [
  {
    id: 'ac',
    name: 'Air Conditioner',
    desc: 'Tambah Freon, Cuci Inverter, Service, Perawatan, dan Instalasi',
    icon: AirVent,
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80&fit=crop',
    price: 'Mulai Rp 80.000',
  },
  {
    id: 'kulkas',
    name: 'Kulkas',
    desc: 'Ganti Freo, Tambah Isi Freon, Perawatan rutin.',
    icon: Thermometer,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&q=80&fit=crop',
    price: 'Mulai Rp 70.000',
  },
  {
    id: 'cctv',
    name: 'CCTV',
    desc: 'Instalasi dan Pengecekan',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1589935447067-5531094415d1?w=500&q=80&fit=crop',
    price: 'Mulai Rp 80.000',
  },
  {
    id: 'water-heater',
    name: 'Water Heater',
    desc: 'Service, Instalasi dan Perawatan',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
    price: 'Mulai Rp 90.000',
  },
  {
    id: 'listrik',
    name: 'Instalasi Kelistrikan',
    desc: 'Pemasangan MCB, Ganti Sekring, Instalasi Kabel dan lainnya.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=500&q=80&fit=crop',
    price: 'Mulai Rp 50.000',
  },
  {
    id: 'lampu',
    name: 'Lampu',
    desc: 'Tambah titik lampu, ganti downlight/lampu',
    icon: Lightbulb,
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=500&q=80&fit=crop',
    price: 'Mulai Rp 30.000',
  },
  {
    id: 'tv',
    name: 'Television',
    desc: 'Pemasangan bracket tv, Pemasangan tv diatas meja',
    icon: Tv,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=500&q=80&fit=crop',
    price: 'Mulai Rp 60.000',
  },
  {
    id: 'mesin-cuci',
    name: 'Service Mesin Cuci',
    desc: 'Service, Perawatan, Instalasi',
    icon: Thermometer,
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=500&q=80&fit=crop',
    price: 'Mulai Rp 75.000',
  },
  {
    id: 'smart-home',
    name: 'Smart Home',
    desc: 'Instalasi dan Konfigurasi perangkat smart home',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&q=80&fit=crop',
    price: 'Mulai Rp 200.000',
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#1D4F4F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold font-outfit mb-3">Our Services</h1>
          <p className="text-white/70 text-base max-w-xl">
            Anda memiliki masalah dengan peralatan elektronik rumah tangga, atau butuh instalasi smart home, kami siap membantu!
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((svc) => (
              <Link
                key={svc.id}
                to={`/services/${svc.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                data-testid={`service-page-card-${svc.id}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-[#17C3C9] text-white text-xs font-bold px-3 py-1 rounded-full">{svc.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#17C3C9]/10 rounded-xl flex items-center justify-center">
                      <svc.icon size={20} className="text-[#17C3C9]" />
                    </div>
                    <h3 className="font-bold text-gray-900">{svc.name}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <div className="flex items-center gap-2 text-[#17C3C9] font-semibold text-sm group-hover:gap-3 transition-all">
                    Buat Pesanan <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default ServicesPage;
