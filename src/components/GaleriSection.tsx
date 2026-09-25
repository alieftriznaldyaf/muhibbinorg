import { useState } from 'react';
import { Camera, Calendar, MapPin, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALERI_LIST } from '../data/pesantrenData';
import { GaleriItem } from '../types';

export default function GaleriSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = [
    'Semua',
    'Ibadah & Tahfidz',
    'Kajian Kitab',
    'Pentas & Bahasa',
    'Ekstrakurikuler',
    'Sosial & Prestasi',
  ];

  const filteredGaleri = GALERI_LIST.filter((item) => {
    return selectedCategory === 'Semua' || item.kategori === selectedCategory;
  });

  const handlePrev = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        activePhotoIndex === 0 ? filteredGaleri.length - 1 : activePhotoIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        activePhotoIndex === filteredGaleri.length - 1 ? 0 : activePhotoIndex + 1
      );
    }
  };

  const activePhoto: GaleriItem | null =
    activePhotoIndex !== null ? filteredGaleri[activePhotoIndex] : null;

  return (
    <section id="galeri" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wide mb-3">
            <Camera className="w-3.5 h-3.5 text-blue-700" />
            <span>Dokumentasi & Aktivitas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Galeri Kegiatan Santri
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Potret keceriaan, kedisiplinan beribadah, kesungguhan menuntut ilmu, dan kebersamaan santri dalam memupuk ukhuwah islamiyah di Raudhatul Muhibbin.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-galeri-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => {
                setSelectedCategory(cat);
                setActivePhotoIndex(null);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGaleri.map((item, index) => (
            <div
              key={item.id}
              id={`galeri-item-${item.id}`}
              onClick={() => setActivePhotoIndex(index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200 cursor-pointer flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                <img
                  src={item.foto}
                  alt={item.judul}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-blue-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="p-2.5 rounded-full bg-white/90 text-blue-950 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-blue-950/85 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-md">
                  {item.kategori}
                </div>
              </div>

              {/* Caption details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-1 group-hover:text-blue-900 transition-colors">
                    {item.judul}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{item.tanggal}</span>
                  </span>
                  <span className="flex items-center gap-1 truncate max-w-[130px]">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">{item.lokasi}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:flex"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden sm:flex"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative aspect-16/10 sm:aspect-16/9 bg-black flex items-center justify-center">
              <img
                src={activePhoto.foto}
                alt={activePhoto.judul}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-800 text-amber-300">
                  {activePhoto.kategori}
                </span>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activePhoto.tanggal}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{activePhoto.lokasi}</span>
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {activePhoto.judul}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activePhoto.deskripsi}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
