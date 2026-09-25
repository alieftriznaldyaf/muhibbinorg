import { useState } from 'react';
import { BookOpen, Target, Heart, Award, ArrowRight, Clock, Quote, CheckCircle } from 'lucide-react';
import { PESANTREN_PROFILE } from '../data/pesantrenData';
import { JenjangType } from '../types';

interface ProfileSectionProps {
  onSelectJenjangToRegister: (jenjang: JenjangType) => void;
  onOpenRoutine: () => void;
}

export default function ProfileSection({
  onSelectJenjangToRegister,
  onOpenRoutine,
}: ProfileSectionProps) {
  const [activeTab, setActiveTab] = useState<'sambutan' | 'visimisi' | 'pancajiwa' | 'program'>('sambutan');

  return (
    <section id="profil" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold tracking-wide uppercase mb-3 border border-blue-100">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Profil Lembaga & Pendidikan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengenal Lebih Dekat Raudhatul Muhibbin
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Didirikan sejak tahun {PESANTREN_PROFILE.tahunBerdiri}, kami berkomitmen menyajikan iklim pendidikan yang asri, beradab, berdisiplin tinggi, dan mencintai ilmu pengetahuan.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              id="tab-sambutan"
              onClick={() => setActiveTab('sambutan')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'sambutan'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Quote className="w-4 h-4 text-blue-700" />
              <span>Sambutan Pengasuh</span>
            </button>
            <button
              id="tab-visimisi"
              onClick={() => setActiveTab('visimisi')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'visimisi'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-4 h-4 text-blue-700" />
              <span>Visi & Misi</span>
            </button>
            <button
              id="tab-pancajiwa"
              onClick={() => setActiveTab('pancajiwa')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'pancajiwa'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Heart className="w-4 h-4 text-blue-700" />
              <span>Panca Jiwa Pesantren</span>
            </button>
            <button
              id="tab-program"
              onClick={() => setActiveTab('program')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'program'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-blue-700" />
              <span>Jenjang & Program</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Sambutan Pengasuh */}
        {activeTab === 'sambutan' && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4 text-center">
                <div className="relative inline-block">
                  <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white mx-auto">
                    <img
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
                      alt="Dr. KH. Ahmad Zaki Mubarak, M.Ag"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-900 text-amber-300 text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md whitespace-nowrap">
                    Pimpinan & Pengasuh
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  Dr. KH. Ahmad Zaki Mubarak, M.Ag
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Alumni Univ. Al-Azhar Kairo & UIN Syarif Hidayatullah
                </p>
              </div>

              <div className="lg:col-span-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                  <Quote className="w-4 h-4" />
                  <span>Kalimah Iftitah (Kata Sambutan)</span>
                </div>
                <p className="font-arabic text-lg sm:text-xl text-blue-950 leading-loose">
                  السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                </p>
                <p>
                  Segala puji bagi Allah Rabb semesta alam, yang telah mewariskan ilmu kepada para nabi dan ulama sebagai pelita kehidupan. Shalawat beserta salam senantiasa tercurah kepada junjungan kita Nabi Muhammad SAW, uswatun hasanah dalam segenap segi kehidupan.
                </p>
                <p>
                  Di era digital yang penuh dengan keterbukaan dan tantangan moral ini, pendidikan tidak cukup hanya mentransfer pengetahuan akal (knowledge), melainkan wajib menggembleng adab, ketauhidan, serta kecintaan kepada Al-Qur&apos;an. Di <strong>Raudhatul Muhibbin</strong>, kami mendidik santri dengan cinta dan keteladanan; mengasah akal dengan sains dan bahasa internasional, serta menyejukkan hati dengan zikir, qiyamullail, dan kitab turats para salafus shalih.
                </p>
                <p>
                  Kami menyambut hangat para orang tua yang ingin menitipkan putera-puterinya untuk berjuang di jalan ilmu. Semoga Allah meridhoi setiap ikhtiar kita dalam mengantarkan anak-anak menjadi penyejuk hati (qurrata a&apos;yun) dan pembela agama, bangsa, serta negara.
                </p>
                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      Dr. KH. Ahmad Zaki Mubarak, M.Ag
                    </p>
                    <p className="text-xs text-slate-500">
                      Pengasuh Pondok Pesantren Raudhatul Muhibbin
                    </p>
                  </div>
                  <button
                    onClick={onOpenRoutine}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
                  >
                    <Clock className="w-3.5 h-3.5 text-blue-700" />
                    <span>Lihat Agenda 24 Jam Santri</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Visi & Misi */}
        {activeTab === 'visimisi' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
            {/* Visi Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800 text-amber-300 text-xs font-semibold mb-4">
                  <Target className="w-3.5 h-3.5" />
                  <span>Visi Utama Pesantren</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug text-white">
                  &ldquo;{PESANTREN_PROFILE.visi}&rdquo;
                </h3>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-800/80">
                <p className="text-xs text-blue-200 font-medium">
                  Landasan Filosofis: Al-Muhafadzah &apos;ala al-qadimis shalih wal akhdzu bil jadidil ashlah (Memelihara tradisi lama yang baik dan mengambil hal baru yang lebih baik).
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-700" />
                <span>Misi Strategis Pendidikan</span>
              </h3>
              <div className="space-y-4">
                {PESANTREN_PROFILE.misi.map((misiText, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {misiText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Panca Jiwa Pesantren */}
        {activeTab === 'pancajiwa' && (
          <div className="animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-xl font-bold text-slate-900">
                Panca Jiwa Pondok Pesantren
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Lima pilar pembentukan karakter luhur yang menjiwai setiap denyut kehidupan santri di Raudhatul Muhibbin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {PESANTREN_PROFILE.pancaJiwa.map((jiwa, idx) => (
                <div
                  key={idx}
                  id={`panca-jiwa-${idx}`}
                  className="bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 rounded-2xl p-5 transition-all text-center flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 mx-auto rounded-xl bg-blue-100 text-blue-900 font-extrabold text-sm flex items-center justify-center mb-3">
                      0{idx + 1}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                      {jiwa.judul}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {jiwa.keterangan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Jenjang & Program Unggulan */}
        {activeTab === 'program' && (
          <div className="animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PESANTREN_PROFILE.jenjangPendidikan.map((jenjang) => (
                <div
                  key={jenjang.id}
                  id={`program-card-${jenjang.id}`}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-900">
                        {jenjang.durasi}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        Kuota: <strong className="text-slate-800">{jenjang.kuotaTersedia}</strong>
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {jenjang.nama}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {jenjang.deskripsi}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Biaya Formulir PSB</span>
                      <span className="text-sm font-bold text-blue-900">{jenjang.biayaPendaftaran}</span>
                    </div>
                    <button
                      onClick={() => onSelectJenjangToRegister(jenjang.id as JenjangType)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                    >
                      <span>Pilih & Daftar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Historical Callout */}
        <div className="mt-12 bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-amber-300 flex items-center justify-center md:justify-start gap-2">
              <CheckCircle className="w-5 h-5 text-amber-400" />
              <span>Sanad Keilmuan Mu&apos;tabar & Kurikulum Berjenjang</span>
            </h4>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
              Memadukan kurikulum standar Kementerian Agama RI (Kemenag) dengan standar Kulliyyatul Mu&apos;allimin Al-Islamiyyah dan Talaqqi Al-Qur&apos;an bersanad hingga Rasulullah SAW.
            </p>
          </div>
          <button
            onClick={onOpenRoutine}
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-white text-blue-950 hover:bg-blue-50 transition-colors shadow-xs"
          >
            Pelajari Jadwal Santri 24 Jam
          </button>
        </div>
      </div>
    </section>
  );
}
