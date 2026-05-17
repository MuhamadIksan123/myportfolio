import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { PROFILE } from "../data.ts";

export default function Hero() {
  return (
    <section
      id="home"
      className="slide-section flex items-center pt-24 md:pt-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Profile Photo - Order first on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <div className="relative w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-primary-100 rounded-3xl rotate-3 -z-10 bg-linear-to-tr from-primary-200 to-white"></div>
            <img
              src={PROFILE.photo}
              alt="Developer"
              className="w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1"
        >
          <div className="mb-6 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-1 leading-tight tracking-tighter">
              {PROFILE.name}
            </h2>
            <h1 className="text-xl md:text-2xl font-bold text-primary-600 uppercase tracking-widest font-display">
              {PROFILE.role}
            </h1>
          </div>

          <p className="text-sm md:text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
            {PROFILE.bio}
          </p>

          {/* Social Icons ABOVE Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <a
              href={PROFILE.github}
              className="text-slate-400 hover:text-primary-600 transition-all p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={PROFILE.linkedin}
              className="text-slate-400 hover:text-primary-600 transition-all p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={PROFILE.instagram}
              className="text-slate-400 hover:text-primary-600 transition-all p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={PROFILE.whatsapp}
              className="text-slate-400 hover:text-primary-600 transition-all p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-slate-400 hover:text-primary-600 transition-all p-3 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
            <a
              href="#portfolio"
              className="px-4 py-4 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 active:scale-95 text-xs md:text-sm whitespace-nowrap"
            >
              Portfolio <ArrowRight size={16} />
            </a>
            <a
              href={PROFILE.cv}
              download
              className="px-4 py-4 border-2 border-slate-200 text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-95 text-xs md:text-sm whitespace-nowrap"
            >
              CV <Download size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
