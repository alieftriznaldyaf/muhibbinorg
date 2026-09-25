import { useState, useEffect } from 'react';
import { GraduationCap, CheckCircle2, UserCheck, AlertCircle, ArrowRight, ArrowLeft, Printer, Search, HelpCircle, FileText, Calendar, Phone, Sparkles } from 'lucide-react';
import { PendaftaranData, JenjangType, StatusPendaftaran } from '../types';
import { INITIAL_MOCK_REGISTRATIONS, JADWAL_SELEKSI_PSB, SYARAT_PENDAFTARAN, FAQ_PENDAFTARAN, PESANTREN_PROFILE } from '../data/pesantrenData';
import KartuPendaftaran from './KartuPendaftaran';

interface PendaftaranSectionProps {
  initialJenjang?: JenjangType;
  defaultTab?: 'form' | 'status' | 'info';
}

const STORAGE_KEY = 'raudhatul_muhibbin_registrations_v1';

export default function PendaftaranSection({
  initialJenjang,
  defaultTab = 'form',
}: PendaftaranSectionProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'status' | 'info'>(defaultTab);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [registrations, setRegistrations] = useState<PendaftaranData[]>([]);
  const [showKartuModal, setShowKartuModal] = useState<PendaftaranData | null>(null);
  const [submittedCard, setSubmittedCard] = useState<PendaftaranData | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<PendaftaranData>>({
    namaLengkap: '',
    nik: '',
    nisn: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisKelamin: 'Laki-laki',
    jenjangPilihan: initialJenjang || 'MTs_PESANTREN',
    asalSekolah: '',
    hafalanAwal: '',
    hobiCitaCita: '',
    namaAyah: '',
    pekerjaanAyah: '',
    namaIbu: '',
    pekerjaanIbu: '',
    nomorWhatsApp: '',
    emailWali: '',
    alamatLengkap: '',
    kabupatenKota: '',
    provinsi: 'Jawa Barat',
    riwayatPenyakit: 'Sehat wal afiat, tidak ada riwayat penyakit berat',
    motivasi: '',
  });

  const [formError, setFormError] = useState<string>('');

  // Status Search State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchedData, setSearchedData] = useState<PendaftaranData | null>(null);
  const [searchError, setSearchError] = useState<string>('');

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setRegistrations(JSON.parse(saved));
      } else {
        setRegistrations(INITIAL_MOCK_REGISTRATIONS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_MOCK_REGISTRATIONS));
      }
    } catch {
      setRegistrations(INITIAL_MOCK_REGISTRATIONS);
    }
  }, []);

  // Sync initialJenjang if prop changes
  useEffect(() => {
    if (initialJenjang) {
      setFormData((prev) => ({ ...prev, jenjangPilihan: initialJenjang }));
      setActiveTab('form');
    }
  }, [initialJenjang]);

  const saveRegistrations = (newList: PendaftaranData[]) => {
    setRegistrations(newList);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    } catch {
      // safe fallback
    }
  };

  const handleInputChange = (field: keyof PendaftaranData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFormError('');
  };

  const validateStep = (step: number): boolean => {
    if (step === 1) {
      if (!formData.namaLengkap?.trim()) {
        setFormError('Nama lengkap calon santri wajib diisi.');
        return false;
      }
      if (!formData.nik?.trim() || formData.nik.length < 8) {
        setFormError('Nomor Induk Kependudukan (NIK) minimal 8-16 digit.');
        return false;
      }
      if (!formData.tempatLahir?.trim() || !formData.tanggalLahir?.trim()) {
        setFormError('Tempat dan tanggal lahir calon santri wajib diisi.');
        return false;
      }
      if (!formData.asalSekolah?.trim()) {
        setFormError('Asal sekolah/madrasah wajib diisi.');
        return false;
      }
    } else if (step === 2) {
      if (!formData.namaAyah?.trim() || !formData.namaIbu?.trim()) {
        setFormError('Nama Ayah dan Ibu kandung wajib diisi.');
        return false;
      }
      if (!formData.nomorWhatsApp?.trim() || formData.nomorWhatsApp.length < 9) {
        setFormError('Nomor WhatsApp aktif wajib diisi untuk pengiriman notifikasi PSB.');
        return false;
      }
      if (!formData.alamatLengkap?.trim() || !formData.kabupatenKota?.trim()) {
        setFormError('Alamat lengkap domisili dan Kota/Kabupaten wajib diisi.');
        return false;
      }
    } else if (step === 3) {
      if (!formData.motivasi?.trim()) {
        setFormError('Mohon tuliskan motivasi atau harapan calon santri menuntut ilmu di pesantren.');
        return false;
      }
    }
    setFormError('');
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setFormError('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) {
      setCurrentStep(3);
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newNoReg = `RM-2026-${randomNum}`;
    const today = new Date().toISOString().split('T')[0];

    const newRecord: PendaftaranData = {
      nomorRegistrasi: newNoReg,
      tanggalDaftar: today,
      status: 'Menunggu Verifikasi',
      namaLengkap: formData.namaLengkap || 'Santri Baru',
      nik: formData.nik || '',
      nisn: formData.nisn || '-',
      tempatLahir: formData.tempatLahir || 'Bogor',
      tanggalLahir: formData.tanggalLahir || '2012-01-01',
      jenisKelamin: formData.jenisKelamin || 'Laki-laki',
      jenjangPilihan: formData.jenjangPilihan || 'MTs_PESANTREN',
      asalSekolah: formData.asalSekolah || '-',
      hafalanAwal: formData.hafalanAwal || 'Belum ada',
      hobiCitaCita: formData.hobiCitaCita || '-',
      namaAyah: formData.namaAyah || '-',
      pekerjaanAyah: formData.pekerjaanAyah || '-',
      namaIbu: formData.namaIbu || '-',
      pekerjaanIbu: formData.pekerjaanIbu || '-',
      nomorWhatsApp: formData.nomorWhatsApp || '-',
      emailWali: formData.emailWali || '-',
      alamatLengkap: formData.alamatLengkap || '-',
      kabupatenKota: formData.kabupatenKota || '-',
      provinsi: formData.provinsi || 'Jawa Barat',
      riwayatPenyakit: formData.riwayatPenyakit || 'Sehat',
      motivasi: formData.motivasi || '-',
      jadwalUjian: 'Ahad, 22 November 2026 - Pukul 08.00 WIB',
      ruangUjian: 'Gedung KBM Terpadu Lantai 2 / R-03'
    };

    const updated = [newRecord, ...registrations];
    saveRegistrations(updated);
    setSubmittedCard(newRecord);
    setShowKartuModal(newRecord);
  };

  const handleSearchStatus = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSearchError('');
    if (!searchQuery.trim()) {
      setSearchError('Silakan masukkan Nomor Registrasi atau NIK.');
      return;
    }

    const clean = searchQuery.trim().toLowerCase();
    const found = registrations.find(
      (r) =>
        r.nomorRegistrasi.toLowerCase() === clean ||
        r.nik.toLowerCase() === clean ||
        r.namaLengkap.toLowerCase().includes(clean)
    );

    if (found) {
      setSearchedData(found);
    } else {
      setSearchedData(null);
      setSearchError(
        `Data dengan kata kunci "${searchQuery}" tidak ditemukan. Pastikan nomor pendaftaran atau NIK sudah benar.`
      );
    }
  };

  const getStatusBadgeColor = (status: StatusPendaftaran) => {
    switch (status) {
      case 'Diterima':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Lolos Berkas':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      case 'Jadwal Tes Terbit':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <section id="pendaftaran" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wide mb-3">
            <GraduationCap className="w-4 h-4 text-blue-800" />
            <span>Penerimaan Santri Baru (PSB) 2026/2027</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pendaftaran Daring Santri Baru
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Mudah, cepat, dan transparan. Daftarkan putra-putri tercinta menjadi bagian dari keluarga besar Pondok Pesantren Raudhatul Muhibbin.
          </p>
        </div>

        {/* Tab Controls: Form Pendaftaran | Cek Status | Info & Alur */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              id="tab-psb-form"
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'form'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Formulir Pendaftaran</span>
            </button>
            <button
              id="tab-psb-status"
              onClick={() => setActiveTab('status')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'status'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4 text-blue-700" />
              <span>Cek Status Pendaftaran</span>
            </button>
            <button
              id="tab-psb-info"
              onClick={() => setActiveTab('info')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'info'
                  ? 'bg-white text-blue-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Alur & Syarat Berkas</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FORMULIR PENDAFTARAN DARING */}
        {activeTab === 'form' && (
          <div className="max-w-3xl mx-auto">
            {submittedCard ? (
              /* Success Confirmation Card */
              <div className="bg-blue-50/80 border-2 border-blue-300 rounded-3xl p-8 sm:p-10 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-700/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-blue-950 mb-2">
                  Alhamdulillah! Pendaftaran Berhasil Dikirim
                </h3>
                <p className="text-sm text-blue-900 max-w-lg mx-auto mb-6">
                  Data calon santri <strong>{submittedCard.namaLengkap}</strong> telah tercatat di basis data resmi Panitia PSB Raudhatul Muhibbin.
                </p>

                <div className="bg-white border border-blue-200 rounded-2xl p-5 max-w-md mx-auto mb-6 shadow-xs text-left">
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">
                    Nomor Registrasi Anda
                  </span>
                  <span className="text-2xl font-black text-blue-950 font-mono tracking-wider">
                    {submittedCard.nomorRegistrasi}
                  </span>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>Status Awal:</span>
                    <span className="font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                      {submittedCard.status}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    id="btn-view-card-success"
                    onClick={() => setShowKartuModal(submittedCard)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-amber-300 text-blue-950 hover:from-amber-300 hover:to-amber-400 shadow-md"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Lihat & Cetak Kartu Pendaftaran</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmittedCard(null);
                      setCurrentStep(1);
                      setFormData({
                        namaLengkap: '',
                        nik: '',
                        nisn: '',
                        tempatLahir: '',
                        tanggalLahir: '',
                        jenisKelamin: 'Laki-laki',
                        jenjangPilihan: 'MTs_PESANTREN',
                        asalSekolah: '',
                        hafalanAwal: '',
                        hobiCitaCita: '',
                        namaAyah: '',
                        pekerjaanAyah: '',
                        namaIbu: '',
                        pekerjaanIbu: '',
                        nomorWhatsApp: '',
                        emailWali: '',
                        alamatLengkap: '',
                        kabupatenKota: '',
                        provinsi: 'Jawa Barat',
                        riwayatPenyakit: 'Sehat',
                        motivasi: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 bg-white border border-slate-300 hover:bg-slate-100"
                  >
                    Daftar Santri Lainnya
                  </button>
                </div>
              </div>
            ) : (
              /* Wizard Steps Form */
              <div className="bg-white border border-slate-200/90 rounded-3xl shadow-sm p-6 sm:p-10">
                {/* Stepper Progress Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                      Langkah {currentStep} dari 4
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {currentStep === 1 && 'Data Calon Santri & Jenjang'}
                      {currentStep === 2 && 'Data Orang Tua / Wali'}
                      {currentStep === 3 && 'Riwayat Kesehatan & Motivasi'}
                      {currentStep === 4 && 'Konfirmasi & Pernyataan'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-800 h-full transition-all duration-300 rounded-full"
                      style={{ width: `${(currentStep / 4) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Validation Error banner */}
                {formError && (
                  <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2.5 text-xs text-rose-800">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmitRegistration}>
                  {/* STEP 1: DATA CALON SANTRI */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Pilihan Jenjang Pendidikan <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="input-jenjang"
                          value={formData.jenjangPilihan}
                          onChange={(e) => handleInputChange('jenjangPilihan', e.target.value as JenjangType)}
                          className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="MTs_PESANTREN">Madrasah Tsanawiyah (MTs) & Pesantren Terpadu (Setara SMP)</option>
                          <option value="MA_PESANTREN">Madrasah Aliyah (MA) Jurusan IPA & Keagamaan (Setara SMA)</option>
                          <option value="TAKHASSUS_TAHFIDZ">Takhassus Tahfidzul Qur&apos;an 30 Juz Mutqin</option>
                          <option value="KMI_DINIYAH">Kulliyyatul Mu&apos;allimin Al-Islamiyyah (KMI / Salafiyah)</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Nama Lengkap Santri <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-nama-lengkap"
                            value={formData.namaLengkap}
                            onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
                            placeholder="Sesuai Akta Kelahiran / KK"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Jenis Kelamin <span className="text-rose-500">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => handleInputChange('jenisKelamin', 'Laki-laki')}
                              className={`py-2 px-3 text-xs font-bold rounded-xl border transition-colors ${
                                formData.jenisKelamin === 'Laki-laki'
                                  ? 'bg-blue-900 text-white border-blue-900'
                                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              Putra (Ikhwan)
                            </button>
                            <button
                              type="button"
                              onClick={() => handleInputChange('jenisKelamin', 'Perempuan')}
                              className={`py-2 px-3 text-xs font-bold rounded-xl border transition-colors ${
                                formData.jenisKelamin === 'Perempuan'
                                  ? 'bg-blue-900 text-white border-blue-900'
                                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                              }`}
                            >
                              Putri (Akhwat)
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Nomor Induk Kependudukan (NIK) <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-nik"
                            value={formData.nik}
                            onChange={(e) => handleInputChange('nik', e.target.value)}
                            placeholder="16 Digit NIK di Kartu Keluarga"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            NISN (Nomor Induk Siswa Nasional)
                          </label>
                          <input
                            type="text"
                            id="input-nisn"
                            value={formData.nisn}
                            onChange={(e) => handleInputChange('nisn', e.target.value)}
                            placeholder="10 Digit NISN dari sekolah asal (jika ada)"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Tempat Lahir <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-tempat-lahir"
                            value={formData.tempatLahir}
                            onChange={(e) => handleInputChange('tempatLahir', e.target.value)}
                            placeholder="Contoh: Bogor, Jakarta, Bandung"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Tanggal Lahir <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="date"
                            id="input-tanggal-lahir"
                            value={formData.tanggalLahir}
                            onChange={(e) => handleInputChange('tanggalLahir', e.target.value)}
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Asal Sekolah / Madrasah <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-asal-sekolah"
                            value={formData.asalSekolah}
                            onChange={(e) => handleInputChange('asalSekolah', e.target.value)}
                            placeholder="Nama SD/MI/SMP/MTs sebelumnya"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Hafalan Al-Qur&apos;an Saat Ini
                          </label>
                          <input
                            type="text"
                            id="input-hafalan"
                            value={formData.hafalanAwal}
                            onChange={(e) => handleInputChange('hafalanAwal', e.target.value)}
                            placeholder="Contoh: Juz 30, atau 2 Juz, atau belum hafal"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: DATA ORANG TUA / WALI */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Nama Ayah Kandung <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-nama-ayah"
                            value={formData.namaAyah}
                            onChange={(e) => handleInputChange('namaAyah', e.target.value)}
                            placeholder="Nama lengkap Ayah"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Pekerjaan Ayah
                          </label>
                          <input
                            type="text"
                            id="input-pekerjaan-ayah"
                            value={formData.pekerjaanAyah}
                            onChange={(e) => handleInputChange('pekerjaanAyah', e.target.value)}
                            placeholder="Contoh: PNS, Wiraswasta, Karyawan"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Nama Ibu Kandung <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-nama-ibu"
                            value={formData.namaIbu}
                            onChange={(e) => handleInputChange('namaIbu', e.target.value)}
                            placeholder="Nama lengkap Ibu"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Pekerjaan Ibu
                          </label>
                          <input
                            type="text"
                            id="input-pekerjaan-ibu"
                            value={formData.pekerjaanIbu}
                            onChange={(e) => handleInputChange('pekerjaanIbu', e.target.value)}
                            placeholder="Contoh: Ibu Rumah Tangga, Guru, Dokter"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Nomor WhatsApp Aktif Wali <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="input-whatsapp"
                            value={formData.nomorWhatsApp}
                            onChange={(e) => handleInputChange('nomorWhatsApp', e.target.value)}
                            placeholder="Contoh: 081234567890"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Alamat Email Wali
                          </label>
                          <input
                            type="email"
                            id="input-email-wali"
                            value={formData.emailWali}
                            onChange={(e) => handleInputChange('emailWali', e.target.value)}
                            placeholder="Contoh: orangtua@gmail.com"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Alamat Lengkap Domisili <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          rows={2}
                          id="input-alamat"
                          value={formData.alamatLengkap}
                          onChange={(e) => handleInputChange('alamatLengkap', e.target.value)}
                          placeholder="Jalan, No. Rumah, RT/RW, Kelurahan, Kecamatan"
                          className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Kabupaten / Kota <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-kota"
                            value={formData.kabupatenKota}
                            onChange={(e) => handleInputChange('kabupatenKota', e.target.value)}
                            placeholder="Contoh: Bogor, Depok, Jakarta"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1.5">
                            Provinsi <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="input-provinsi"
                            value={formData.provinsi}
                            onChange={(e) => handleInputChange('provinsi', e.target.value)}
                            placeholder="Contoh: Jawa Barat, DKI Jakarta, Banten"
                            className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: RIWAYAT KESEHATAN & MOTIVASI */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Riwayat Penyakit Khusus / Alergi Santri
                        </label>
                        <textarea
                          rows={2}
                          id="input-kesehatan"
                          value={formData.riwayatPenyakit}
                          onChange={(e) => handleInputChange('riwayatPenyakit', e.target.value)}
                          placeholder="Tuliskan jika ada alergi makanan, asma, atau catatan medis khusus untuk tim Poskestren..."
                          className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Motivasi & Harapan Belajar di Raudhatul Muhibbin <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          rows={3}
                          id="input-motivasi"
                          value={formData.motivasi}
                          onChange={(e) => handleInputChange('motivasi', e.target.value)}
                          placeholder="Apa yang memotivasi calon santri dan orang tua memilih Pondok Pesantren Raudhatul Muhibbin?"
                          className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1.5">
                          Cita-Cita & Minat Ekstrakurikuler
                        </label>
                        <input
                          type="text"
                          id="input-cita-cita"
                          value={formData.hobiCitaCita}
                          onChange={(e) => handleInputChange('hobiCitaCita', e.target.value)}
                          placeholder="Contoh: Ingin jadi Dokter Ulama, hobi panahan & robotika"
                          className="w-full p-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: KONFIRMASI & PERNYATAAN */}
                  {currentStep === 4 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-700 space-y-2">
                        <h4 className="font-bold text-slate-900 text-sm mb-2">
                          Ringkasan Data Calon Santri:
                        </h4>
                        <p><strong>Nama:</strong> {formData.namaLengkap} ({formData.jenisKelamin})</p>
                        <p><strong>NIK / NISN:</strong> {formData.nik} / {formData.nisn || '-'}</p>
                        <p><strong>TTL:</strong> {formData.tempatLahir}, {formData.tanggalLahir}</p>
                        <p><strong>Program Jenjang:</strong> {formData.jenjangPilihan}</p>
                        <p><strong>Orang Tua / Wali:</strong> Ayah ({formData.namaAyah}) & Ibu ({formData.namaIbu})</p>
                        <p><strong>WhatsApp Wali:</strong> {formData.nomorWhatsApp}</p>
                        <p><strong>Domisili:</strong> {formData.alamatLengkap}, {formData.kabupatenKota}, {formData.provinsi}</p>
                      </div>

                      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-xs text-amber-950">
                        <h5 className="font-bold mb-1">Pernyataan Kesanggupan & Keabsahan Data:</h5>
                        <p className="leading-relaxed">
                          Dengan mengirimkan formulir ini, orang tua/wali santri menyatakan bahwa data yang diisi adalah benar, bersedia menaati seluruh tata tertib kepesantrenan Raudhatul Muhibbin, dan siap mengikuti tahapan tes seleksi sesuai jadwal yang ditentukan panitia.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Form Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Kembali</span>
                      </button>
                    ) : <div />}

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        id="btn-next-step"
                        onClick={handleNextStep}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-xs"
                      >
                        <span>Lanjut ke Langkah {currentStep + 1}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        id="btn-submit-registration"
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 text-blue-950 transition-all shadow-md"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Kirim Pendaftaran & Dapatkan Nomor Registrasi</span>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CEK STATUS PENDAFTARAN */}
        {activeTab === 'status' && (
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-200">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-center shadow-xs">
              <UserCheck className="w-10 h-10 text-blue-800 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Lacak Status Pendaftaran Santri Baru
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Masukkan Nomor Registrasi (contoh: <code>RM-2026-0819</code>) atau NIK calon santri yang didaftarkan.
              </p>

              <form onSubmit={handleSearchStatus} className="flex gap-2 max-w-md mx-auto mb-4">
                <input
                  type="text"
                  id="input-search-status"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ketik Nomor Registrasi / NIK..."
                  className="flex-1 p-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  id="btn-search-status"
                  className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Cari</span>
                </button>
              </form>

              {searchError && (
                <p className="text-xs text-rose-600 mb-3 font-medium">
                  {searchError}
                </p>
              )}

              {/* Quick sample chips */}
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500">
                <span>Coba contoh terdaftar: </span>
                <button
                  onClick={() => {
                    setSearchQuery('RM-2026-0819');
                    const found = registrations.find(r => r.nomorRegistrasi === 'RM-2026-0819');
                    if (found) setSearchedData(found);
                  }}
                  className="text-blue-700 font-semibold underline hover:text-blue-900 mx-1"
                >
                  RM-2026-0819
                </button>
                <span>atau</span>
                <button
                  onClick={() => {
                    setSearchQuery('RM-2026-0942');
                    const found = registrations.find(r => r.nomorRegistrasi === 'RM-2026-0942');
                    if (found) setSearchedData(found);
                  }}
                  className="text-blue-700 font-semibold underline hover:text-blue-900 mx-1"
                >
                  RM-2026-0942
                </button>
              </div>
            </div>

            {/* Found Result Card */}
            {searchedData && (
              <div className="bg-white border-2 border-blue-300 rounded-3xl p-6 sm:p-8 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-4">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Nomor Registrasi</span>
                    <h4 className="text-lg font-black text-blue-950 font-mono">
                      {searchedData.nomorRegistrasi}
                    </h4>
                  </div>
                  <div>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getStatusBadgeColor(searchedData.status)}`}>
                      {searchedData.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 mb-6">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Nama Calon Santri</span>
                    <span className="font-bold text-slate-900">{searchedData.namaLengkap}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Jenjang Pilihan</span>
                    <span className="font-semibold text-blue-900">{searchedData.jenjangPilihan}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Asal Sekolah</span>
                    <span>{searchedData.asalSekolah}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Jadwal Ujian Masuk</span>
                    <span className="font-bold text-slate-900">{searchedData.jadwalUjian || 'Menunggu Pengumuman'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Ruang Seleksi</span>
                    <span className="font-bold text-slate-900">{searchedData.ruangUjian || 'Akan diumumkan di WhatsApp'}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-xs text-slate-500">
                    Tanggal Terdaftar: <strong>{searchedData.tanggalDaftar}</strong>
                  </span>
                  <button
                    onClick={() => setShowKartuModal(searchedData)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Buka Kartu Bukti Registrasi</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ALUR, JADWAL & SYARAT BERKAS */}
        {activeTab === 'info' && (
          <div className="space-y-12 animate-in fade-in duration-200">
            {/* Alur Pendaftaran */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Alur Tahapan Pendaftaran Santri Baru (PSB)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { step: '01', title: 'Daftar Daring', desc: 'Isi formulir online dan peroleh Nomor Registrasi resmi.' },
                  { step: '02', title: 'Biaya Seleksi', desc: 'Membayar biaya seleksi Rp 250.000 ke rekening resmi pesantren.' },
                  { step: '03', title: 'Cetak Kartu Ujian', desc: 'Unduh kartu bukti pendaftaran online & siapkan berkas fisik.' },
                  { step: '04', title: 'Tes Seleksi', desc: 'Hadir ke pondok untuk tes baca Al-Qur\'an dan wawancara.' },
                  { step: '05', title: 'Pengumuman & Daftar Ulang', desc: 'Cek kelulusan online dan konfirmasi seragam/kamar santri.' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 text-center flex flex-col justify-between">
                    <div>
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-900 font-extrabold text-xs inline-flex items-center justify-center mb-2">
                        {item.step}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Jadwal Gelombang & Syarat Berkas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gelombang Box */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-800" />
                  <span>Jadwal Gelombang Pendaftaran</span>
                </h4>
                <div className="space-y-4">
                  {JADWAL_SELEKSI_PSB.map((gel, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="flex items-center justify-between mb-1.5">
                        <h5 className="font-bold text-slate-900 text-sm">{gel.gelombang}</h5>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          gel.status === 'Sedang Dibuka'
                            ? 'bg-blue-100 text-blue-900 font-semibold'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {gel.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600"><strong>Periode:</strong> {gel.periode}</p>
                      <p className="text-xs text-slate-600"><strong>Tes Seleksi:</strong> {gel.tesSeleksi}</p>
                      <p className="text-xs text-slate-600"><strong>Pengumuman:</strong> {gel.pengumuman}</p>
                      <p className="text-[11px] text-blue-800 font-medium mt-2 pt-2 border-t border-slate-200">
                        {gel.keterangan}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syarat Berkas Box */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-800" />
                  <span>Persyaratan Berkas Pendaftaran</span>
                </h4>
                <ul className="space-y-2.5">
                  {SYARAT_PENDAFTARAN.map((syarat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{syarat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-800" />
                <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
              </h3>
              <div className="space-y-3">
                {FAQ_PENDAFTARAN.map((faq, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      {faq.tanya}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.jawab}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotline WhatsApp Banner */}
            <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-base sm:text-lg font-bold text-amber-300">
                  Butuh Bantuan atau Konsultasi PSB?
                </h4>
                <p className="text-xs sm:text-sm text-slate-200">
                  Tim Panitia Penerimaan Santri Baru siap melayani pertanyaan Anda setiap hari kerja (08.00 - 16.00 WIB).
                </p>
              </div>
              <a
                href={`https://wa.me/6281288997721?text=Assalamu'alaikum%20Panitia%20PSB%20Raudhatul%20Muhibbin,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20santri%20baru.`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-blue-950 transition-colors shadow-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Panitia PSB ({PESANTREN_PROFILE.whatsappPSB})</span>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Modal Kartu Pendaftaran Print/View */}
      {showKartuModal && (
        <KartuPendaftaran
          data={showKartuModal}
          onClose={() => setShowKartuModal(null)}
        />
      )}
    </section>
  );
}
