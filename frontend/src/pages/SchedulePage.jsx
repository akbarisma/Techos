import { useState } from 'react';
import { CalendarDays, Clock, RotateCcw, X } from 'lucide-react';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

const scheduleData = [
  {
    id: 1,
    service: 'Service CCTV',
    technician: 'Ishhalul Chozani',
    date: '21/03/2026',
    time: '10.00 WIB',
    duration: '30 Menit',
    image: 'https://images.unsplash.com/photo-1589935447067-5531094415d1?w=200&q=80&fit=crop',
  },
  {
    id: 2,
    service: 'Service Air Conditioner',
    technician: 'Saltnic Najwa Thoriq',
    date: '21/03/2026',
    time: '13.00 WIB',
    duration: '30 Menit',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&q=80&fit=crop',
  },
  {
    id: 3,
    service: 'Perawatan Air Conditioner',
    technician: 'Saltnic Najwa Thoriq',
    date: '21/04/2026',
    time: '13.00 WIB',
    duration: '30 Menit',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&q=80&fit=crop',
  },
];

const SchedulePage = () => {
  const [items, setItems] = useState(scheduleData);
  const [rescheduleId, setRescheduleId] = useState(null);
  const [cancelId, setCancelId] = useState(null);

  const handleCancel = (id) => {
    setItems((prev) => prev.filter((s) => s.id !== id));
    setCancelId(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#1D4F4F] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-outfit mb-2">Jadwal Saya</h1>
          <p className="text-white/70 text-sm">Kelola jadwal layanan Anda</p>
        </div>
      </div>

      {/* Schedule List */}
      <section className="py-10" data-testid="schedule-list">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <CalendarDays size={48} className="mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium">Belum ada jadwal</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center"
                  data-testid={`schedule-card-${item.id}`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.service} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.service}</h3>
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

                  <div className="flex items-center gap-3 sm:flex-col sm:gap-2 lg:flex-row lg:gap-3">
                    <button
                      onClick={() => setRescheduleId(item.id)}
                      className="border-2 border-[#17C3C9] text-[#17C3C9] hover:bg-[#17C3C9] hover:text-white font-semibold px-5 py-2 rounded-full text-sm transition-all"
                      data-testid={`reschedule-btn-${item.id}`}
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => setCancelId(item.id)}
                      className="text-gray-500 hover:text-red-500 font-semibold text-sm px-3 py-2 transition-colors"
                      data-testid={`cancel-btn-${item.id}`}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cancel Confirm Dialog */}
      {cancelId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4" data-testid="cancel-dialog">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <X size={20} className="text-red-500" />
              </div>
              <h3 className="font-bold text-gray-900">Batalkan Jadwal?</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">Apakah Anda yakin ingin membatalkan jadwal layanan ini?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setCancelId(null)}
                className="flex-1 border border-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                data-testid="cancel-dialog-no-btn"
              >
                Tidak
              </button>
              <button
                onClick={() => handleCancel(cancelId)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-xl transition-colors"
                data-testid="cancel-dialog-yes-btn"
              >
                Ya, Batalkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reschedule Dialog */}
      {rescheduleId && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4" data-testid="reschedule-dialog">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#17C3C9]/10 rounded-full flex items-center justify-center">
                <RotateCcw size={20} className="text-[#17C3C9]" />
              </div>
              <h3 className="font-bold text-gray-900">Jadwal Ulang</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">Fitur penjadwalan ulang akan segera hadir. Silakan hubungi kami untuk penjadwalan ulang.</p>
            <button
              onClick={() => setRescheduleId(null)}
              className="w-full bg-[#17C3C9] hover:bg-[#34C7C7] text-white font-semibold py-2.5 rounded-xl transition-colors"
              data-testid="reschedule-dialog-close-btn"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}

      <HowItWorks />
      <CTASection />
    </div>
  );
};

export default SchedulePage;
