import { useState } from 'react';
import { CalendarDays, Clock, CheckCircle, XCircle } from 'lucide-react';
import CTASection from '../components/CTASection';

const historyData = [
  {
    id: 1,
    service: 'Service CCTV',
    technician: 'Ishhalul Chozani',
    date: '15/02/2026',
    time: '10.00 WIB',
    duration: '45 Menit',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1589935447067-5531094415d1?w=200&q=80&fit=crop',
    amount: 'Rp 80.000',
  },
  {
    id: 2,
    service: 'Instalasi Kelistrikan',
    technician: 'Reyhan Fadhilah',
    date: '10/02/2026',
    time: '09.00 WIB',
    duration: '60 Menit',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=200&q=80&fit=crop',
    amount: 'Rp 150.000',
  },
  {
    id: 3,
    service: 'Service Air Conditioner',
    technician: 'Farhan Pratama',
    date: '05/01/2026',
    time: '14.00 WIB',
    duration: '30 Menit',
    status: 'cancelled',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&q=80&fit=crop',
    amount: 'Rp 80.000',
  },
  {
    id: 4,
    service: 'Pemasangan Smart Home',
    technician: 'Ahmad Maulana',
    date: '20/12/2025',
    time: '11.00 WIB',
    duration: '120 Menit',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=200&q=80&fit=crop',
    amount: 'Rp 500.000',
  },
];

const HistoryPage = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  const filteredHistory = historyData.filter(item => {
    if (activeTab === 'Selesai') return item.status === 'completed';
    if (activeTab === 'Dibatalkan') return item.status === 'cancelled';
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#1D4F4F] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-outfit mb-2">Riwayat Layanan</h1>
          <p className="text-white/70 text-sm">Daftar layanan yang telah Anda gunakan</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {['Semua', 'Selesai', 'Dibatalkan'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-[#17C3C9] text-[#17C3C9]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                data-testid={`history-tab-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* History List */}
      <section className="py-10" data-testid="history-list">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
                data-testid={`history-card-${item.id}`}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.service} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{item.service}</h3>
                    <span
                      className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
                        item.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-600'
                      }`}
                      data-testid={`history-status-${item.id}`}
                    >
                      {item.status === 'completed' ? (
                        <><CheckCircle size={12} /> Selesai</>
                      ) : (
                        <><XCircle size={12} /> Dibatalkan</>
                      )}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{item.technician}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-[#17C3C9]" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#17C3C9]" />
                      <span>{item.time} ({item.duration})</span>
                    </div>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-gray-900 text-lg">{item.amount}</p>
                  {item.status === 'completed' && (
                    <button
                      className="text-[#17C3C9] hover:text-[#34C7C7] text-sm font-semibold mt-1 transition-colors"
                      data-testid={`reorder-btn-${item.id}`}
                    >
                      Pesan Lagi
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default HistoryPage;
