import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Car, Bike, Minus, Plus, Check } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

const serviceData = {
  cctv: {
    title: 'Jasa Service CCTV',
    image: 'https://images.unsplash.com/photo-1589935447067-5531094415d1?w=600&q=80&fit=crop',
    problems: [
      { id: 'visit', label: 'Kunjungan dan Pengecekan', price: 80000 },
      { id: 'install', label: 'Pasang CCTV', price: 200000 },
      { id: 'smart', label: 'Beli Smart CCTV dan Pasang', price: 400000 },
      { id: 'maintenance', label: 'Perawatan CCTV', price: 70000 },
      { id: 'other', label: 'Lainnya', price: 20000 },
    ],
  },
  ac: {
    title: 'Jasa Service Air Conditioner',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&fit=crop',
    problems: [
      { id: 'cuci', label: 'Cuci AC', price: 80000 },
      { id: 'freon', label: 'Tambah Freon', price: 150000 },
      { id: 'install', label: 'Instalasi AC Baru', price: 350000 },
      { id: 'maintenance', label: 'Perawatan Rutin', price: 100000 },
      { id: 'other', label: 'Lainnya', price: 50000 },
    ],
  },
  kulkas: {
    title: 'Jasa Service Kulkas',
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80&fit=crop',
    problems: [
      { id: 'freon', label: 'Tambah Freon', price: 100000 },
      { id: 'maintenance', label: 'Perawatan Rutin', price: 70000 },
      { id: 'repair', label: 'Perbaikan Kerusakan', price: 150000 },
      { id: 'other', label: 'Lainnya', price: 30000 },
    ],
  },
  listrik: {
    title: 'Jasa Instalasi Kelistrikan',
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=600&q=80&fit=crop',
    problems: [
      { id: 'mcb', label: 'Pemasangan MCB', price: 100000 },
      { id: 'kabel', label: 'Instalasi Kabel', price: 80000 },
      { id: 'stop', label: 'Pasang Stop Kontak', price: 50000 },
      { id: 'other', label: 'Lainnya', price: 30000 },
    ],
  },
  'smart-home': {
    title: 'Jasa Smart Home',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80&fit=crop',
    problems: [
      { id: 'install', label: 'Instalasi Smart Home', price: 300000 },
      { id: 'config', label: 'Konfigurasi Perangkat', price: 150000 },
      { id: 'maintenance', label: 'Perawatan Sistem', price: 200000 },
      { id: 'other', label: 'Konsultasi', price: 50000 },
    ],
  },
};

const defaultService = {
  title: 'Jasa Layanan Techos',
  image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&fit=crop',
  problems: [
    { id: 'visit', label: 'Kunjungan dan Pengecekan', price: 80000 },
    { id: 'repair', label: 'Perbaikan', price: 150000 },
    { id: 'install', label: 'Instalasi', price: 250000 },
    { id: 'other', label: 'Lainnya', price: 30000 },
  ],
};

const propertyTypes = ['Lainnya', 'Rumah', 'Apartemen'];
const vehicleTypes = [
  { id: 'car', label: 'Mobil', icon: Car },
  { id: 'motor', label: 'Motor', icon: Bike },
  { id: 'scooter', label: 'Skooter', icon: Bike },
];

const DAYS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const formatRupiah = (num) => `Rp ${num.toLocaleString('id-ID')}`;

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const svc = serviceData[serviceId] || defaultService;

  const [quantities, setQuantities] = useState({});
  const [propertyType, setPropertyType] = useState('Lainnya');
  const [vehicle, setVehicle] = useState('motor');
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState({ hour: '08', min: '00' });
  const [calMonth, setCalMonth] = useState(new Date());

  const updateQty = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const totalPrice = svc.problems.reduce((sum, p) => sum + (quantities[p.id] || 0) * p.price, 0);

  // Calendar helpers
  const year = calMonth.getFullYear();
  const month = calMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonth = () => setCalMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCalMonth(new Date(year, month + 1, 1));
  const today = new Date();
  const isToday = (d) => d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  const isSelected = (d) => selectedDate && selectedDate.getDate() === d && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
  const isPast = (d) => new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <div className="bg-white">
      {/* Benefits strip */}
      <section className="bg-[#1D4F4F] text-white py-16 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-outfit">Cepat, Ramah, dan<br />Kepuasan Tejamin</h2>
              <p className="text-white/70 text-sm">Tidak peduli seberapa kecil permasalahan yang anda miliki, layanan kami akan memberikan pelayanan terbaik. Kami siap melayani dan membantu anda menyelesaikan masalah.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Jaminan Kepuasan', desc: 'Anda tidak perlu khawatir tentang penipuan atau hasil kinerja kami.' },
                { title: 'Layanan Cepat 24 Jam', desc: 'Para ahli kami siap membantu Anda menyelesaikan masalah kapan saja.' },
                { title: 'Bebas Komitmen 100%', desc: 'Kami menawarkan pendekatan tanpa kewajiban untuk menenangkan pikiran Anda.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 bg-[#17C3C9]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-[#17C3C9]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">{item.title}</h5>
                    <p className="text-white/60 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </section>

      {/* Main Booking */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Title + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div className="rounded-2xl overflow-hidden h-64 shadow-md">
              <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-outfit">{svc.title}</h2>
              <div className="bg-[#1D4F4F] rounded-2xl p-5 text-white" data-testid="problem-selection">
                <h4 className="font-bold text-sm mb-4 text-[#17C3C9]">Problem Yang Anda alami?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {svc.problems.map((p) => (
                    <div key={p.id} className="bg-white/10 rounded-xl p-3" data-testid={`problem-${p.id}`}>
                      <p className="text-xs font-semibold mb-1">{p.label}</p>
                      <p className="text-[#17C3C9] font-bold text-sm mb-2">{formatRupiah(p.price)}</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(p.id, -1)}
                          className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                          data-testid={`qty-minus-${p.id}`}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-white font-bold text-sm w-6 text-center">{quantities[p.id] || 0}</span>
                        <button
                          onClick={() => updateQty(p.id, 1)}
                          className="w-6 h-6 bg-[#17C3C9] hover:bg-[#34C7C7] rounded-full flex items-center justify-center transition-colors"
                          data-testid={`qty-plus-${p.id}`}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="bg-[#1D4F4F] text-white rounded-2xl p-6 mb-6" data-testid="property-type-section">
            <h4 className="font-bold text-sm mb-4 text-[#17C3C9]">Jenis Properti</h4>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <div
                  key={type}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer transition-colors ${propertyType === type ? 'bg-[#17C3C9]/20 border border-[#17C3C9]' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                  onClick={() => setPropertyType(type)}
                  data-testid={`property-${type.toLowerCase()}`}
                >
                  <span className="text-sm font-medium">{type}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${propertyType === type ? 'border-[#17C3C9] bg-[#17C3C9]' : 'border-white/40'}`}>
                    {propertyType === type && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar + Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Calendar */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm" data-testid="calendar-section">
              <h4 className="font-bold text-gray-900 mb-4">Buat Penjadwalan</h4>
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-gray-800 text-sm">{MONTHS[month]} {year}</span>
                <div className="flex gap-2">
                  <button onClick={prevMonth} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" data-testid="cal-prev-btn">
                    <ChevronLeft size={14} />
                  </button>
                  <button onClick={nextMonth} className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" data-testid="cal-next-btn">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((d) => <div key={d} className="text-center text-xs font-semibold text-gray-500 py-1">{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }, (_, i) => <div key={`e-${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const d = i + 1;
                  const past = isPast(d);
                  return (
                    <button
                      key={d}
                      disabled={past}
                      onClick={() => setSelectedDate(new Date(year, month, d))}
                      className={`h-8 w-full text-xs rounded-lg transition-colors font-medium
                        ${past ? 'text-gray-300 cursor-not-allowed' : ''}
                        ${isSelected(d) ? 'bg-[#17C3C9] text-white' : ''}
                        ${isToday(d) && !isSelected(d) ? 'bg-[#1D4F4F] text-white' : ''}
                        ${!past && !isSelected(d) && !isToday(d) ? 'hover:bg-gray-100 text-gray-700' : ''}
                      `}
                      data-testid={`cal-day-${d}`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time + Vehicle */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm" data-testid="time-section">
                <h4 className="font-bold text-gray-900 mb-4">Sesuaikan waktu</h4>
                <div className="flex items-center gap-3 justify-center">
                  <input
                    type="number"
                    min="0"
                    max="23"
                    value={time.hour}
                    onChange={(e) => setTime({ ...time, hour: e.target.value.padStart(2, '0') })}
                    className="w-20 text-center text-3xl font-bold border-2 border-gray-200 rounded-xl py-3 outline-none focus:border-[#17C3C9]"
                    data-testid="time-hour-input"
                  />
                  <span className="text-3xl font-bold text-gray-400">:</span>
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={time.min}
                    onChange={(e) => setTime({ ...time, min: e.target.value.padStart(2, '0') })}
                    className="w-20 text-center text-3xl font-bold border-2 border-gray-200 rounded-xl py-3 outline-none focus:border-[#17C3C9]"
                    data-testid="time-min-input"
                  />
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm" data-testid="vehicle-section">
                <h4 className="font-bold text-gray-900 mb-4">Kendaraan Teknisi</h4>
                <div className="grid grid-cols-3 gap-3">
                  {vehicleTypes.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setVehicle(id)}
                      className={`flex flex-col items-center gap-2 py-4 rounded-xl border-2 transition-all ${vehicle === id ? 'border-[#17C3C9] bg-[#17C3C9]/10' : 'border-gray-200 hover:border-gray-300'}`}
                      data-testid={`vehicle-${id}`}
                    >
                      <Icon size={24} className={vehicle === id ? 'text-[#17C3C9]' : 'text-gray-500'} />
                      <span className={`text-xs font-semibold ${vehicle === id ? 'text-[#17C3C9]' : 'text-gray-600'}`}>{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Price + Order */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-testid="price-section">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Estimasi Harga</h4>
              <p className="text-2xl font-bold text-gray-900">{formatRupiah(totalPrice)}</p>
              <p className="text-gray-400 text-xs">Min. transaksi Rp 20.000</p>
            </div>
            <button
              className="bg-[#1D4F4F] hover:bg-[#143838] text-white font-bold px-10 py-3.5 rounded-xl transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
              data-testid="buat-pesanan-btn"
            >
              Buat Pesanan
            </button>
          </div>
        </div>
      </section>

      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default ServiceDetailPage;
