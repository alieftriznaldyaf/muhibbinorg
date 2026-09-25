/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';
import GuruSection from './components/GuruSection';
import FasilitasSection from './components/FasilitasSection';
import GaleriSection from './components/GaleriSection';
import PendaftaranSection from './components/PendaftaranSection';
import KontakFooter from './components/KontakFooter';
import DailyRoutineModal from './components/DailyRoutineModal';
import { JenjangType } from './types';
import { Phone, ArrowUp } from 'lucide-react';
import { PESANTREN_PROFILE } from './data/pesantrenData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [isRoutineModalOpen, setIsRoutineModalOpen] = useState<boolean>(false);
  const [selectedJenjang, setSelectedJenjang] = useState<JenjangType | undefined>(undefined);
  const [psbDefaultTab, setPsbDefaultTab] = useState<'form' | 'status' | 'info'>('form');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRegister = () => {
    setPsbDefaultTab('form');
    scrollToSection('pendaftaran');
  };

  const handleOpenCheckStatus = () => {
    setPsbDefaultTab('status');
    scrollToSection('pendaftaran');
  };

  const handleSelectJenjang = (jenjang: JenjangType) => {
    setSelectedJenjang(jenjang);
    setPsbDefaultTab('form');
    scrollToSection('pendaftaran');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased font-sans selection:bg-blue-600 selection:text-white">
      {/* Responsive Main Navigation Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenCheckStatus={handleOpenCheckStatus}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Banner Section */}
        <Hero
          onOpenRegister={handleOpenRegister}
          onOpenRoutine={() => setIsRoutineModalOpen(true)}
          onExploreProfile={() => scrollToSection('profil')}
        />

        {/* Profil Sekolah / Pesantren Section */}
        <ProfileSection
          onSelectJenjangToRegister={handleSelectJenjang}
          onOpenRoutine={() => setIsRoutineModalOpen(true)}
        />

        {/* Profil Dewan Guru & Asatidz Section */}
        <GuruSection />

        {/* Fasilitas Pesantren / Sarana Prasarana Section */}
        <FasilitasSection />

        {/* Galeri Foto Kegiatan Santri Section */}
        <GaleriSection />

        {/* Pendaftaran Santri Baru (PSB) Daring Section */}
        <PendaftaranSection
          initialJenjang={selectedJenjang}
          defaultTab={psbDefaultTab}
        />
      </main>

      {/* Kontak & Footer Section */}
      <KontakFooter
        onNavClick={scrollToSection}
        onOpenRegister={handleOpenRegister}
      />

      {/* 24-Hour Routine Schedule Modal */}
      <DailyRoutineModal
        isOpen={isRoutineModalOpen}
        onClose={() => setIsRoutineModalOpen(false)}
      />

      {/* Floating Action Button (FAB) for WhatsApp Consultation & Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 no-print">
        {/* WhatsApp Fast Consultation */}
        <a
          href={`https://wa.me/6281288997721?text=Assalamu'alaikum,%20saya%20ingin%20berkonsultasi%20mengenai%20Penerimaan%20Santri%20Baru%20Raudhatul%20Muhibbin.`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg shadow-blue-700/30 transition-all hover:scale-105"
          aria-label="Konsultasi WhatsApp PSB"
        >
          <Phone className="w-5 h-5 text-amber-300 fill-amber-300" />
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            Konsultasi PSB
          </span>
        </a>

        {/* Scroll Top Button */}
        <button
          onClick={() => scrollToSection('beranda')}
          className="p-2.5 bg-white/90 hover:bg-white text-slate-700 hover:text-blue-900 rounded-full shadow-md border border-slate-200 transition-colors"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
