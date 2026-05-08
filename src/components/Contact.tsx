import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase mb-12">Start <br /><span className="text-accent underline decoration-accent/20">Conversation.</span></h2>
            <p className="text-text-muted text-xl font-light leading-relaxed max-w-md mb-12">
              Currently accepting new opportunities for late 2026. 
              Let's build something <span className="text-white font-medium">exceptional</span>.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-card-bg border border-border-subtle group-hover:border-accent transition-colors">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                   <p className="mono-tag text-[8px] mb-1">Direct Communication</p>
                   <p className="text-lg font-medium group-hover:text-accent transition-colors">
                    ashish.rockeysinghrajput@gmail.com
                   </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: -2, rotateX: 2 }}
            className="bg-card-bg p-8 md:p-16 border-subtle perspective-1000"
          >
            <form className="space-y-12">
              <div className="space-y-8">
                <div className="group">
                  <input 
                    type="text" 
                    placeholder="FULL NAME"
                    className="w-full bg-transparent border-b border-border-subtle py-4 outline-none focus:border-accent transition-colors placeholder:text-white/10 uppercase text-xs tracking-widest font-bold"
                  />
                </div>
                <div className="group">
                  <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-border-subtle py-4 outline-none focus:border-accent transition-colors placeholder:text-white/10 uppercase text-xs tracking-widest font-bold"
                  />
                </div>
                <div className="group">
                  <textarea 
                    rows={4}
                    placeholder="MESSAGE."
                    className="w-full bg-transparent border-b border-border-subtle py-4 outline-none focus:border-accent transition-colors placeholder:text-white/10 uppercase text-xs tracking-widest font-bold resize-none"
                  />
                </div>
              </div>
              <button className="bg-accent text-page-bg px-12 py-5 font-black uppercase tracking-widest text-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto">
                Dispatch message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
