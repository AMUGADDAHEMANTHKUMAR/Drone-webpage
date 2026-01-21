'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSectionVideo from '@/components/HeroSectionVideo';
import CloseupGalleryVideo from '@/components/CloseupGalleryVideo';
import PricingTiers from '@/components/PricingTiers';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <HeroSectionVideo />
      <CloseupGalleryVideo onContactClick={() => setIsContactOpen(true)} />
      <PricingTiers onContactClick={() => setIsContactOpen(true)} />
      <Footer />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
