import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SurfingSection from './components/SurfingSection';
import FilmsSection from './components/FilmsSection';
import TripsSection from './components/TripsSection';
import Calendar from './components/Calendar';
import CompetitionSection from './components/CompetitionSection';
import SkatingSection from './components/SkatingSection';
import CrewSection from './components/CrewSection';
import Footer from './components/Footer';
import StripePricing from './components/StripePricing'; // Import StripePricing

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <HeroSection />
      <StripePricing /> {/* Replace MerchSection with StripePricing */}
      <CrewSection />
      <Calendar id="calendar" />
      <SurfingSection />
      <TripsSection />
      <CompetitionSection />
      <SkatingSection />
      <Footer />
    </div>
  );
}

