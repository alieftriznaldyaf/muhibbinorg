import { useState } from 'react';
import { Printer, Download, Copy, Check, X, ShieldCheck, Calendar, MapPin, AlertCircle, QrCode } from 'lucide-react';
import { PendaftaranData } from '../types';
import { PESANTREN_PROFILE } from '../data/pesantrenData';

interface KartuPendaftaranProps {
  data: PendaftaranData;
  onClose: () => void;
}

export default function KartuPendaftaran({ data, onClose }: KartuPendaftaranProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyNoReg = () => {
    navigator.clipboard.writeText(data.nomorRegistrasi);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getJenjangLabel = (jenjang: string) => {
    switch (jenjang) {
      case 'MTs_PESANTREN': return 'Madrasah Tsanawiyah (MTs) & Pesantren';
      case 'MA_PESANTREN': return 'Madrasah Aliyah (MA) IPA & Keagamaan';
      case 'TAKHASSUS_TAHFIDZ': return 'Takhassus Tahfidzul Qur\'an 30 Juz Mutqin';
      case 'KMI_DINIYAH': return 'KMI / Diniyah Salafiyah Terpadu';
      default: return jenjang;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Top Control Bar (Hidden when printed) */}
        <div className="no-print bg-slate-800 text-white px-6 py-3.5 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">Bukti Pendaftaran Santri Baru (PSB Online)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-copy-reg-card"
              onClick={handleCopyNoReg}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-100 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin' : 'Salin No. Reg'}</span>
            </button>
            <button
              id="btn-print-card"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-blue-950 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Simpan PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-1"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PRINTABLE AREA */}
        <div id="print-area" className="p-8 sm:p-10 bg-white text-slate-800">
          {/* Official Letterhead (Kop Surat) */}
          <div className="border-b-4 border-double border-blue-900 pb-5 mb-6 text-center relative">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-2xl shadow-sm border border-amber-300 shrink-0">
                RM
              </div>
              <div>
                <p className="font-arabic text-sm text-blue-900 font-bold mb-0.5">
                  رَوْضَةُ الْمُحِبِّيْنَ لِلتَّرْبِيَةِ وَالتَّعْلِيْمِ الْإِسْلَامِيِّ
                </p>
                <h1 className="text-xl sm:text-2xl font-black text-blue-950 uppercase tracking-wide">
                  Pondok Pesantren Raudhatul Muhibbin
                </h1>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  NSP Kemenag: 510032010892 • Akreditasi A (Unggul) BAN-SM & Kemenag RI
                </p>
                <p className="text-[11px] text-slate-500">
                  {PESANTREN_PROFILE.alamat} | Telp: {PESANTREN_PROFILE.telepon} | WhatsApp: {PESANTREN_PROFILE.whatsappPSB}
                </p>
              </div>
            </div>
          </div>

          {/* Title & Badge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                Kartu Tanda Pendaftaran Santri Baru (PSB)
              </h2>
              <p className="text-xs text-slate-500">
                Tahun Ajaran 2026 / 2027 • Gelombang 1
              </p>
            </div>
            <div className="text-center sm:text-right">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">
                Status Verifikasi
              </span>
              <span className="inline-block mt-0.5 px-3 py-1 text-xs font-extrabold rounded-full bg-blue-100 text-blue-900 border border-blue-300">
                {data.status}
              </span>
            </div>
          </div>

          {/* Registration Code Banner */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold text-blue-800 block">
                NOMOR REGISTRASI RESMI
              </span>
              <span className="text-2xl sm:text-3xl font-black text-blue-950 tracking-wider font-mono">
                {data.nomorRegistrasi}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-slate-500 block">Tanggal Registrasi:</span>
              <span className="text-xs font-bold text-slate-800">{data.tanggalDaftar}</span>
            </div>
          </div>

          {/* Main Info Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
            {/* Candidate Photo Frame */}
            <div className="md:col-span-3 text-center flex flex-col items-center">
              <div className="w-32 h-40 border-2 border-dashed border-slate-400 rounded-xl bg-slate-50 flex flex-col items-center justify-center p-3 text-slate-400">
                <span className="text-xs font-semibold">Pas Foto</span>
                <span className="text-[11px]">3 x 4</span>
                <span className="text-[10px] text-slate-400 mt-2 text-center">
                  (Ditempel saat tes seleksi)
                </span>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-600">
                <QrCode className="w-5 h-5 text-blue-900" />
                <span className="font-mono font-bold text-[10px]">{data.nomorRegistrasi}</span>
              </div>
            </div>

            {/* Candidate Details Table */}
            <div className="md:col-span-9 space-y-2 text-xs">
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">Nama Lengkap</span>
                <span className="col-span-2 font-bold text-slate-900">{data.namaLengkap}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">NIK / NISN</span>
                <span className="col-span-2 font-semibold text-slate-800">{data.nik} / {data.nisn}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">Tempat, Tgl Lahir</span>
                <span className="col-span-2 text-slate-800">{data.tempatLahir}, {data.tanggalLahir} ({data.jenisKelamin})</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">Jenjang Pilihan</span>
                <span className="col-span-2 font-bold text-blue-950 bg-blue-50 px-2 py-0.5 rounded inline-block">
                  {getJenjangLabel(data.jenjangPilihan)}
                </span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">Asal Sekolah</span>
                <span className="col-span-2 text-slate-800">{data.asalSekolah}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">Hafalan Qur&apos;an Awal</span>
                <span className="col-span-2 text-slate-800">{data.hafalanAwal || 'Belum ada'}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">Orang Tua / Wali</span>
                <span className="col-span-2 text-slate-800">
                  Ayah: <strong>{data.namaAyah}</strong> | Ibu: <strong>{data.namaIbu}</strong>
                </span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">No. WhatsApp Aktif</span>
                <span className="col-span-2 font-semibold text-blue-900">{data.nomorWhatsApp}</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-slate-100">
                <span className="font-medium text-slate-500">Alamat Domisili</span>
                <span className="col-span-2 text-slate-800">{data.alamatLengkap}, {data.kabupatenKota}, {data.provinsi}</span>
              </div>
            </div>
          </div>

          {/* Jadwal Ujian Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5 mb-2">
              <Calendar className="w-4 h-4 text-blue-800" />
              <span>Jadwal Tes Seleksi & Ujian Masuk</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <span className="text-slate-400 block text-[11px]">Waktu Pelaksanaan Ujian:</span>
                <span className="font-bold text-slate-900">
                  {data.jadwalUjian || 'Ahad, 22 November 2026 - Pukul 08.00 WIB'}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Lokasi / Ruang Seleksi:</span>
                <span className="font-bold text-slate-900">
                  {data.ruangUjian || 'Gedung KBM Terpadu Lantai 2 / R-01'}
                </span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 mb-8 text-[11px] text-amber-950">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Ketentuan Penting Menghadiri Tes Seleksi:</p>
                <ol className="list-decimal pl-4 space-y-0.5 mt-1 text-slate-700">
                  <li>Wajib mencetak dan membawa Kartu Tanda Pendaftaran ini saat hadir ke pesantren.</li>
                  <li>Santri mengenakan pakaian muslim rapi, bersongkok/peci hitam (putra) atau berkerudung syar&apos;i (putri).</li>
                  <li>Membawa fotokopi KK, Akta Kelahiran, dan perlengkapan alat tulis pribadi.</li>
                  <li>Wali santri wajib hadir mendampingi untuk sesi wawancara kesiapan mondok.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Signatures */}
          <div className="grid grid-cols-2 gap-6 pt-4 text-center text-xs text-slate-700">
            <div>
              <p className="text-slate-500 mb-12">Calon Santri / Orang Tua Wali</p>
              <p className="font-bold border-t border-slate-300 pt-1 inline-block min-w-[150px]">
                ( {data.namaLengkap} )
              </p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Panitia PSB Raudhatul Muhibbin</p>
              <div className="h-10 flex items-center justify-center">
                <span className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  TERVERIFIKASI SISTEM
                </span>
              </div>
              <p className="font-bold border-t border-slate-300 pt-1 inline-block min-w-[150px]">
                Ust. H. Muhammad Ridwan, Lc
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="no-print bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Simpan atau cetak kartu ini sebagai bukti resmi pendaftaran Anda.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Kartu Ujian</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
