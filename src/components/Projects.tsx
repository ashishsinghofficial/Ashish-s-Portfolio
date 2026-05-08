import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "MERN Task Architect",
      type: "Full Stack Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
    },
    {
      title: "Amity Campus Core",
      type: "Collaborative Platform",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Neural Portfolio",
      type: "Interaction Design",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card-bg/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter uppercase mb-12">Selected Works.</h2>
        
        <div className="space-y-20">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center perspective-1000">
                <motion.div 
                  whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05, translateZ: 30 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="md:col-span-7 overflow-hidden bg-page-bg aspect-video border-subtle shadow-2xl preserve-3d"
                >
                   <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
                <div className="md:col-span-5">
                  <p className="mono-tag mb-4 text-accent tracking-[0.4em]">{project.type}</p>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8 group-hover:pl-4 transition-all duration-500 group-hover:text-accent">{project.title}</h3>
                  <div className="h-[1px] w-full bg-border-subtle group-hover:bg-accent transition-colors duration-500 mb-8"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm italic">Project Case 0{i + 1}</span>
                    <ArrowUpRight className="text-text-muted group-hover:text-accent group-hover:translate-x-2 group-hover:-translate-y-2 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
