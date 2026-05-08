import { motion } from 'motion/react';
import { Flame, Users, CalendarHeart, RadioTower } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Havans Completed', value: 10800, icon: Flame, suffix: '+' },
  { label: 'Devotees Helped', value: 50000, icon: Users, suffix: '+' },
  { label: 'Years of Experience', value: 35, icon: CalendarHeart, suffix: '+' },
  { label: 'Live Online Users', value: 108, icon: RadioTower, suffix: '' },
];

export function EnergyCounter() {
  return (
    <section className="py-16 relative z-20 border-y border-[#D4AF37]/20 bg-[#030303]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <CounterItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterItem({ stat, index }: { stat: any, index: number, key?: any }) {
  const [count, setCount] = useState(0);

  // Simple increment effect on mount
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const end = stat.value;
    const incrementTime = duration / 50; // 50 steps

    const timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [stat.value]);

  const isLive = stat.label.includes('Live');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`flex flex-col items-center group relative py-4 ${index !== 0 ? 'border-l border-[#D4AF37]/20' : ''}`}
    >
      <div className="absolute inset-0 bg-[#FFD700]/5 blur-[40px] rounded-full scale-150 group-hover:bg-[#FFD700]/10 transition-all duration-700"></div>
      
      <div className="font-serif text-[#FFD700] text-4xl md:text-5xl font-bold mb-2 tracking-wider flex items-center">
        {count.toLocaleString()}{stat.suffix}
      </div>
      
      <div className="font-sans text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.3em] font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}
