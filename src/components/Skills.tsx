import { motion } from "motion/react";

export default function Skills() {
  const coreCompetencies = [
    { title: "Languages", items: ["Java", "JavaScript", "Python", "C++"] },
    { title: "Frontend", items: ["React", "Tailwind", "Motion", "Typescript"] },
    { title: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL"] },
    { title: "Flow", items: ["Git", "Vercel", "Docker", "Agile"] }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">Stack Index.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {coreCompetencies.map((cat, i) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mono-tag mb-8 text-accent">[{cat.title}]</p>
              <ul className="space-y-4">
                {cat.items.map((item, j) => (
                  <motion.li 
                    key={item} 
                    whileHover={{ x: 10, translateZ: 50, color: "var(--color-accent)" }}
                    className="text-2xl font-light text-white transition-all cursor-default flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent scale-0 group-hover:scale-100 transition-transform rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
