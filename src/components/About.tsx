import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-card-bg/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12">The <br />Foundations.</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-text-muted text-lg font-light leading-relaxed"
          >
            <p>
              Technically rooted in MCA at KIIT and academically grounded with a BCA from Amity. 
              My path has been defined by a relentless curiosity for how things work under the hood.
            </p>
            <p>
              Beyond just "writing code", I focus on architecting solutions that are scalable, 
              maintainable, and performance-optimized. I believe the best user experience is the 
              one that feels invisible.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          <motion.div
            whileHover={{ rotateX: -5, rotateY: 5, translateZ: 20 }}
            className="perspective-1000 transition-transform duration-500"
          >
            <p className="mono-tag mb-4 text-accent">Academic Node</p>
            <p className="text-xl">Masters in Computer Applications — KIIT University</p>
            <p className="text-white/40 text-sm">Bachelors in Computer Applications — Amity Patna</p>
          </motion.div>
          <motion.div
            whileHover={{ rotateX: -5, rotateY: 5, translateZ: 20 }}
            className="perspective-1000 transition-transform duration-500"
          >
            <p className="mono-tag mb-4 text-accent">Training</p>
            <p className="text-xl">MERN Engineering — PW Skills</p>
            <p className="text-white/40 text-sm">Industrial grade full-stack development</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
