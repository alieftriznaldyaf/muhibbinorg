import { X, Clock, Sun, Moon, Coffee, BookOpen, Users, Monitor, Feather, Compass, HeartHandshake, Award, Bed, Activity } from 'lucide-react';
import { JADWAL_HARIAN } from '../data/pesantrenData';

interface DailyRoutineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DailyRoutineModal({ isOpen, onClose }: DailyRoutineModalProps) {
  if (!isOpen) return null;

  const renderIcon = (name: string) => {
    const props = { className: 'w-4 h-4 text-blue-800' };
    switch (name) {
      case 'Moon': return <Moon {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Coffee': return <Coffee {...props} />;
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Monitor': return <Monitor {...props} />;
      case 'Feather': return <Feather {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Bed': return <Bed {...props} />;
      default: return <Clock {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white p-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-800 text-amber-300 text-xs font-semibold mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Disiplin & Istiqamah 24 Jam</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Jadwal Rutin Keseharian Santri
            </h3>
            <p className="text-xs text-blue-200 mt-1">
              Ritme kehidupan teratur sejak qiyamullail hingga istirahat malam di Raudhatul Muhibbin
            </p>
          </div>
          <button
            id="btn-close-routine"
            onClick={onClose}
            className="p-1.5 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          <div className="relative pl-6 border-l-2 border-blue-200 space-y-6">
            {JADWAL_HARIAN.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] top-0.5 w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center shadow-xs">
                  {renderIcon(item.iconName)}
                </div>

                {/* Card */}
                <div className="bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-200 rounded-xl p-3.5 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.kegiatan}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900">
                      {item.waktu}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.keterangan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Jadwal disesuaikan pada hari libur (Jumat) & bulan suci Ramadhan.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
