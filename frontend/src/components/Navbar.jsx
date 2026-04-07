import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wrench, CalendarDays, Clock, MessageCircle, Bot, Menu, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/services', label: 'Services', icon: Wrench },
  { to: '/schedule', label: 'Schedule', icon: CalendarDays },
  { to: '/history', label: 'History', icon: Clock },
  { to: '/contact', label: 'Contact', icon: MessageCircle },
  { to: '/teca', label: 'Teca', icon: Bot, highlight: true },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1D4F4F] text-white sticky top-0 z-50 shadow-lg" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" data-testid="navbar-logo">
            <div className="w-8 h-8 border-2 border-[#17C3C9] rounded-full flex items-center justify-center">
              <span className="text-[#17C3C9] font-bold text-xs">T</span>
            </div>
            <span className="font-bold text-base tracking-widest font-outfit">TECHOS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon, highlight }) => {
              const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  data-testid={`nav-link-${label.toLowerCase()}`}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    highlight && !isActive
                      ? 'bg-[#17C3C9] text-white hover:bg-[#34C7C7]'
                      : isActive
                      ? 'text-[#17C3C9] font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* 24 Hour Services */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium">24 Hour Services</span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="navbar-mobile-toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#143838] border-t border-white/10 px-4 pb-4" data-testid="navbar-mobile-menu">
          {navItems.map(({ to, label, icon: Icon, highlight }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 py-3 text-sm font-medium border-b border-white/10 last:border-0 ${
                  isActive ? 'text-[#17C3C9]' : 'text-white/80'
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
          <div className="flex items-center gap-2 pt-3">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-xs">24 Hour Services</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
