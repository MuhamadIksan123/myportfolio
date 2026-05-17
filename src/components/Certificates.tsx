import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CERTIFICATES } from '../data.ts';
import { ExternalLink, Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function Certificates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredCerts = CERTIFICATES.filter(cert => 
    cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedCerts = showAll ? filteredCerts : filteredCerts.slice(0, 6);

  return (
    <section id="certificates" className="slide-section bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">Certifications</h2>
            <div className="h-1.5 w-16 bg-primary-500 rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-hidden transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert, index) => (
              <motion.a
                layout
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index % 6 * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={cert.image} 
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest flex items-center gap-2">
                        View Certificate <ExternalLink size={12} />
                        </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors leading-tight">
                      {cert.name}
                    </h3>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md shrink-0">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                    {cert.platform}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-[10px] font-black text-primary-600 group-hover:gap-3 transition-all uppercase tracking-widest">
                    Verify Certificate <ExternalLink size={12} />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {filteredCerts.length > 6 && (
          <div className="flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 hover:border-primary-200 transition-all flex items-center gap-2 shadow-sm active:scale-95"
            >
              {showAll ? (
                <>View Less <ChevronUp size={20} /></>
              ) : (
                <>View More Certificates <ChevronDown size={20} /></>
              )}
            </button>
          </div>
        )}

        {filteredCerts.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest">
            No certificates found
          </div>
        )}
      </div>
    </section>
  );
}
