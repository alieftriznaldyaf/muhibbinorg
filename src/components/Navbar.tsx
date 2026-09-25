import { useState } from 'react';
import { Menu, X, BookOpen, UserCheck, Phone, ChevronRight, GraduationCap } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenCheckStatus: () => void;
  onOpenRegister: () => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  onOpenCheckStatus,
  onOpenRegister,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'profil', label: 'Profil Pondok' },
    { id: 'guru', label: 'Dewan Asatidz' },
    { id: 'fasilitas', label: 'Fasilitas' },
    { id: 'galeri', label: 'Galeri Santri' },
    { id: 'pendaftaran', label: 'PSB Daring' },
    { id: 'kontak', label: 'Kontak & Lokasi' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs">
      {/* Top Bar Announcement */}
      <div className="bg-blue-950 text-blue-50 text-xs py-2 px-4 sm:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400 text-blue-950 uppercase tracking-wider">
              PSB 2026/2027
            </span>
            <span className="truncate">
              Penerimaan Santri Baru Telah Dibuka Gelombang 1 • Beasiswa Tahfidz 30 Juz
            </span>
          </div>
          <div className="flex items-center gap-4 text-blue-200 text-[11px]">
            <a
              href="tel:02518542201"
              className="hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>(0251) 854-2201</span>
            </a>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-blue-300">
              NSP Kemenag: 510032010892
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl text-blue-950 tracking-tight leading-none">
                  Raudhatul Muhibbin
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-800 rounded">
                  Akreditasi A
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Pondok Pesantren Salaf-Modern & Tahfidzul Qur&apos;an
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                  activeSection === item.id
                    ? 'text-blue-900 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              id="btn-check-status-nav"
              onClick={onOpenCheckStatus}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-all"
            >
              <UserCheck className="w-4 h-4 text-blue-700" />
              <span>Cek Status</span>
            </button>

            <button
              id="btn-register-nav"
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-blue-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 shadow-sm shadow-amber-400/20 rounded-lg transition-all"
            >
              <GraduationCap className="w-4 h-4 text-blue-950" />
              <span>Daftar Santri Baru</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="btn-mobile-register-header"
              onClick={onOpenRegister}
              className="px-3 py-1.5 text-xs font-bold bg-amber-400 text-blue-950 rounded-lg"
            >
              Daftar
            </button>
            <button
              id="btn-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-800 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg text-left ${
                  activeSection === item.id
                    ? 'bg-blue-100/70 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              id="mobile-btn-status"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckStatus();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-blue-800 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <UserCheck className="w-4 h-4" />
              <span>Cek Status</span>
            </button>
            <button
              id="mobile-btn-register"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-blue-950 bg-amber-400 rounded-lg shadow-xs"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Daftar Sekarang</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
