import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const slides = [
  {
    image: "https://i.postimg.cc/0z1LxXSJ/6938c01f-d80c-4cc9-bf63-859ffff84cb6.jpg",
    title: "珠江之畔，渔乐无穷",
    subtitle: "探索广州各大水系，发现隐藏的垂钓宝地"
  },
  {
    image: "https://i.postimg.cc/hX9s7wbC/Image-16.png",
    title: "碧波万顷，静候佳音",
    subtitle: "在宁静的湖泊与水库，享受与大自然的深度对话"
  },
  {
    image: "https://i.postimg.cc/sMpmZ89Z/Image-17.png",
    title: "技艺传承，渔获颇丰",
    subtitle: "分享资深钓友的实战经验，助你成为垂钓高手"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
          <img
            src={slides[current].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left px-8 md:px-20">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="max-w-5xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-white text-[10px] font-medium uppercase tracking-[0.2em] mb-8 subtle-glow">
                <MapPin className="w-3 h-3 text-white/60" /> 广州本地垂钓攻略
              </div>
              <h1 className="text-3xl md:text-6xl font-light text-white mb-8 tracking-tighter leading-tight uppercase italic">
                {slides[current].title.split('，').map((part, i) => (
                  <span key={i} className={i === 1 ? "text-gradient block" : "block"}>
                    {part}
                  </span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl tracking-tight">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button
          onClick={prev}
          className="p-4 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={next}
          className="p-4 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-12 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-12 bg-white" : "w-6 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
