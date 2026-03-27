import React from 'react';
import { motion } from 'motion/react';
import { FishingSpot, RIVERS } from '../data';
import { ArrowLeft, MapPin, Thermometer, Wind, Gauge, Calendar, Fish, Anchor, Activity } from 'lucide-react';

interface SpotDetailProps {
  spot: FishingSpot;
  onBack: () => void;
}

const SpotDetail: React.FC<SpotDetailProps> = ({ spot, onBack }) => {
  const river = RIVERS.find(r => r.id === spot.riverId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-[#050505] pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-all mb-12 font-black uppercase tracking-[0.2em] text-[10px] group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回列表
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-[40px] p-10">
              <div className="flex items-center gap-2 bg-brand-purple/10 text-brand-purple text-[10px] font-black px-4 py-1.5 rounded-full border border-brand-purple/20 uppercase tracking-widest mb-6 w-fit">
                <Anchor className="w-3 h-3" /> {river?.name}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic leading-none">{spot.name}</h1>
              <p className="text-xl text-gray-400 leading-snug mb-12 font-bold tracking-tight">{spot.description}</p>
              
              <div className="aspect-video rounded-[32px] overflow-hidden bg-white/5 relative border border-white/10 group">
                <img 
                  src={`https://picsum.photos/seed/${spot.id}map/1200/800`} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
                  alt="Map Placeholder"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/60 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center gap-3">
                    <div className="bg-brand-purple p-3 rounded-2xl text-white animate-pulse">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-black text-white uppercase tracking-widest">
                      {spot.coords.lat.toFixed(3)}, {spot.coords.lng.toFixed(3)}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-white/10">
                  SATELLITE VIEW
                </div>
              </div>
            </div>

            {/* Catch Reports */}
            <div className="glass rounded-[40px] p-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-brand-blue/20 p-3 rounded-2xl">
                  <Activity className="w-6 h-6 text-brand-blue" />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">近期渔获报告 <span className="text-gray-500">REPORTS</span></h2>
              </div>

              <div className="space-y-4">
                {spot.reports.map((report, i) => (
                  <div key={i} className="flex items-center justify-between p-6 rounded-3xl glass glass-hover border-none transition-all group">
                    <div className="flex items-center gap-6">
                      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-brand-blue/10 transition-colors">
                        <Fish className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tight italic">{report.fish} <span className="text-brand-blue">({report.weight})</span></h4>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3" /> {report.date} • 钓法: {report.method}
                        </p>
                      </div>
                    </div>
                    <div className="text-[10px] font-black text-brand-blue bg-brand-blue/10 px-4 py-2 rounded-full border border-brand-blue/20 uppercase tracking-widest">
                      VERIFIED
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Weather & Stats */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-brand-purple to-brand-blue rounded-[40px] p-10 text-white shadow-2xl shadow-brand-purple/20">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter italic">
                <Thermometer className="w-6 h-6" /> 天气状况 <span className="text-white/60">WEATHER</span>
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md">
                  <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-2">温度 TEMP</p>
                  <p className="text-4xl font-black italic tracking-tighter">{spot.weather.temp}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md">
                  <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-2">状况 COND</p>
                  <p className="text-4xl font-black italic tracking-tighter">{spot.weather.condition}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md">
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-2">风力 WIND</p>
                    <p className="text-xl font-black italic tracking-tighter">{spot.weather.wind}</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-3xl border border-white/20 backdrop-blur-md">
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest mb-2">气压 PRES</p>
                    <p className="text-xl font-black italic tracking-tighter">{spot.weather.pressure}</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-[10px] text-white/40 font-black uppercase tracking-widest leading-relaxed italic">
                * DATA UPDATED HOURLY.
              </p>
            </div>

            <div className="glass rounded-[40px] p-10">
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tighter italic">钓点概览 <span className="text-gray-500">STATS</span></h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">难度等级</span>
                  <span className="text-sm font-black text-brand-pink uppercase italic tracking-tighter">{spot.difficulty}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">最佳季节</span>
                  <div className="flex gap-2">
                    {spot.bestSeason.map(s => (
                      <span key={s} className="text-[10px] font-black bg-white/5 text-white px-2 py-1 rounded-lg border border-white/5 uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 py-4">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">目标鱼种</span>
                  <div className="flex flex-wrap gap-2">
                    {spot.targetSpecies.map(f => (
                      <span key={f} className="text-[10px] font-black bg-white/5 text-brand-blue px-3 py-1.5 rounded-lg border border-white/5 uppercase tracking-wider">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotDetail;
