import { motion } from 'motion/react';
import { EXPERIENCES } from '../data.ts';

export default function Experience() {
  return (
    <section id="experience" className="slide-section bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">Professional Journey</h2>
          <div className="h-1.5 w-16 bg-primary-500 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight group-hover:text-primary-600 transition-colors">
                    {exp.role}
                  </h3>
                  <span className={`w-fit px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest border ${
                    exp.type === 'Full Time' ? 'bg-green-50 text-green-600 border-green-100' :
                    exp.type === 'Internship' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                    exp.type === 'Part Time' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                    exp.type === 'Project Based' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                    'bg-slate-50 text-slate-600 border-slate-100'
                  }`}>
                    {exp.type}
                  </span>
                </div>
                
                <div className="flex flex-col gap-1.5 mb-4">
                  <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {exp.company}
                  </p>
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mb-1">
                    {exp.period}
                  </p>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed max-w-2xl line-clamp-2">
                  {exp.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
                {exp.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-500 rounded-md uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
