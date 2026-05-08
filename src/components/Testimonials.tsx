import { motion } from 'motion/react';
import { PlayCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh S.",
    location: "Mumbai",
    story: "Lost my business to a severe legal case. After the 11-day Anushthan, the judgment miraculously turned in my favor. Impeccable spiritual power.",
  },
  {
    name: "Priyanka M.",
    location: "Delhi",
    story: "Suffered from unknown negative energies for years. The protection puja created an instant shift in my home's aura. I finally feel safe.",
  },
  {
    name: "Ankit D.",
    location: "Bangalore",
    story: "My startup was blocked on all sides. After the Vashikaran removal and wealth ritual, investors came back effortlessly.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative z-20 px-4 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16 fade-in">
          <div className="mb-6 opacity-60 text-xs tracking-[0.5em] uppercase text-[#FFD700]">
            Sacred Evidence
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Devotee <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">Experiences</span>
          </motion.h2>
          <div className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="bg-gradient-to-b from-[#111] to-black border border-[#D4AF37]/30 rounded-lg p-8 relative flex flex-col group transition-colors hover:border-[#D4AF37]/60"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/10 absolute top-4 right-4" />
              
              {/* Simulated Video/Audio Thumbnail & User Info */}
              <div className="flex gap-4 items-center mb-6 z-10 relative">
                <div className="w-14 h-14 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#030303] overflow-hidden relative cursor-pointer">
                   <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#FFD700]/10 transition-colors"></div>
                   <PlayCircle className="w-5 h-5 text-[#D4AF37] group-hover:text-[#FFD700] transition-colors" />
                </div>
                <div>
                   <h4 className="font-serif text-white font-medium text-base">{testimonial.name}</h4>
                   <p className="text-[#FFD700] text-[10px] tracking-[0.2em] uppercase mt-1 opacity-70">{testimonial.location}</p>
                </div>
              </div>

              <p className="font-sans text-gray-500 italic text-sm leading-relaxed relative z-10">
                "{testimonial.story}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
