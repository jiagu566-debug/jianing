import React from 'react';
import { motion } from 'motion/react';
import { FISHING_SPOTS, RIVERS, FishingSpot } from '../data';
import { MapPin, Calendar, Star, Fish, Info, ChevronRight } from 'lucide-react';

interface FishingSpotsProps {
  onViewDetail: (spot: FishingSpot) => void;
}

const FishingSpots: React.FC<FishingSpotsProps> = ({ onViewDetail }) => {
  return (
    <section id="spots" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic flex flex-col">
              垂钓建议 
              <span className="text-gradient text-sm md:text-xl tracking-[0.2em] mt-2 not-italic font-medium">FISHING SPOTS</span>
            </h2>
            <p className="text-lg text-gray-400 font-medium tracking-tight">
              精选广州各大河道优质钓点，提供全方位的垂钓攻略与建议。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {FISHING_SPOTS.map((spot, index) => {
            const river = RIVERS.find(r => r.id === spot.riverId);
            return (
              <motion.div
                key={spot.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className={`glass glass-hover rounded-[32px] p-10 subtle-glow group flex flex-col ${
                  index % 3 === 0 ? "md:col-span-8" : "md:col-span-4"
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/[0.03] text-gray-400 text-[10px] font-medium px-4 py-1.5 rounded-full border border-white/[0.05] uppercase tracking-widest">
                      <MapPin className="w-3 h-3 text-white/40" /> {river?.name}
                    </div>
                    <div className="flex items-center gap-2 text-white/40">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">{spot.difficulty}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-light text-white italic uppercase tracking-tighter mb-4">
                    {spot.name}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-500 font-light tracking-tight mb-6">
                    <MapPin className="w-4 h-4 text-white/20" /> {spot.location}
                  </div>

                  <p className="text-gray-400 leading-relaxed font-light text-sm mb-8 line-clamp-3">
                    {spot.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {spot.targetSpecies.slice(0, 3).map((fish) => (
                        <span key={fish} className="text-[9px] font-medium text-gray-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.05] uppercase tracking-wider">
                          {fish}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => onViewDetail(spot)}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-gray-300 transition-all flex items-center gap-2"
                    >
                      详情 <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 glass rounded-[50px] p-16 text-center text-white border border-white/10 relative overflow-hidden group subtle-glow">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="bg-white/5 w-16 h-16 rounded-[24px] flex items-center justify-center mx-auto mb-10 border border-white/10">
              <Info className="w-8 h-8 text-white/60" />
            </div>
            <h3 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter uppercase italic">温馨提示 <span className="text-white/20">TIPS</span></h3>
            <p className="text-xl text-gray-400 font-light leading-tight mb-12 tracking-tight">
              垂钓时请遵守当地法律法规，严禁电、毒、炸等非法捕捞行为。
              爱护环境，随手带走垃圾，保护广州母亲河的生态平衡。
            </p>
            <button className="bg-white text-black px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all">
              查看垂钓守则
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FishingSpots;
