import { useState } from 'react';
import { Building2, MapPin, Users, CheckCircle2, X, Sparkles } from 'lucide-react';
import { FASILITAS_LIST } from '../data/pesantrenData';
import { Fasilitas } from '../types';

export default function FasilitasSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeFasilitasModal, setActiveFasilitasModal] = useState<Fasilitas | null>(null);

  const categories = [
    'Semua',
    'Ibadah & Asrama',
    'Akademik & Kelas',
    'Kesehatan & Olahraga',
    'Penunjang & Layanan',
  ];

  const filteredFasilitas = FASILITAS_LIST.filter((item) => {
    return selectedCategory === 'Semua' || item.kategori === selectedCategory;
  });

  return (
    <section id="fasilitas" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wide mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Sarana & Prasarana</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas Modern & Terpadu
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menempati area asri seluas 7,5 hektar, Raudhatul Muhibbin menyediakan lingkungan belajar yang aman, nyaman, dan higienis guna menunjang tumbuh kembang santri secara menyeluruh.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-fasilitas-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFasilitas.map((fasilitas) => (
            <div
              key={fasilitas.id}
              id={`card-fasilitas-${fasilitas.id}`}
              className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={fasilitas.foto}
                    alt={fasilitas.nama}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-blue-950/85 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {fasilitas.kategori}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-700" />
                      <span>{fasilitas.lokasi}</span>
                    </span>
                    <span className="flex items-center gap-1 font-medium text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                      <Users className="w-3 h-3" />
                      <span>{fasilitas.kapasitas}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-900 transition-colors">
                    {fasilitas.nama}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {fasilitas.deskripsi}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {fasilitas.keunggulan.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-0">
                <button
                  id={`btn-detail-fasilitas-${fasilitas.id}`}
                  onClick={() => setActiveFasilitasModal(fasilitas)}
                  className="w-full py-2 px-3 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-center"
                >
                  Detail & Spesifikasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Fasilitas Modal */}
      {activeFasilitasModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in duration-200">
            {/* Modal Image Header */}
            <div className="relative aspect-16/9 bg-slate-900">
              <img
                src={activeFasilitasModal.foto}
                alt={activeFasilitasModal.nama}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
              />
              <button
                onClick={() => setActiveFasilitasModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  {activeFasilitasModal.kategori}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeFasilitasModal.nama}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div>
                  <span className="text-[11px] text-slate-400 block">Kapasitas / Daya Tampung:</span>
                  <span className="font-bold text-slate-800">{activeFasilitasModal.kapasitas}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Letak Lokasi:</span>
                  <span className="font-bold text-slate-800">{activeFasilitasModal.lokasi}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Deskripsi Lengkap</h4>
                <p className="text-slate-600 leading-relaxed">
                  {activeFasilitasModal.deskripsi}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-700" />
                  <span>Keunggulan & Spesifikasi Standar</span>
                </h4>
                <ul className="space-y-2">
                  {activeFasilitasModal.keunggulan.map((k, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveFasilitasModal(null)}
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
