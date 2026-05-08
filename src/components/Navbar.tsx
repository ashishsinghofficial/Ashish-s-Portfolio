import { motion } from "motion/react";

export default function Navbar() {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-100 mix-blend-difference">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex justify-between items-end">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold tracking-tighter"
        >
          ASHISH<span className="text-accent">.</span>S
        </motion.div>
        
        <div className="flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 hover:opacity-100 hover:text-accent transition-all"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}
