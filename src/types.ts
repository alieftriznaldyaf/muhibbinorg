export type JenjangType = 'MTs_PESANTREN' | 'MA_PESANTREN' | 'TAKHASSUS_TAHFIDZ' | 'KMI_DINIYAH';

export type StatusPendaftaran = 'Menunggu Verifikasi' | 'Lolos Berkas' | 'Jadwal Tes Terbit' | 'Diterima' | 'Menunggu Konfirmasi';

export interface Guru {
  id: string;
  nama: string;
  gelar: string;
  peran: string; // misal: Pengasuh Pondok, Kepala Madrasah Aliyah, Mudir Tahfidz
  kategori: 'Pimpinan & Pengasuh' | 'Kitab Kuning & Syariah' | 'Tahfidzul Qur\'an' | 'Formal & Bahasa';
  bidangAjar: string[];
  almamater: string;
  pengalamanTahun: number;
  foto: string;
  biografi: string;
  pesanHikmah: string;
  kontakEmail?: string;
}

export interface Fasilitas {
  id: string;
  nama: string;
  kategori: 'Ibadah & Asrama' | 'Akademik & Kelas' | 'Kesehatan & Olahraga' | 'Penunjang & Layanan';
  deskripsi: string;
  kapasitas: string;
  keunggulan: string[];
  foto: string;
  lokasi: string;
}

export interface GaleriItem {
  id: string;
  judul: string;
  kategori: 'Ibadah & Tahfidz' | 'Kajian Kitab' | 'Ekstrakurikuler' | 'Pentas & Bahasa' | 'Sosial & Prestasi';
  tanggal: string;
  deskripsi: string;
  foto: string;
  lokasi: string;
}

export interface JadwalHarian {
  waktu: string;
  kegiatan: string;
  keterangan: string;
  iconName: string;
}

export interface PendaftaranData {
  nomorRegistrasi: string;
  tanggalDaftar: string;
  status: StatusPendaftaran;
  
  // Data Calon Santri
  namaLengkap: string;
  nik: string;
  nisn: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: 'Laki-laki' | 'Perempuan';
  jenjangPilihan: JenjangType;
  asalSekolah: string;
  hafalanAwal: string;
  hobiCitaCita: string;
  
  // Data Orang Tua / Wali
  namaAyah: string;
  pekerjaanAyah: string;
  namaIbu: string;
  pekerjaanIbu: string;
  nomorWhatsApp: string;
  emailWali: string;
  alamatLengkap: string;
  kabupatenKota: string;
  provinsi: string;
  
  // Catatan Khusus
  riwayatPenyakit: string;
  motivasi: string;
  jadwalUjian?: string;
  ruangUjian?: string;
}
