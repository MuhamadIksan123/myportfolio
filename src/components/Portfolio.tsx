import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { PROJECTS } from "../data.ts";
import { Project } from "../types.ts";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Github,
  Globe,
  X,
  Layout,
  Code,
  Palette,
  Target,
} from "lucide-react";

const FILTERS = [
  "All",
  "ReactJS",
  "Laravel",
  "JavaScript",
  "HTML / CSS",
  "ASP.NET",
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-white"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-slate-400 hover:text-slate-900 shadow-lg transition-all active:scale-90"
        >
          <X size={20} />
        </button>

        <div className="md:w-1/2 bg-slate-50 relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-6 md:p-14 overflow-y-auto no-scrollbar flex flex-col gap-6 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-black text-primary-500 uppercase tracking-[0.2em]">
                <Code size={12} /> {project.role}
              </span>
            </div>
            <h2 className="text-2xl md:text-5xl font-display font-black text-slate-900 leading-tight tracking-tight">
              {project.title}
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2 md:space-y-3">
              <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <Layout size={14} className="text-primary-500" /> Executive
                Summary
              </h4>
              <p className="text-xs md:text-base text-slate-600 leading-relaxed opacity-90">
                {project.description}
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <Palette size={14} className="text-primary-500" /> Technology
                Ecosystem
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-4 py-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 md:pt-10 mt-auto border-t border-slate-100 flex flex-row gap-2 md:gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-3 md:px-8 md:py-4.5 bg-primary-600 text-white rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] hover:bg-primary-700 shadow-xl shadow-primary-500/25 transition-all hover:-translate-y-1 active:scale-95"
              >
                Web <Globe size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-3 md:px-8 md:py-4.5 bg-slate-900 text-white rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black uppercase tracking-[0.15em] hover:bg-slate-800 shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 active:scale-95 border border-slate-800"
              >
                Github <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.category === activeFilter;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="portfolio" className="slide-section bg-slate-50/30">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">
                Projects Portfolio
              </h2>
              <div className="h-1.5 w-16 bg-primary-500 rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-hidden transition-all"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
            </div>
          </div>

          <div className="flex p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full no-scrollbar self-center md:self-start">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${activeFilter === filter ? "bg-white text-primary-600 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-3">
                        Project Details{" "}
                        <ExternalLink size={14} className="text-primary-500" />
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-md text-[10px] font-black text-primary-600 shadow-sm uppercase tracking-tighter border border-slate-100 flex items-center gap-1.5">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      {project.role}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-3 leading-relaxed opacity-80 text-justify">
                    {project.description}
                  </p>

                  <div className="mt-auto flex justify-between items-center pt-5 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="text-[9px] font-black text-slate-500 uppercase tracking-widest"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-primary-500 group-hover:border-primary-100 group-hover:bg-primary-50 transition-all shrink-0">
                      <ChevronDown
                        size={18}
                        className="-rotate-90 group-hover:rotate-0 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > 6 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-50 hover:border-primary-200 transition-all flex items-center gap-2 shadow-sm active:scale-95"
            >
              {showAll ? (
                <>
                  View Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  More Projects <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest">
            No projects found in this category
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
