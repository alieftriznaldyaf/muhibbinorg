import { Guru, Fasilitas, GaleriItem, JadwalHarian, PendaftaranData } from '../types';

export const PESANTREN_PROFILE = {
  nama: 'Pondok Pesantren Raudhatul Muhibbin',
  tagline: 'Taman Pecinta Ilmu, Al-Qur\'an, dan Akhlakul Karimah',
  arabTagline: 'رَوْضَةُ الْمُحِبِّيْنَ لِلتَّرْبِيَةِ وَالتَّعْلِيْمِ الْإِسْلَامِيِّ',
  tahunBerdiri: 1998,
  nomorNSP: '510032010892',
  akreditasi: 'A (Unggul) BAN-SM & Kemenag RI',
  pimpinan: 'KH. Dr. Ahmad Zaki Mubarak, M.Ag & Nyai Hj. Siti Fatimah Al-Hafizhah',
  alamat: 'Jl. Pesantren Raya No. 45, Ciseeng, Parung, Bogor, Jawa Barat 16120',
  telepon: '(0251) 854-2201',
  whatsappPSB: '+62 812-8899-7721',
  email: 'sekretariat@raudhatulmuhibbin.ponpes.id',
  website: 'https://raudhatulmuhibbin.ponpes.id',
  
  sejarah: 'Pondok Pesantren Raudhatul Muhibbin didirikan pada tahun 1998 atas restu para ulama sepuh sebagai wadah mencetak generasi penerus bangsa yang bertafaqquh fiddin (mendalami ilmu agama), berwawasan global, dan berjiwa pemersatu ummat. Nama "Raudhatul Muhibbin" yang bermakna "Taman Para Pecinta" mencerminkan filosofi pendidikan yang mendasarkan proses belajar mengajar atas rasa mahabbah (cinta) kepada Allah SWT, Rasulullah SAW, para ulama, serta ilmu pengetahuan yang bermanfaat bagi kemaslahatan manusia.',
  
  visi: 'Menjadi pusat peradaban pendidikan Islam terkemuka yang mencetak ulama amilin, cendekiawan berakhlak Qur\'ani, berjiwa mandiri, dan berdaya saing internasional.',
  
  misi: [
    'Menyelenggarakan sistem pendidikan terpadu yang memadukan kedalaman tradisi kitab kuning (salaf) dengan keunggulan sains modern (khalaf).',
    'Membina santri agar mutqin dalam menghafal Al-Qur\'an 30 Juz serta mampu mengamalkan nilai-nilainya dalam kehidupan bermasyarakat.',
    'Menumbuhkan pembiasaan berbahasa Arab dan Inggris secara aktif sebagai bekal dakwah dan kiprah global.',
    'Mendidik karakter santri dengan Panca Jiwa Pesantren: Keikhlasan, Kesederhanaan, Berdikari, Ukhuwah Islamiyah, dan Kebebasan Berpikir.',
    'Menumbuhkan jiwa kepemimpinan, kewirausahaan, dan kepedulian sosial santri terhadap umat.'
  ],

  pancaJiwa: [
    {
      judul: 'Keikhlasan',
      keterangan: 'Ikhlas beramal semata-mata mengharap ridho Allah SWT tanpa pamrih duniawi.'
    },
    {
      judul: 'Kesederhanaan',
      keterangan: 'Gaya hidup bersahaja, anggun bersikap, tangguh menghadapi dinamika zaman.'
    },
    {
      judul: 'Kemandirian (Berdikari)',
      keterangan: 'Sanggup mengurus diri sendiri, kreatif memecahkan masalah, dan tidak bergantung pada orang lain.'
    },
    {
      judul: 'Ukhuwah Islamiyah',
      keterangan: 'Persaudaraan erat laksana satu tubuh, saling menyayangi, menghargai keberagaman.'
    },
    {
      judul: 'Kebebasan Terarah',
      keterangan: 'Bebas mengembangkan potensi diri, bernalar kritis dalam koridor syariat Islam.'
    }
  ],

  jenjangPendidikan: [
    {
      id: 'MTs_PESANTREN',
      nama: 'Madrasah Tsanawiyah (MTs) & Pesantren Terpadu',
      durasi: '3 Tahun (Setara SMP)',
      deskripsi: 'Kurikulum Kemenag Terakreditasi A dipadukan dengan Dirasah Islamiyah Salaf, Tahfidz dasar (5-10 Juz), serta pembiasaan muhadatsah bahasa Arab & Inggris.',
      biayaPendaftaran: 'Rp 250.000',
      kuotaTersedia: '120 Santri'
    },
    {
      id: 'MA_PESANTREN',
      nama: 'Madrasah Aliyah (MA) Jurusan IPA & Keagamaan',
      durasi: '3 Tahun (Setara SMA)',
      deskripsi: 'Mempersiapkan santri menembus perguruan tinggi favorit dalam dan luar negeri (Al-Azhar Kairo, Timur Tengah, ITB, UI, UGM) dengan penguasaan sains dan kitab turats.',
      biayaPendaftaran: 'Rp 250.000',
      kuotaTersedia: '90 Santri'
    },
    {
      id: 'TAKHASSUS_TAHFIDZ',
      nama: 'Takhassus Tahfidzul Qur\'an 30 Juz Mutqin',
      durasi: '2 - 3 Tahun',
      deskripsi: 'Program intensif menghafal Al-Qur\'an dengan metode Talaqqi & Sanad bersambung, ilmu Tajwid, Matan Jazariyyah, serta pemahaman tafsir dasar.',
      biayaPendaftaran: 'Rp 200.000',
      kuotaTersedia: '50 Santri'
    },
    {
      id: 'KMI_DINIYAH',
      nama: 'Kulliyyatul Mu\'allimin Al-Islamiyyah (KMI) / Salafiyah',
      durasi: '6 Tahun (Pasca SD/MI)',
      deskripsi: 'Pendidikan kader ulama dan guru Islam dengan penguasaan mendalam terhadap Nahwu Sharaf, Ushul Fiqih, Balaghah, dan Fiqih Muqaran.',
      biayaPendaftaran: 'Rp 250.000',
      kuotaTersedia: '60 Santri'
    }
  ],

  statistik: [
    { label: 'Santri Aktif', nilai: '1.450+', sub: 'Putra & Putri dari 28 Provinsi' },
    { label: 'Dewan Asatidz', nilai: '85', sub: 'Lulusan Timur Tengah & Nusantara' },
    { label: 'Alumni Tersebar', nilai: '4.800+', sub: 'Kiprah Dakwah, Akademisi & Wirausaha' },
    { label: 'Luas Kompleks', nilai: '7,5 Ha', sub: 'Kawasan Hijau, Asri & Kondusif' }
  ]
};

export const JADWAL_HARIAN: JadwalHarian[] = [
  {
    waktu: '03.30 - 04.30',
    kegiatan: 'Qiyamullail & Sholat Tahajud Berjamaah',
    keterangan: 'Pembersihan qolbu, muhasabah pribadi, dan doa bersama di Masjid Jami\'.',
    iconName: 'Moon'
  },
  {
    waktu: '04.30 - 05.30',
    kegiatan: 'Sholat Subuh Berjamaah & Wirid Ratib',
    keterangan: 'Dilanjutkan kajian rutin Al-Qur\'an dan setoran hafalan pagi (Sabaq).',
    iconName: 'Sun'
  },
  {
    waktu: '05.30 - 06.30',
    kegiatan: 'Pengembangan Bahasa & Olahraga Pagi',
    keterangan: 'Pemberian mufrodat (kosakata baru Arab-Inggris) & senam kesegaran jasmani.',
    iconName: 'Activity'
  },
  {
    waktu: '06.30 - 07.15',
    kegiatan: 'Sarapan Pagi & Persiapan Masuk Kelas',
    keterangan: 'Makan bersama higienis dan persiapan seragam resmi madrasah.',
    iconName: 'Coffee'
  },
  {
    waktu: '07.15 - 12.00',
    kegiatan: 'Kegiatan Belajar Mengajar (KBM) Formal',
    keterangan: 'Pelajaran kurikulum nasional & kepesantrenan di ruang kelas ber-AC & multimedia.',
    iconName: 'BookOpen'
  },
  {
    waktu: '12.00 - 13.30',
    kegiatan: 'Sholat Dzuhur Berjamaah & Makan Siang',
    keterangan: 'Kultum santri, makan siang bergizi seimbang, dan istirahat sejenak (Qailulah).',
    iconName: 'Users'
  },
  {
    waktu: '13.30 - 15.00',
    kegiatan: 'Lanjutan KBM & Praktikum Laboratorium',
    keterangan: 'Pendalaman sains, lab komputer, dan pembelajaran interaktif.',
    iconName: 'Monitor'
  },
  {
    waktu: '15.00 - 16.30',
    kegiatan: 'Sholat Ashar & Sorogan / Wetonan Kitab Kuning',
    keterangan: 'Mengaji kitab Fathul Qorib, Jurumiyyah, Arbain Nawawi bersama Ustadz senior.',
    iconName: 'Feather'
  },
  {
    waktu: '16.30 - 17.30',
    kegiatan: 'Ekstrakurikuler & Olahraga Sore',
    keterangan: 'Panahan, futsal, silat Tapak Suci, hadroh banjari, pramuka, dan kaligrafi.',
    iconName: 'Compass'
  },
  {
    waktu: '17.30 - 20.00',
    kegiatan: 'Sholat Maghrib, Tadarus & Isya Berjamaah',
    keterangan: 'Muraja\'ah hafalan Qur\'an bersama musyrif halaqah dan makan malam bersama.',
    iconName: 'HeartHandshake'
  },
  {
    waktu: '20.00 - 21.30',
    kegiatan: 'Belajar Terbimbing (Takrar) & Muhadharah',
    keterangan: 'Latihan pidato 3 bahasa (Indonesia, Arab, Inggris) dan persiapan pelajaran esok hari.',
    iconName: 'Award'
  },
  {
    waktu: '21.30 - 22.00',
    kegiatan: 'Absensi Malam & Membaca Doa Tidur',
    keterangan: 'Santri istirahat teratur demi menjaga kebugaran fisik dan kejernihan akal.',
    iconName: 'Bed'
  }
];

export const GURU_LIST: Guru[] = [
  {
    id: 'g-1',
    nama: 'Dr. KH. Ahmad Zaki Mubarak, M.Ag',
    gelar: 'Pengasuh & Pimpinan Umum Pesantren',
    peran: 'Pengasuh & Pengampu Kitab Ihya\' Ulumiddin',
    kategori: 'Pimpinan & Pengasuh',
    bidangAjar: ['Tasawuf (Ihya Ulumiddin)', 'Tafsir Jalalain', 'Ushul Fiqih'],
    almamater: 'S1 Univ. Al-Azhar Kairo, S2 UIN Syarif Hidayatullah, S3 UIN Sunan Kalijaga',
    pengalamanTahun: 26,
    foto: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    biografi: 'Kyai kharismatik yang mendedikasikan hidupnya untuk dakwah wasathiyah (Islam moderat). Beliau mengasuh santri dengan pendekatan kasih sayang orang tua dan mengedepankan keteladanan akhlak.',
    pesanHikmah: 'Ilmu tanpa adab ibarat api tanpa kayu bakar. Jadikanlah Al-Qur\'an lentera di dadamu dan cinta Rasulullah sebagai nafas kehidupanmu.',
    kontakEmail: 'pimpinan@raudhatulmuhibbin.ponpes.id'
  },
  {
    id: 'g-2',
    nama: 'Nyai Hj. Siti Fatimah, S.Pd.I, Al-Hafizhah',
    gelar: 'Pengasuh Pondok Putri & Mudirah Tahfidz Putri',
    peran: 'Ketua Dewan Pembina Tahfidzul Qur\'an Putri',
    kategori: 'Tahfidzul Qur\'an',
    bidangAjar: ['Tahfidz Al-Qur\'an 30 Juz', 'Tajwid & Jazariyyah', 'Adab Hamalatil Qur\'an'],
    almamater: 'Pondok Pesantren Al-Munawwir Krapyak Yogyakarta & PTIQ Jakarta',
    pengalamanTahun: 21,
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    biografi: 'Hafizhah 30 juz bersanad yang telah meluluskan ratusan santriwati penghafal Al-Qur\'an. Mengasuh halaqah tahfidz dengan ketelitian makharijul huruf dan kelembutan jiwa.',
    pesanHikmah: 'Menghafal Al-Qur\'an adalah ikatan cinta seumur hidup. Jaga kesucian hafalan dengan menjauhi kemaksiatan dan gemar bersedekah.',
    kontakEmail: 'tahfidzputri@raudhatulmuhibbin.ponpes.id'
  },
  {
    id: 'g-3',
    nama: 'Ustadz H. Muhammad Ridwan, Lc., M.H',
    gelar: 'Kepala Madrasah Aliyah & Pakar Fiqih',
    peran: 'Dosen Kepesantrenan & Pengajar Fiqih Muqaran',
    kategori: 'Kitab Kuning & Syariah',
    bidangAjar: ['Fiqih & Ushul Fiqih', 'Fathul Wahhab', 'Kaidah Fiqhiyyah'],
    almamater: 'S1 Syariah Univ. Al-Ahgaff Tarim Yaman, S2 Magister Hukum Islam',
    pengalamanTahun: 15,
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    biografi: 'Alumni Hadhramaut yang mendalam dalam fiqih madzhab Syafi\'i. Mengajar dengan metode musyawarah ilmiah yang merangsang daya kritis dan kepahaman dalil santri.',
    pesanHikmah: 'Fiqih itu meluaskan cara pandang, bukan mempersempit persaudaraan. Semakin luas ilmumu, semakin bijak engkau dalam bersikap.',
    kontakEmail: 'ridwan.lc@raudhatulmuhibbin.ponpes.id'
  },
  {
    id: 'g-4',
    nama: 'Ustadz Syamsul Hadi, S.S., M.Pd',
    gelar: 'Kepala Bagian Pengembangan Bahasa Asing (LAC)',
    peran: 'Direktur Pusat Bahasa Arab & Inggris',
    kategori: 'Formal & Bahasa',
    bidangAjar: ['Muhadatsah Bahasa Arab', 'English Public Speaking', 'Balaghah & Sastra'],
    almamater: 'KMI Pondok Modern Gontor & Univ. Negeri Jakarta',
    pengalamanTahun: 14,
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    biografi: 'Pakar metodologi akselerasi bahasa santri. Pelopor program bi\'ah lughawiyyah (lingkungan berbahasa 24 jam) yang menyenangkan dan komunikatif.',
    pesanHikmah: 'Bahasa adalah kunci jendela peradaban. Kuasai bahasa dunia untuk menyampaikan risalah rahmatan lil \'alamin.',
    kontakEmail: 'bahasa@raudhatulmuhibbin.ponpes.id'
  },
  {
    id: 'g-5',
    nama: 'Ustadz Ahmad Fauzi Al-Hafizh, S.Th.I',
    gelar: 'Mudir Markaz Tahfidz Putra',
    peran: 'Koordinator Halaqah Tahfidz & Sanad Al-Qur\'an',
    kategori: 'Tahfidzul Qur\'an',
    bidangAjar: ['Tahfidz 30 Juz', 'Qira\'at Sab\'ah', 'Naghom / Seni Tilawah'],
    almamater: 'Institut Ilmu Al-Qur\'an (IIQ) & Pesantren Tahfidz Kudus',
    pengalamanTahun: 12,
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    biografi: 'Qari\' berprestasi tingkat nasional yang membina santri dengan teknik talaqqi musyafahah. Berpengalaman melatih seni tilawah dan muraja\'ah terprogram.',
    pesanHikmah: 'Siapa yang menghormati Al-Qur\'an, Allah akan muliakan hidupnya di dunia hingga ke surga tertinggi kelak.',
    kontakEmail: 'fauzi.tahfidz@raudhatulmuhibbin.ponpes.id'
  },
  {
    id: 'g-6',
    nama: 'Ustadzah Nurul Izzah, M.Si',
    gelar: 'Kepala Laboratorium Sains & Guru Matematika',
    peran: 'Koordinator Olimpiade Sains Madrasah (KSM/OSN)',
    kategori: 'Formal & Bahasa',
    bidangAjar: ['Matematika Terapan', 'Fisika Dasar', 'Robotika Santri'],
    almamater: 'S1 & S2 Institut Pertanian Bogor (IPB)',
    pengalamanTahun: 10,
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    biografi: 'Guru sains berprestasi yang membuktikan bahwa santri berpeci dan berkerudung mampu bersaing di kancah olimpiade sains dan kompetisi robotika internasional.',
    pesanHikmah: 'Sains menguak keteraturan ciptaan Allah di alam semesta, memantapkan keimanan melalui bukti-bukti nyata kauniyyah.',
    kontakEmail: 'sains@raudhatulmuhibbin.ponpes.id'
  },
  {
    id: 'g-7',
    nama: 'Ustadz KH. Burhanuddin Harahap, Lc',
    gelar: 'Wakil Pengasuh Bidang Pengasuhan Santri',
    peran: 'Majelis Syuro Pesantren & Pembina Kedisiplinan',
    kategori: 'Pimpinan & Pengasuh',
    bidangAjar: ['Nahwu Sharaf (Alfiyyah Ibnu Malik)', 'Ilmu Tauhid / Aqidah', 'Akhlaqul Banin'],
    almamater: 'Pondok Pesantren Lirboyo Kediri & Univ. Islam Madinah',
    pengalamanTahun: 22,
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    biografi: 'Ulama senior yang teguh menjaga tradisi kajian bandongan dan sorogan kitab matan. Dikenal sangat dekat dengan para santri sebagai figur ayah yang mengayomi.',
    pesanHikmah: 'Menuntut ilmu butuh kesabaran dan keistiqamahan. Air yang menetes terus menerus kelak akan melubangi batu yang keras sekalipun.',
    kontakEmail: 'burhan.lirboyo@raudhatulmuhibbin.ponpes.id'
  },
  {
    id: 'g-8',
    nama: 'Ustadzah Dra. Hj. Maryam Sholihat',
    gelar: 'Kepala Madrasah Tsanawiyah (MTs)',
    peran: 'Pengembang Kurikulum Terpadu Pesantren',
    kategori: 'Formal & Bahasa',
    bidangAjar: ['Sejarah Kebudayaan Islam (SKI)', 'Bimbingan Konseling Santri'],
    almamater: 'UIN Sunan Gunung Djati Bandung',
    pengalamanTahun: 19,
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    biografi: 'Pendidik wanita berpengalaman yang merancang integrasi kurikulum Kemenag dengan muatan lokal kepesantrenan santri usia remaja.',
    pesanHikmah: 'Setiap anak memiliki mutiara kebaikan dalam dirinya. Tugas pendidik adalah menggosok mutiara itu hingga berkilau indah.',
    kontakEmail: 'mts@raudhatulmuhibbin.ponpes.id'
  }
];

export const FASILITAS_LIST: Fasilitas[] = [
  {
    id: 'f-1',
    nama: 'Masjid Jami\' Raudhatul Muhibbin',
    kategori: 'Ibadah & Asrama',
    deskripsi: 'Pusat spiritual santri berarsitektur paduan Timur Tengah dan Nusantara dengan ornamen kaligrafi kayu jati. Berlantai marmer sejuk, sound system akustik modern, dan area wudhu yang luas.',
    kapasitas: '2.500 Jamaah',
    keunggulan: ['Kawasan Sholat Berjamaah 5 Waktu', 'Pusat Halaqah Tahfidz & Pengajian Umum', 'Kubah Megah & Udara Alami Sejuk'],
    foto: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Kompleks Inti Pesantren'
  },
  {
    id: 'f-2',
    nama: 'Asrama Santri Representatif (Putra & Putri Terpisah)',
    kategori: 'Ibadah & Asrama',
    deskripsi: 'Gedung asrama 3 lantai dengan ventilasi optimal, ranjang bertingkat kokoh, lemari santri individual, kamar mandi dalam jumlah memadai, serta diawasi wali asrama (musyrif/musyrifah) 24 jam.',
    kapasitas: '1.600 Tempat Tidur',
    keunggulan: ['Keamanan CCTV 24 Jam & Pos Jaga', 'Air Bersih Pegunungan Melimpah', 'Ruang Belajar & Diskusi Kamar'],
    foto: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Sayap Timur (Putra) & Sayap Barat (Putri)'
  },
  {
    id: 'f-3',
    nama: 'Gedung Madrasah & Ruang Kelas Multimedia',
    kategori: 'Akademik & Kelas',
    deskripsi: '36 ruang kelas modern ber-AC yang dilengkapi Smart Board Interactive, proyektor laser, kursi ergonomis, serta jaringan Wi-Fi intranet edukasi yang terfilter aman.',
    kapasitas: '36 Ruang Kelas (30 siswa/kelas)',
    keunggulan: ['Papan Tulis Interaktif Canggih', 'Pencahayaan Alami Sehat untuk Belajar', 'Laboratorium Bahasa Terintegrasi'],
    foto: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Gedung Pendidikan Terpadu Lantai 1-3'
  },
  {
    id: 'f-4',
    nama: 'Maktabah (Perpustakaan Digital & Kitab Turats)',
    kategori: 'Akademik & Kelas',
    deskripsi: 'Menyimpan lebih dari 12.000 judul kitab kuning salaf, ensiklopedia Islam klasik, buku teks sains modern, serta workstation e-library dengan akses ke jurnal internasional.',
    kapasitas: '150 Pengunjung Sekaligus',
    keunggulan: ['Koleksi Kitab Kuning Lengkap Berharakat', 'E-Library & Akses Maktabah Syamilah', 'Area Baca Lesehan & Kubikel Hening'],
    foto: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Gedung Perpustakaan Lantai 2'
  },
  {
    id: 'f-5',
    nama: 'Laboratorium Komputer, Multimedia & Robotika',
    kategori: 'Akademik & Kelas',
    deskripsi: 'Dua laboratorium komputer modern berkemampuan tinggi untuk pelatihan coding, desain grafis, editing video dakwah, ujian berbasis komputer (CBT), dan riset sains santri.',
    kapasitas: '80 Unit PC All-in-One High Specs',
    keunggulan: ['Server CBT Terstandar Nasional', 'Pelatihan Desain & Multimedia Dakwah', 'Koneksi Fiber Optik Dedicated'],
    foto: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Gedung Sains & Teknologi Lantai 1'
  },
  {
    id: 'f-6',
    nama: 'Kompleks Olahraga & Lapangan Terpadu',
    kategori: 'Kesehatan & Olahraga',
    deskripsi: 'Fasilitas kebugaran santri meliputi lapangan futsal rumput sintetis, lapangan basket standar perbasi, lapangan bulutangkis indoor, arena panahan sunnah, dan lintasan lari.',
    kapasitas: '500 Penonton Tribun',
    keunggulan: ['Lapangan Futsal & Basket Bertaraf Standar', 'Area Panahan (Archery Range) Sunnah', 'Pencahayaan Lampu Sorot Malam Hari'],
    foto: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Area Terbuka Hijau Selatan'
  },
  {
    id: 'f-7',
    nama: 'Pos Kesehatan Pesantren (Poskestren) & Ruang Rawat',
    kategori: 'Kesehatan & Olahraga',
    deskripsi: 'Klinik rawat tingkat pertama yang siaga 24 jam dengan dokter mitra, perawat medis bersertifikat, apotek mini, serta mobil ambulans santri untuk rujukan rumah sakit cepat.',
    kapasitas: '12 Ranjang Rawat Inap Sementara',
    keunggulan: ['Dokter Jaga & Perawat Standby 24 Jam', 'Pemeriksaan Kesehatan Berkala Gratis', 'Mobil Ambulans Siaga'],
    foto: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Dekat Gerbang Utama Pesantren'
  },
  {
    id: 'f-8',
    nama: 'Dapur Umum Higienis & Kantin Halal Koperasi',
    kategori: 'Penunjang & Layanan',
    deskripsi: 'Dapur berstandar sanitasi ketat yang menyajikan makanan sehat 3 kali sehari dengan menu gizi teratur yang diawasi ahli gizi, serta minimarket koperasi kebutuhan harian santri.',
    kapasitas: 'Menyajikan 4.500 Porsi per Hari',
    keunggulan: ['Sertifikasi Higiene Sanitasi Kemenkes', 'Bahan Segar dari Mitra Petani Lokal', 'Sistem Pembayaran Digital Cashless Santri'],
    foto: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Area Servis Sentral'
  },
  {
    id: 'f-9',
    nama: 'Aula Pertemuan Serbaguna (Auditorium Al-Muhibbin)',
    kategori: 'Penunjang & Layanan',
    deskripsi: 'Gedung pertemuan megah untuk acara wisuda santri, seminar nasional, musabaqah tilawatil qur\'an, panggung gembira seni santri, dan pertemuan akbar wali santri.',
    kapasitas: '1.800 Kursi Hadirin',
    keunggulan: ['Panggung Teater Luas & Lighting Canggih', 'Videotron Raksasa P2.5 Indoor', 'Ruang Transit VVIP Ulama & Pejabat'],
    foto: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Kompleks Depan Pesantren'
  }
];

export const GALERI_LIST: GaleriItem[] = [
  {
    id: 'gal-1',
    judul: 'Halaqah Tahfidz Subuh Berjamaah di Masjid Jami\'',
    kategori: 'Ibadah & Tahfidz',
    tanggal: '18 September 2026',
    deskripsi: 'Suasana khidmat santri melantunkan ayat suci Al-Qur\'an secara tartil di hadapan para musyrif hafizh Al-Qur\'an selepas sholat subuh.',
    foto: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Masjid Jami\' Raudhatul Muhibbin'
  },
  {
    id: 'gal-2',
    judul: 'Kajian Bandongan Kitab Ihya\' Ulumiddin bersama Pengasuh',
    kategori: 'Kajian Kitab',
    tanggal: '12 September 2026',
    deskripsi: 'Kajian kitab kuning klasik bersama Dr. KH. Ahmad Zaki Mubarak, mengupas rahasia pensucian jiwa (tazkiyatun nafs) dan akhlak bertetangga.',
    foto: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Serambi Utama Masjid'
  },
  {
    id: 'gal-3',
    judul: 'Panggung Gembira (Mahrajan Fanun) Pentas Seni Santri',
    kategori: 'Pentas & Bahasa',
    tanggal: '28 Agustus 2026',
    deskripsi: 'Ajang unjuk kreativitas santri menampilkan drama tari islami, orkestra gambus hadroh, puisi 3 bahasa, dan atraksi beladiri Tapak Suci.',
    foto: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Auditorium Al-Muhibbin'
  },
  {
    id: 'gal-4',
    judul: 'Latihan Pidato Tiga Bahasa (Muhadharah Kubro)',
    kategori: 'Pentas & Bahasa',
    tanggal: '15 Agustus 2026',
    deskripsi: 'Santri melatih kepemimpinan publik dan retorika dakwah dalam Bahasa Arab, Inggris, dan Indonesia dengan penuh rasa percaya diri.',
    foto: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Ruang Aula Madrasah'
  },
  {
    id: 'gal-5',
    judul: 'Turnamen Futsal & Latihan Panahan Santri Juara',
    kategori: 'Ekstrakurikuler',
    tanggal: '05 Agustus 2026',
    deskripsi: 'Santri mengasah ketangkasan fisik, sportivitas, dan ukhuwah melalui olahraga sunnah memanah serta kompetisi futsal antar asrama.',
    foto: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Arena Olahraga Santri'
  },
  {
    id: 'gal-6',
    judul: 'Wisuda Akbar Tahfidz 30 Juz & Khotmil Qur\'an Bil Ghaib',
    kategori: 'Sosial & Prestasi',
    tanggal: '20 Juli 2026',
    deskripsi: 'Momen penuh haru saat para santri memakaikan mahkota kemuliaan kepada kedua orang tua mereka dalam prosesi tasyakur kelulusan hafalan.',
    foto: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Auditorium Utama'
  },
  {
    id: 'gal-7',
    judul: 'Praktikum Sains & Coding di Laboratorium Komputer',
    kategori: 'Ekstrakurikuler',
    tanggal: '14 Juli 2026',
    deskripsi: 'Pembelajaran modern memadukan ilmu agama dengan kemampuan teknologi informasi, web development, dan programming kecerdasan buatan dasar.',
    foto: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Lab Komputer 1'
  },
  {
    id: 'gal-8',
    judul: 'Bakti Sosial & Safari Dakwah Santri di Desa Binaan',
    kategori: 'Sosial & Prestasi',
    tanggal: '01 Juli 2026',
    deskripsi: 'Santri senior terjun ke masyarakat membagikan sembako berkah, mengajar TPA anak-anak desa, dan membersihkan musholla pelosok.',
    foto: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Desa Binaan Ciseeng'
  },
  {
    id: 'gal-9',
    judul: 'Lalaran Nadhom Alfiyyah & Jurumiyyah Bersama',
    kategori: 'Kajian Kitab',
    tanggal: '22 Juni 2026',
    deskripsi: 'Tradisi santri melantunkan bait-bait gramatika bahasa Arab (Nadhom Alfiyyah) dengan irama khas yang merdu dan memudahkan hafalan kaidah.',
    foto: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80',
    lokasi: 'Bale Riung Pesantren'
  }
];

export const INITIAL_MOCK_REGISTRATIONS: PendaftaranData[] = [
  {
    nomorRegistrasi: 'RM-2026-0819',
    tanggalDaftar: '2026-09-15',
    status: 'Lolos Berkas',
    namaLengkap: 'Muhammad Ilham Robbani',
    nik: '3201140508100003',
    nisn: '0108923412',
    tempatLahir: 'Bogor',
    tanggalLahir: '2012-05-14',
    jenisKelamin: 'Laki-laki',
    jenjangPilihan: 'MTs_PESANTREN',
    asalSekolah: 'SDIT Al-Hikmah Parung',
    hafalanAwal: '3 Juz (Juz 30, 29, 28)',
    hobiCitaCita: 'Membaca Kitab & Ingin Menjadi Ulama Diplomat',
    namaAyah: 'Drs. H. Hendra Gunawan',
    pekerjaanAyah: 'PNS Guru',
    namaIbu: 'Hj. Siti Rohmah, S.Pd',
    pekerjaanIbu: 'Wiraswasta',
    nomorWhatsApp: '081234567890',
    emailWali: 'hendra.gunawan@example.com',
    alamatLengkap: 'Jl. Melati Indah No. 12 RT 04/RW 02',
    kabupatenKota: 'Bogor',
    provinsi: 'Jawa Barat',
    riwayatPenyakit: 'Tidak ada penyakit kronis, sehat wal afiat',
    motivasi: 'Ingin mendalami ilmu agama dengan sanad ulama terpercaya dan menjadi penghafal Al-Qur\'an.',
    jadwalUjian: 'Sabtu, 24 Oktober 2026 - Pukul 08.00 WIB',
    ruangUjian: 'Gedung KBM Lantai 2 / R-04'
  },
  {
    nomorRegistrasi: 'RM-2026-0942',
    tanggalDaftar: '2026-09-18',
    status: 'Menunggu Verifikasi',
    namaLengkap: 'Aisyah Putri Humaira',
    nik: '3174025506090001',
    nisn: '0098712390',
    tempatLahir: 'Jakarta Selatan',
    tanggalLahir: '2010-06-25',
    jenisKelamin: 'Perempuan',
    jenjangPilihan: 'MA_PESANTREN',
    asalSekolah: 'MTs Negeri 1 Jakarta',
    hafalanAwal: '5 Juz Mutqin',
    hobiCitaCita: 'Riset Biologi & Ingin Kuliah Kedokteran di Al-Azhar Kairo',
    namaAyah: 'Ir. Ahmad Baihaqi, M.T',
    pekerjaanAyah: 'Karyawan Swasta',
    namaIbu: 'drg. Maya Lestari',
    pekerjaanIbu: 'Dokter Gigi',
    nomorWhatsApp: '081398765432',
    emailWali: 'baihaqi.family@example.com',
    alamatLengkap: 'Komp. Batan Indah Blok C No. 7',
    kabupatenKota: 'Jakarta Selatan',
    provinsi: 'DKI Jakarta',
    riwayatPenyakit: 'Alergi dingin ringan',
    motivasi: 'Mendapat pendidikan berimbang antara ilmu syariah dan sains dengan lingkungan asrama yang terjaga akhlaknya.',
    jadwalUjian: 'Minggu, 25 Oktober 2026 - Pukul 08.30 WIB',
    ruangUjian: 'Gedung Auditorium Putri / R-02'
  }
];

export const JADWAL_SELEKSI_PSB = [
  {
    gelombang: 'Gelombang 1 (Jalur Prestasi & Reguler Awal)',
    periode: '01 September 2026 - 15 November 2026',
    tesSeleksi: '22 November 2026',
    pengumuman: '29 November 2026',
    status: 'Sedang Dibuka',
    keterangan: 'Potongan biaya perlengkapan 25% bagi pendaftar gelombang pertama.'
  },
  {
    gelombang: 'Gelombang 2 (Jalur Reguler Umum)',
    periode: '01 Desember 2026 - 28 Februari 2027',
    tesSeleksi: '07 Maret 2027',
    pengumuman: '14 Maret 2027',
    status: 'Segera Dibuka',
    keterangan: 'Pendaftaran ditutup lebih awal jika kuota terpenuhi.'
  }
];

export const SYARAT_PENDAFTARAN = [
  'Mengisi formulir pendaftaran daring secara lengkap dan benar.',
  'Pas foto calon santri ukuran 3x4 berwarna (latar merah untuk putra, latar biru untuk putri, berpeci/berkerudung).',
  'Fotokopi Kartu Keluarga (KK) dan Akta Kelahiran calon santri (2 lembar).',
  'Fotokopi rapor 2 semester terakhir dari sekolah/madrasah asal.',
  'Surat keterangan sehat dan bebas narkoba / penyakit menular dari dokter/Puskesmas.',
  'Membayar biaya pendaftaran sebesar Rp 250.000 (Melalui Virtual Account / Rekening Resmi BSI).',
  'Mengikuti ujian seleksi (Tes Membaca Al-Qur\'an, Tajwid, Wawancara Kepribadian & Motivasi Santri/Wali).'
];

export const FAQ_PENDAFTARAN = [
  {
    tanya: 'Apakah santri diperbolehkan membawa gadget / smartphone ke asrama?',
    jawab: 'Untuk menjaga kekhusyukan belajar dan ibadah, santri tidak diperkenankan membawa gadget pribadi ke dalam asrama. Komunikasi dengan wali santri difasilitasi melalui jadwal telepon asrama berkala serta nomor wali asrama (musyrif/musyrifah).'
  },
  {
    tanya: 'Bagaimana sistem perizinan keluar atau kepulangan santri?',
    jawab: 'Santri memiliki jadwal sambangan keluarga setiap 2 pekan sekali pada hari Minggu. Adapun libur kepulangan resmi berlangsung pada libur akhir semester ganjil, hari raya Idul Fitri, dan libur tahun ajaran baru.'
  },
  {
    tanya: 'Apakah calon santri yang belum lancar membaca Al-Qur\'an bisa mendaftar?',
    jawab: 'Bisa. Pesantren memiliki kelas matrikulasi khusus (Qira\'ati / Tahsin Awal) bagi santri baru untuk menyamakan standar bacaan sebelum masuk ke kurikulum kitab dan tahfidz intensif.'
  },
  {
    tanya: 'Bagaimana penanganan kesehatan jika santri sakit?',
    jawab: 'Pesantren memiliki Poskestren dengan perawat standby 24 jam dan dokter visit berkala. Jika membutuhkan penanganan lebih lanjut, pihak asrama segera merujuk ke RSUD terdekat dan menginformasikan langsung kepada wali santri.'
  }
];
