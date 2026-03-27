import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEASONAL_BEHAVIORS } from '../data';
import { Thermometer, Calendar, Target, Lightbulb, Activity } from 'lucide-react';

const FishBehavior = () => {
  const [activeSeason, setActiveSeason] = useState(0);

  return (
    <section id="behavior" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic flex flex-col">
              季节习性 
              <span className="text-gradient text-sm md:text-xl tracking-[0.2em] mt-2 not-italic font-medium">SEASONAL BEHAVIOR</span>
            </h2>
            <p className="text-lg text-gray-400 font-medium tracking-tight">
              掌握四季水温变化与鱼类分布规律，科学垂钓，提高中鱼率。
            </p>
          </div>
          
          <div className="flex glass p-1.5 rounded-2xl subtle-glow">
            {SEASONAL_BEHAVIORS.map((item, index) => (
              <button
                key={item.season}
                onClick={() => setActiveSeason(index)}
                className={`px-6 py-3 rounded-xl text-[10px] font-medium uppercase tracking-widest transition-all duration-500 ${
                  activeSeason === index 
                    ? "bg-white text-black shadow-xl" 
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {item.season.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-4">
            {SEASONAL_BEHAVIORS.map((item, index) => (
              <button
                key={item.season}
                onClick={() => setActiveSeason(index)}
                className={`w-full p-8 rounded-[32px] text-left transition-all duration-500 border group relative overflow-hidden ${
                  activeSeason === index 
                    ? "bg-white border-white subtle-glow" 
                    : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.05]"
                }`}
              >
                <div className="relative z-10">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 ${
                    activeSeason === index ? "text-black/40" : "text-white/20"
                  }`}>
                    0{index + 1}
                  </span>
                  <h3 className={`text-2xl font-light uppercase tracking-tighter italic ${
                    activeSeason === index ? "text-black" : "text-white"
                  }`}>
                    {item.season}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSeason}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="glass p-12 rounded-[40px] h-full border border-white/10 subtle-glow flex flex-col"
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-full border border-white/[0.05] mb-6">
                      <Thermometer className="w-4 h-4 text-white/40" />
                      <span className="text-sm font-medium tracking-widest text-gray-400">{SEASONAL_BEHAVIORS[activeSeason].tempRange}</span>
                    </div>
                    <p className="text-3xl text-white leading-tight font-light tracking-tight italic">
                      "{SEASONAL_BEHAVIORS[activeSeason].behavior}"
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white/40" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                      <Target className="w-3 h-3" /> 目标鱼种
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {SEASONAL_BEHAVIORS[activeSeason].targetFish.map((fish) => (
                        <span key={fish} className="bg-white/[0.03] text-gray-300 font-medium px-4 py-2 rounded-xl border border-white/[0.05] uppercase tracking-widest text-[10px]">
                          {fish}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                      <Lightbulb className="w-3 h-3" /> 垂钓建议
                    </h4>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      {SEASONAL_BEHAVIORS[activeSeason].tips}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FishBehavior;
