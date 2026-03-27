import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RiverSection from './components/RiverSection';
import FishBehavior from './components/FishBehavior';
import FishingSpots from './components/FishingSpots';
import FishGallery from './components/FishGallery';
import Footer from './components/Footer';
import SpotDetail from './components/SpotDetail';
import { FishingSpot } from './data';
import { AnimatePresence, motion } from 'motion/react';

import ExplorationPanel from './components/ExplorationPanel';

export default function App() {
  const [selectedSpot, setSelectedSpot] = useState<FishingSpot | null>(null);
  const [isExplorationOpen, setIsExplorationOpen] = useState(false);

  // Scroll to top when spot is selected
  useEffect(() => {
    if (selectedSpot) {
      window.scrollTo(0, 0);
    }
  }, [selectedSpot]);

  return (
    <div className="min-h-screen bg-[#000000] selection:bg-white/20 selection:text-white font-sans overflow-x-hidden relative">
      <div className="relative z-10">
        <Navbar onExplore={() => setIsExplorationOpen(true)} />
        <main>
          <AnimatePresence mode="wait">
            {!selectedSpot ? (
              <motion.div 
                key="main-page"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              >
                <Hero />
                <RiverSection />
                <FishGallery />
                <FishBehavior />
                <FishingSpots onViewDetail={(spot) => setSelectedSpot(spot)} />
              </motion.div>
            ) : (
              <SpotDetail 
                key="detail-page" 
                spot={selectedSpot} 
                onBack={() => setSelectedSpot(null)} 
              />
            )}
          </AnimatePresence>
        </main>
        <Footer />
        
        <ExplorationPanel 
          isOpen={isExplorationOpen} 
          onClose={() => setIsExplorationOpen(false)} 
        />
      </div>
    </div>
  );
}
