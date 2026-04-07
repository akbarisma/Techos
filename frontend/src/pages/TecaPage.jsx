import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const suggestions = [
  'Berikan saya rekomendasi teknisi terdekat',
  'Bagaimana cara memesan teknisi terbaik?',
  'Saya mengalami kerusakan pada CCTV berikan rekomendasi teknisi',
  'Apa layanan yang tersedia di Techos?',
  'Berapa biaya service AC?',
];

const botReplies = {
  default: 'Terima kasih atas pertanyaan Anda! Tim Teca kami akan segera membantu Anda menemukan teknisi terbaik. Silakan hubungi kami di 0800-123-4567 atau buat pesanan melalui halaman Services.',
  cctv: 'Untuk kerusakan CCTV, kami memiliki teknisi berpengalaman seperti Amad Amar yang siap membantu. Biaya kunjungan dan pengecekan mulai Rp 80.000. Apakah Anda ingin memesan sekarang?',
  teknisi: 'Berikut teknisi terdekat di sekitar Anda: 1) Amad Amar - Teknisi CCTV (rating 4.9) 2) Reyhan - Teknisi Listrik (rating 4.8) 3) Farhan - Teknisi AC (rating 4.7). Ketik nama teknisi untuk info lebih lanjut.',
  layanan: 'Techos menyediakan layanan: Service AC, CCTV, Instalasi Kelistrikan, Kulkas, Water Heater, Television, Smart Home, dan Service Mesin Cuci. Semua tersedia 24/7 dengan teknisi bersertifikasi!',
  ac: 'Biaya service AC di Techos mulai dari Rp 80.000 untuk cuci AC, Rp 150.000 untuk tambah freon, dan Rp 350.000 untuk instalasi AC baru. Semua dilengkapi garansi kepuasan!',
};

const getReply = (msg) => {
  const lower = msg.toLowerCase();
  if (lower.includes('cctv')) return botReplies.cctv;
  if (lower.includes('teknisi') || lower.includes('rekomendasi')) return botReplies.teknisi;
  if (lower.includes('layanan') || lower.includes('service')) return botReplies.layanan;
  if (lower.includes('ac') || lower.includes('air conditioner')) return botReplies.ac;
  return botReplies.default;
};

const TecaPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: 'bot', text: 'Halo! Saya Teca, asisten AI Techos. Saya siap membantu Anda menemukan teknisi terbaik untuk kebutuhan rumah Anda. Ada yang bisa saya bantu?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      const reply = getReply(text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, role: 'bot', text: reply }]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="bg-[#1D4F4F] min-h-screen flex flex-col">
      {/* Header */}
      <div className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-3">
            <div className="w-6 h-6 bg-[#17C3C9] rounded-full flex items-center justify-center">
              <Bot size={14} className="text-white" />
            </div>
            <span className="text-white text-sm font-semibold">Teca AI Assistant</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white font-outfit">Ask Teca anything u want</h1>
        </div>
      </div>

      {/* Suggestions */}
      <div className="px-4 pb-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/50 text-xs mb-3 text-center">Suggestions on what to ask Our AI</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => sendMessage(s)}
                className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-2 rounded-lg transition-colors border border-white/20 backdrop-blur-sm"
                data-testid={`teca-suggestion-${i}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 px-4 overflow-y-auto" data-testid="teca-chat-area">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-pink-400/80 via-purple-500/80 to-indigo-500/80 backdrop-blur-md rounded-3xl p-6 min-h-80 flex flex-col border border-white/20 shadow-2xl mb-4">
            <div className="flex-1 space-y-4 overflow-y-auto max-h-64 pr-1">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  data-testid={`message-${msg.role}-${msg.id}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot' ? 'bg-white/20' : 'bg-white/30'}`}>
                    {msg.role === 'bot' ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
                  </div>
                  <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'bot' ? 'bg-white/20 text-white' : 'bg-white/30 text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-3" data-testid="teca-typing">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white/20 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about your problem"
              className="flex-1 bg-white/15 border border-white/30 text-white placeholder-white/50 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-white/60 backdrop-blur-sm"
              data-testid="teca-main-input"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="w-12 h-12 bg-[#17C3C9] hover:bg-[#34C7C7] disabled:opacity-50 rounded-xl flex items-center justify-center transition-colors"
              data-testid="teca-main-send-btn"
            >
              <Send size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecaPage;
