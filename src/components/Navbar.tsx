import React from 'react';
import { Fish, MapPin, Calendar, Info } from 'lucide-react';

interface NavbarProps {
  onExplore: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onExplore }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex justify-between items-center subtle-glow">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-white/10 p-2 rounded-xl border border-white/10 group-hover:bg-white/20 transition-all duration-500">
            <Fish className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-light tracking-tighter text-white uppercase italic">广州渔经</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          <a href="#rivers" className="text-[10px] font-medium text-gray-500 hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-2">
            <MapPin className="w-3 h-3" /> 河道分析
          </a>
          <a href="#fish-gallery" className="text-[10px] font-medium text-gray-500 hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-2">
            <Fish className="w-3 h-3" /> 常见鱼种
          </a>
          <a href="#behavior" className="text-[10px] font-medium text-gray-500 hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-2">
            <Calendar className="w-3 h-3" /> 季节习性
          </a>
          <a href="#spots" className="text-[10px] font-medium text-gray-500 hover:text-white transition-all uppercase tracking-[0.2em] flex items-center gap-2">
            <Info className="w-3 h-3" /> 钓点建议
          </a>
        </div>

        <button 
          onClick={onExplore}
          className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95"
        >
          开始探索
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
