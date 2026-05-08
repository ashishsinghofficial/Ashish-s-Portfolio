import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="section-padding min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="perspective-1000"
        >
          <p className="mono-tag mb-6 text-text-muted">Ashish Singh — MCA Candidate @ KIIT</p>
          
          <h1 className="text-5xl md:text-[12rem] font-bold leading-[0.85] tracking-tighter mb-8 preserve-3d">
            <span className="text-reveal">
              <motion.span 
                initial={{ y: "100%", rotateX: 45 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block hover:text-accent transition-colors cursor-default transform-gpu"
              >
                DESIGNED
              </motion.span>
            </span>
            <span className="text-reveal">
              <motion.span 
                initial={{ y: "100%", rotateX: -45 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-text-muted/10 hover:text-accent transition-colors cursor-default transform-gpu"
              >
                TO BUILD.
              </motion.span>
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 pt-8 border-t border-border-subtle">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-lg md:text-2xl font-light text-text-muted max-w-2xl leading-relaxed"
            >
              MERN Developer crafting <span className="text-accent">high-performance</span> digital experiences. 
              Architecting the foundations of the <span className="text-white italic">modern web</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex gap-12"
            >
              <div className="space-y-2">
                <p className="mono-tag">Expertise</p>
                <p className="font-medium text-accent">React / Node / Mongo</p>
              </div>
              <div className="space-y-2">
                <p className="mono-tag">Status</p>
                <p className="font-medium">Open for Collabs</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-text-muted flex flex-col items-center gap-4"
      >
        <span className="mono-tag">Scroll Exploration</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
