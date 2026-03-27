import React from 'react';
import { motion } from 'motion/react';
import { FISH_SPECIES } from '../data';
import { Info } from 'lucide-react';

const FishGallery = () => {
  return (
    <section id="fish-gallery" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic flex flex-col">
              常见鱼种 
              <span className="text-gradient text-sm md:text-xl tracking-[0.2em] mt-2 not-italic font-medium">FISH SPECIES</span>
            </h2>
            <p className="text-lg text-gray-400 font-medium tracking-tight">
              了解广州水域常见的淡水鱼类，包括其习性与垂钓要点。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FISH_SPECIES.map((fish, index) => (
            <motion.div
              key={fish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`group relative glass glass-hover rounded-[24px] overflow-hidden subtle-glow ${
                index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="h-full flex flex-col">
                <div className={`relative overflow-hidden ${index % 5 === 0 ? "flex-1" : "h-40"}`}>
                  <img
                    src={fish.image}
                    alt={fish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-light text-white uppercase italic tracking-tighter">
                      {fish.name}
                    </h3>
                    <span className="text-[8px] text-gray-500 font-medium uppercase tracking-widest mt-1">
                      {fish.scientificName}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-light leading-relaxed line-clamp-2">
                    {fish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FishGallery;
