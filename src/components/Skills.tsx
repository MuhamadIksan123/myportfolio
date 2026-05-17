import { motion } from 'motion/react';
import { SKILLS } from '../data.ts';

export default function Skills() {
  return (
    <section id="skills" className="slide-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">Core Skills</h2>
          <div className="h-1.5 w-16 bg-primary-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-8">
          {SKILLS.map((skill, sIdx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: sIdx * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-slate-50 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-500/5 transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-slate-500 group-hover:text-primary-600 transition-colors uppercase tracking-widest text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
