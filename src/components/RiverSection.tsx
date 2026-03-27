import React from 'react';
import { motion } from 'motion/react';
import { RIVERS } from '../data';
import { Waves, Fish, MapPin } from 'lucide-react';

const RiverSection = () => {
  return (
    <section id="rivers" className="py-32 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic flex flex-col">
              河道分析 
              <span className="text-gradient text-sm md:text-xl tracking-[0.2em] mt-2 not-italic font-medium">RIVER ANALYSIS</span>
            </h2>
            <p className="text-lg text-gray-400 font-medium tracking-tight">
              从珠江干流到流溪河，深入解析广州各大河道的垂钓特点与鱼种分布。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {RIVERS.map((river, index) => (
            <motion.div
              key={river.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={`group glass glass-hover rounded-[32px] overflow-hidden subtle-glow flex flex-col ${
                index === 0 ? "md:col-span-8 md:row-span-2" : "md:col-span-4"
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "h-[400px]" : "h-48"}`}>
                <img
                  src={river.image}
                  alt={river.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-medium px-4 py-1.5 rounded-full uppercase tracking-widest mb-2 inline-block border border-white/20">
                    {river.name}
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <p className="text-sm text-gray-400 mb-8 leading-relaxed font-light line-clamp-3">
                  {river.description}
                </p>

                <div className="mt-auto space-y-6">
                  <div>
                    <h4 className="text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                      <Waves className="w-3 h-3 text-white/40" /> 河道特点
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {river.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-[9px] font-medium bg-white/[0.03] text-gray-400 px-3 py-1.5 rounded-lg border border-white/[0.05] uppercase tracking-wider">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {index === 0 && (
                    <a 
                      href="#spots"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-gray-300 transition-all"
                    >
                      <MapPin className="w-4 h-4" /> 探索详细钓点
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiverSection;
