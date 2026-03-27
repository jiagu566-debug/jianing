import React from 'react';
import { Fish, Github, Twitter, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        setMessage('');
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Feedback submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-transparent border-t border-white/5 py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <Fish className="w-5 h-5 text-white/60" />
              </div>
              <span className="text-xl font-light tracking-tighter text-white uppercase italic">广州渔经</span>
            </div>
            <p className="text-gray-500 leading-relaxed font-light tracking-tight text-sm">
              致力于为广州钓友提供最实用、最准确的河道垂钓攻略。
              守护绿水青山，享受垂钓乐趣。
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-[9px] font-black text-white uppercase tracking-[0.3em]">导航</h4>
              <ul className="space-y-4">
                <li><a href="#rivers" className="text-[9px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">河道分析</a></li>
                <li><a href="#fish-gallery" className="text-[9px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">常见鱼种</a></li>
                <li><a href="#behavior" className="text-[9px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">季节习性</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[9px] font-black text-white uppercase tracking-[0.3em]">社交</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[9px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Twitter</a></li>
                <li><a href="#" className="text-[9px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Instagram</a></li>
                <li><a href="#" className="text-[9px] font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Github</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[9px] font-black text-white uppercase tracking-[0.3em]">意见反馈</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="您的邮箱"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-4 py-3 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all"
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="您的建议或问题..."
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl px-4 py-3 text-[10px] text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-3 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all disabled:opacity-50 relative overflow-hidden"
              >
                {isSubmitting ? "提交中..." : "提交反馈"}
                {isSuccess && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute inset-0 bg-green-500 text-white flex items-center justify-center"
                  >
                    提交成功！
                  </motion.div>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em]">
            © 2026 广州渔经. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em] hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em] hover:text-white transition-colors">使用条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
