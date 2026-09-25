import { useState } from 'react';
import { Users, Search, GraduationCap, Award, BookOpen, Quote, X, Mail } from 'lucide-react';
import { GURU_LIST } from '../data/pesantrenData';
import { Guru } from '../types';

export default function GuruSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeGuruModal, setActiveGuruModal] = useState<Guru | null>(null);

  const categories = [
    'Semua',
    'Pimpinan & Pengasuh',
    'Kitab Kuning & Syariah',
    'Tahfidzul Qur\'an',
    'Formal & Bahasa',
  ];

  const filteredGuru = GURU_LIST.filter((guru) => {
    const matchCategory =
      selectedCategory === 'Semua' || guru.kategori === selectedCategory;
    const matchQuery =
      guru.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guru.bidangAjar.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      guru.almamater.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <section id="guru" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wide mb-3">
            <Users className="w-3.5 h-3.5 text-blue-700" />
            <span>Dewan Guru & Mursyid</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Profil Dewan Asatidz & Ustadzah
          </h2>
          <p className="font-arabic text-base sm:text-lg text-blue-900 mt-2">
            يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ
          </p>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Diasuh oleh para ulama, masyayikh, dan sarjana berdedikasi lulusan perguruan tinggi terkemuka dalam dan luar negeri (Al-Azhar Kairo, Univ. Al-Ahgaff Yaman, Gontor, Lirboyo, Krapyak, IPB, UI).
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-guru-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="input-search-guru"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama, bidang ajar, almamater..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Guru Cards Grid */}
        {filteredGuru.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGuru.map((guru) => (
              <div
                key={guru.id}
                id={`card-guru-${guru.id}`}
                className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={guru.foto}
                      alt={guru.nama}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-blue-950/85 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {guru.kategori}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                      {guru.pengalamanTahun} Thn Pengabdian
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1">
                      {guru.nama}
                    </h3>
                    <p className="text-xs text-blue-800 font-semibold mt-1">
                      {guru.peran}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                      <div className="flex items-start gap-1.5 text-xs text-slate-600">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{guru.almamater}</span>
                      </div>
                      <div className="flex items-start gap-1.5 text-xs text-slate-600">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">
                          {guru.bidangAjar.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-5 pb-5 pt-0">
                  <button
                    id={`btn-detail-guru-${guru.id}`}
                    onClick={() => setActiveGuruModal(guru)}
                    className="w-full py-2 px-3 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-center"
                  >
                    Lihat Bio & Pesan Hikmah
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">
              Tidak ditemukan dewan guru dengan kata kunci &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="mt-3 px-3 py-1.5 text-xs font-semibold text-blue-800 bg-blue-50 rounded-lg hover:bg-blue-100"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>

      {/* Modal Detail Profil Guru */}
      {activeGuruModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white p-6">
              <button
                id="btn-close-guru-modal"
                onClick={() => setActiveGuruModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img
                  src={activeGuruModal.foto}
                  alt={activeGuruModal.nama}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-300 shadow-md shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-400 text-blue-950 rounded uppercase">
                    {activeGuruModal.kategori}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    {activeGuruModal.nama}
                  </h3>
                  <p className="text-xs text-blue-200">
                    {activeGuruModal.gelar}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-800" />
                  <span>Riwayat Pendidikan & Almamater</span>
                </h4>
                <p className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  {activeGuruModal.almamater}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-800" />
                  <span>Bidang Kajian / Mata Pelajaran</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeGuruModal.bidangAjar.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-blue-50 text-blue-900 border border-blue-200 rounded-md text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Biografi Singkat & Dedikasi
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {activeGuruModal.biografi}
                </p>
              </div>

              {/* Pesan Hikmah Quote */}
              <div className="bg-amber-50/80 border-l-4 border-amber-400 p-3.5 rounded-r-xl">
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-amber-900 block mb-0.5">
                      Pesan Hikmah untuk Santri & Wali Santri:
                    </span>
                    <p className="text-xs text-amber-950 italic">
                      &ldquo;{activeGuruModal.pesanHikmah}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {activeGuruModal.kontakEmail && (
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Surel Resmi: {activeGuruModal.kontakEmail}</span>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveGuruModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
