import { motion } from 'motion/react';
import { ShieldAlert, Scale, Swords, TrendingUp, HandMetal, MoonStar, Video } from 'lucide-react';

const services = [
  {
    title: "Bagulamukhi Mahayagya",
    desc: "Supreme ritual for ultimate victory, protection, and destroying negative energies completely.",
    icon: FlameIcon,
  },
  {
    title: "Court Case Victory",
    desc: "Specialized puja to freeze enemies' speech and win legal battles effortlessly.",
    icon: Scale,
  },
  {
    title: "Enemy Protection",
    desc: "Create an impenetrable energetic shield around you and your family.",
    icon: Swords,
  },
  {
    title: "Business Success",
    desc: "Remove blockages in wealth creation and attract divine prosperity.",
    icon: TrendingUp,
  },
  {
    title: "Vashikaran Removal",
    desc: "Destroy black magic, evil eye, and manipulative energies directed at you.",
    icon: HandMetal,
  },
  {
    title: "Grah Dosh Shanti",
    desc: "Pacify malefic planets and harmonize your astrological chart.",
    icon: MoonStar,
  },
  {
    title: "Video Consultation",
    desc: "Direct personalized spiritual guidance and reading via secure video link.",
    icon: Video,
  }
];

function FlameIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

export function Services() {
  return (
    <section className="py-24 relative z-20 px-4 bg-gradient-to-b from-[#030303] to-[#111]">
      {/* Background Mandala/Yantra hint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] max-w-4xl opacity-[0.05] pointer-events-none flex items-center justify-center">
         <div className="w-full h-full border-[1px] rounded-full border-[#D4AF37] animate-[spin_120s_linear_infinite] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#D4AF37] font-bold mb-4 tracking-wider"
          >
            DIVINE <span className="text-[#FFD700] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">ANUSHTHAN</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-b from-[#111] to-black p-6 border border-[#D4AF37]/30 rounded-lg group flex flex-col relative overflow-hidden transition-all hover:border-[#D4AF37]/60 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-4 bg-gradient-to-b from-[#111] to-black p-8' : ''
              }`}
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#FFD700]/5 transition-colors duration-500 pointer-events-none"></div>
              
              <div className="text-[#FFD700] text-[10px] uppercase font-bold mb-4 tracking-[0.3em]">
                {idx === 0 ? <service.icon className="w-8 h-8 text-[#D4AF37] mb-2" /> : <service.icon className="w-5 h-5 text-[#D4AF37] mb-2" />}
                Service
              </div>
              
              <h4 className={`font-serif text-white font-medium mb-3 relative z-10 ${idx === 0 ? 'text-2xl' : 'text-sm'}`}>
                {service.title}
              </h4>
              
              <p className={`text-gray-500 font-sans relative z-10 ${idx === 0 ? 'text-base max-w-2xl' : 'text-xs'}`}>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
