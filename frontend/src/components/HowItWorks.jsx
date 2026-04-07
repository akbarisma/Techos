const steps = [
  {
    num: '1.',
    title: 'Hubungi kami kapan saja 24/7',
    desc: 'Anda dapat menghubungi kami langsung, kami akan segera menghubungkan Anda dengan para teknisi profesional kami yang siap kapan saja.',
  },
  {
    num: '2.',
    title: 'Penjadwalan layanan',
    desc: 'Setelah panggilan Anda terhubung, pakar teknisi kami akan menjawab pertanyaan Anda dan memberikan waktu janji temu yang fleksibel.',
  },
  {
    num: '3.',
    title: 'Permintaan Anda telah selesai.',
    desc: 'Setelah teknisi kami tiba, ia akan mendiagnosis masalah dan memberikan perkiraan biaya. Jika Anda memutuskan untuk melanjutkan, teknisi akan segera mulai bekerja.',
  },
];

const HowItWorks = () => (
  <section className="bg-white py-20" data-testid="how-it-works-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Left */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80&fit=crop"
              alt="Teknisi Bekerja"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#17C3C9] rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Steps Right */}
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 font-outfit">
            Bagaimana<br />Techos<br />Bekerja?
          </h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6" data-testid={`how-it-works-step-${i + 1}`}>
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-800">{step.num}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
