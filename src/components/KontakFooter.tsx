import { MapPin, Phone, Mail, Clock, CreditCard, ShieldCheck, BookOpen, Heart, ExternalLink } from 'lucide-react';
import { PESANTREN_PROFILE } from '../data/pesantrenData';

interface KontakFooterProps {
  onNavClick: (sectionId: string) => void;
  onOpenRegister: () => void;
}

export default function KontakFooter({ onNavClick, onOpenRegister }: KontakFooterProps) {
  return (
    <footer id="kontak" className="bg-blue-950 text-slate-200 relative pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight: Bank Account & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-blue-800/80">
          {/* Card 1: Lokasi & Alamat */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-800 text-amber-300 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-2">
              Lokasi Kampus Pesantren
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {PESANTREN_PROFILE.alamat}
            </p>
            <a
              href="https://maps.google.com/?q=Pondok+Pesantren+Raudhatul+Muhibbin+Bogor"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200"
            >
              <span>Buka Petunjuk Arah Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Narahubung & Sekretariat */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-800 text-amber-300 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-2">
              Layanan Sekretariat & PSB
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Hotline: {PESANTREN_PROFILE.telepon}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>WhatsApp PSB: {PESANTREN_PROFILE.whatsappPSB}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{PESANTREN_PROFILE.email}</span>
              </p>
              <p className="flex items-center gap-2 text-blue-300 mt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Senin - Sabtu (08.00 - 16.00 WIB)</span>
              </p>
            </div>
          </div>

          {/* Card 3: Rekening Resmi Pesantren */}
          <div className="bg-blue-900/40 border border-blue-800/60 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-800 text-amber-300 flex items-center justify-center mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-base mb-2">
              Rekening Resmi BSI
            </h4>
            <p className="text-xs text-slate-300 mb-2">
              Khusus Pembayaran Biaya Pendaftaran PSB & Infaq/Wakaf Pembangunan:
            </p>
            <div className="bg-blue-950/80 p-3 rounded-xl border border-blue-800 font-mono text-xs text-amber-300">
              <p className="font-bold text-sm text-white">Bank Syariah Indonesia (BSI)</p>
              <p className="tracking-wider mt-0.5">718-992-0145</p>
              <p className="text-[10px] text-slate-400">a.n. Yayasan Raudhatul Muhibbin</p>
            </div>
          </div>
        </div>

        {/* Middle Footer: About & Quick Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          {/* Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-800 text-amber-300 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {PESANTREN_PROFILE.nama}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {PESANTREN_PROFILE.tagline}
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed pr-4">
              Pondok Pesantren Raudhatul Muhibbin bertekad membimbing generasi penerus bangsa agar berakhlak mulia, mutqin dalam menghafal Al-Qur&apos;an, mahir membaca kitab turats, serta fasih dalam bahasa Arab dan Inggris.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>NSP Kemenag: 510032010892 • Akreditasi A (Unggul)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-sm font-bold text-white mb-3">Tautan Cepat</h4>
            <ul className="space-y-2">
              {['beranda', 'profil', 'guru', 'fasilitas', 'galeri', 'pendaftaran'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavClick(sec)}
                    className="text-slate-300 hover:text-amber-300 capitalize transition-colors"
                  >
                    {sec === 'guru' ? 'Dewan Asatidz' : sec === 'pendaftaran' ? 'Pendaftaran PSB Daring' : sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white mb-3">Program Pendidikan</h4>
            <div className="space-y-2 text-slate-300">
              <p>• Madrasah Tsanawiyah (MTs) & Pesantren Terpadu</p>
              <p>• Madrasah Aliyah (MA) IPA & Keagamaan</p>
              <p>• Takhassus Tahfidzul Qur&apos;an 30 Juz Bersanad</p>
              <p>• Kulliyyatul Mu&apos;allimin Al-Islamiyyah (KMI / Salafiyah)</p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenRegister}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold rounded-lg transition-colors"
              >
                Daftar Santri Baru Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-blue-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Pondok Pesantren Raudhatul Muhibbin. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Dikelola dengan penuh khidmah &</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>untuk Ummat</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
