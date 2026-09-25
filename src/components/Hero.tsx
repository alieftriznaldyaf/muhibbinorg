import { Award, BookOpen, Sparkles, ArrowRight, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PESANTREN_PROFILE } from '../data/pesantrenData';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenRoutine: () => void;
  onExploreProfile: () => void;
}

export default function Hero({
  onOpenRegister,
  onOpenRoutine,
  onExploreProfile,
}: HeroProps) {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60a5fa_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative Blue Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-sky-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Arabic Basmalah & Tagline */}
            <div className="space-y-1">
              <p className="font-arabic text-xl sm:text-2xl text-amber-300 font-bold tracking-wide">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/80 border border-blue-700/60 text-blue-200 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Pendidikan Islam Terpadu: Salafiyah • Modern • Tahfidz 30 Juz</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Mencetak Generasi{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-200 to-amber-400">
                  Ulama Amilin & Cendekiawan Qur&apos;ani
                </span>
              </h1>
              <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Selamat datang di <strong className="text-white font-semibold">{PESANTREN_PROFILE.nama}</strong>. Wadah pendidikan terpadu yang memadukan kedalaman tradisi kajian kitab kuning, mutqin Al-Qur&apos;an, bahasa internasional, dan sains modern.
              </p>
            </div>

            {/* Key Advantages Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-xs sm:text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sanad Tahfidz Al-Qur&apos;an Mutqin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Kajian Turats Kitab Kuning Bersanad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lingkungan 24 Jam Bahasa Arab & Inggris</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Ijazah Formal Kemenag Terakreditasi A</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                id="hero-btn-register"
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-blue-950 hover:from-amber-300 hover:to-amber-500 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transform active:scale-95 transition-all"
              >
                <span>Daftar Santri Baru (PSB)</span>
                <ArrowRight className="w-4 h-4 text-blue-950" />
              </button>

              <button
                id="hero-btn-profile"
                onClick={onExploreProfile}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-900/80 hover:bg-blue-800/80 text-white border border-blue-700/80 flex items-center justify-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Profil Lembaga</span>
              </button>

              <button
                id="hero-btn-routine"
                onClick={onOpenRoutine}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-blue-200 hover:text-white hover:bg-blue-900/50 flex items-center justify-center gap-1.5 transition-all"
              >
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Jadwal Harian Santri</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-800/60 bg-blue-900/40 p-2">
                <img
                  src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=900&q=80"
                  alt="Kompleks Masjid dan Pesantren Raudhatul Muhibbin"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
                
                {/* Floating Badge 1: Pengasuh & Status */}
                <div className="absolute top-6 left-6 bg-slate-900/85 backdrop-blur-md border border-white/20 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-amber-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-300 uppercase font-semibold tracking-wider">
                      Resmi Kemenag RI
                    </p>
                    <p className="text-xs font-bold text-white">Akreditasi Unggul (A)</p>
                  </div>
                </div>

                {/* Floating Badge 2: Tahfidz & Kitab */}
                <div className="absolute bottom-6 right-6 bg-blue-950/90 backdrop-blur-md border border-amber-400/40 text-white px-4 py-2.5 rounded-xl shadow-xl">
                  <p className="text-xs text-amber-300 font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Tahfidz 30 Juz Bersanad</span>
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Metode Talaqqi & Musyafahah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Stats */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-blue-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PESANTREN_PROFILE.statistik.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="bg-blue-900/30 border border-blue-800/50 rounded-xl p-4 text-center sm:text-left transition-colors hover:bg-blue-900/50"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">
                {stat.nilai}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-blue-300/80 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
