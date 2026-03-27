import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Thermometer, Waves, MapPin, Clock, Target, Utensils } from 'lucide-react';
import { SEASONAL_BEHAVIORS, FISH_SPECIES, RIVERS, FISHING_SPOTS } from '../data';

interface ExplorationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExplorationPanel: React.FC<ExplorationPanelProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    season: '',
    fish: '',
    river: ''
  });

  const reset = () => {
    setStep(1);
    setSelections({ season: '', fish: '', river: '' });
  };

  const currentSeasonData = useMemo(() => 
    SEASONAL_BEHAVIORS.find(s => s.season.includes(selections.season)), 
    [selections.season]
  );

  const currentFishData = useMemo(() => 
    FISH_SPECIES.find(f => f.name === selections.fish),
    [selections.fish]
  );

  const recommendedSpots = useMemo(() => {
    if (!selections.river || !selections.season) return [];
    const river = RIVERS.find(r => r.name === selections.river);
    if (!river) return [];
    return FISHING_SPOTS.filter(spot => 
      spot.riverId === river.id && 
      spot.bestSeason.some(s => selections.season.includes(s))
    );
  }, [selections.river, selections.season]);

  const getWaterLayer = (fishName: string) => {
    const layers: Record<string, string> = {
      '罗非鱼': '中下层',
      '鲫鱼': '底层',
      '鲮鱼': '底层',
      '草鱼': '中下层',
      '鲈鱼': '中上层',
      '鳜鱼': '底层',
      '鲤鱼': '底层',
      '鲶鱼': '底层'
    };
    return layers[fishName] || '全泳层';
  };

  const getBestTime = (season: string) => {
    if (season.includes('春')) return '上午 9:00 - 下午 4:00';
    if (season.includes('夏')) return '清晨 5:00 - 9:00 或 傍晚 6:00 以后';
    if (season.includes('秋')) return '全天候，尤其是下午 3:00 - 6:00';
    if (season.includes('冬')) return '中午 11:00 - 下午 3:00';
    return '根据天气变化调整';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-light text-white tracking-tight italic">开始探索</h2>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">智能垂钓建议系统</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {step <= 3 ? (
                <div className="space-y-8">
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-500 ${
                          i === step ? "w-12 bg-white" : i < step ? "w-6 bg-white/40" : "w-6 bg-white/10"
                        }`}
                      />
                    ))}
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                      <h3 className="text-2xl font-light text-white mb-6">选择当前季节</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {['春季 (3-5月)', '夏季 (6-8月)', '秋季 (9-11月)', '冬季 (12-2月)'].map((s) => (
                          <button
                            key={s}
                            onClick={() => {
                              setSelections({ ...selections, season: s });
                              setStep(2);
                            }}
                            className="p-6 rounded-2xl glass glass-hover text-left transition-all group"
                          >
                            <span className="text-lg text-gray-400 group-hover:text-white transition-colors">{s}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                      <h3 className="text-2xl font-light text-white mb-6">选择目标鱼种</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {FISH_SPECIES.map((f) => (
                          <button
                            key={f.id}
                            onClick={() => {
                              setSelections({ ...selections, fish: f.name });
                              setStep(3);
                            }}
                            className="flex flex-col items-center gap-3 p-4 rounded-2xl glass glass-hover transition-all group"
                          >
                            <img src={f.image} alt={f.name} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{f.name}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                      <h3 className="text-2xl font-light text-white mb-6">选择所在河道</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {RIVERS.map((r) => (
                          <button
                            key={r.id}
                            onClick={() => {
                              setSelections({ ...selections, river: r.name });
                              setStep(4);
                            }}
                            className="flex items-center justify-between p-5 rounded-2xl glass glass-hover transition-all group"
                          >
                            <span className="text-lg text-gray-400 group-hover:text-white transition-colors">{r.name}</span>
                            <span className="text-[10px] text-gray-600 uppercase tracking-widest">{r.mainFish.slice(0, 2).join(' · ')}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] text-white uppercase tracking-widest">{selections.season}</div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] text-white uppercase tracking-widest">{selections.fish}</div>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] text-white uppercase tracking-widest">{selections.river}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Thermometer className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">季节水温</p>
                          <p className="text-white font-light">{currentSeasonData?.tempRange || '20°C - 28°C'}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Waves className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">活跃水层</p>
                          <p className="text-white font-light">{getWaterLayer(selections.fish)}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">最佳作钓时间</p>
                          <p className="text-white font-light">{getBestTime(selections.season)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">推荐钓点</p>
                          <p className="text-white font-light">
                            {recommendedSpots.length > 0 ? recommendedSpots[0].name : '建议选择水流平缓的湾位或草边'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">简单钓法</p>
                          <p className="text-white font-light">{currentSeasonData?.tips.split('。')[0] || '建议采用台钓法'}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          <Utensils className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">饵料建议</p>
                          <p className="text-white font-light">{currentFishData?.habit.split('，')[0] || '杂食性饵料'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex gap-4">
                    <button
                      onClick={reset}
                      className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                    >
                      重新选择
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 py-4 rounded-2xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
                    >
                      完成探索
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExplorationPanel;
