import { motion, AnimatePresence } from "motion/react";
import { useState, FormEvent } from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  User,
  MessageSquare,
  CheckCircle2,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { PROFILE } from "../data.ts";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Use your Formspree ID here. You can get one at https://formspree.io/
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "meedjpbl";
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-2 tracking-tight">
            Let's Connect
          </h2>
          <div className="h-1.5 w-16 bg-primary-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-500 max-w-sm mx-auto text-xs md:text-sm">
            Ready to start your next project? Drop a message below and I'll get
            back to you shortly.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/40 border border-white"
        >
          <div className="flex flex-col md:flex-row">
            {/* Info Side */}
            <div className="p-8 md:p-12 bg-primary-600 text-white md:w-[35%] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24 blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  Contact Info
                </h3>
                <p className="text-primary-100 mb-8 text-xs md:text-sm leading-relaxed opacity-90">
                  I'm currently available for freelance work and full-time
                  positions.
                </p>

                <div className="space-y-5">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex items-center gap-3 text-white hover:text-primary-100 transition-colors group"
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all shrink-0">
                      <Mail size={16} />
                    </div>
                    <span className="text-xs md:text-sm font-medium truncate">
                      {PROFILE.gmail}
                    </span>
                  </a>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <User size={16} />
                    </div>
                    <span className="text-xs md:text-sm font-medium">
                      Remote Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-200 mb-4 font-display">
                  Socials
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PROFILE.github}
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all shadow-sm"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all shadow-sm"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={PROFILE.instagram}
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all shadow-sm"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={PROFILE.whatsapp}
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-primary-600 transition-all shadow-sm"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-8 md:p-12 md:w-[65%] bg-white relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full min-h-[300px] flex flex-col items-center justify-center text-center py-6"
                  >
                    <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-1">
                      Success!
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Thanks for reaching out. I'll reply soon!
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                          Name
                        </label>
                        <div className="relative group">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors"
                            size={14}
                          />
                          <input
                            required
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/5 outline-hidden transition-all placeholder:text-slate-300 text-slate-900 text-xs font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                          Email
                        </label>
                        <div className="relative group">
                          <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary-500 transition-colors"
                            size={14}
                          />
                          <input
                            required
                            name="email"
                            type="email"
                            placeholder="email@example.com"
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/5 outline-hidden transition-all placeholder:text-slate-300 text-slate-900 text-xs font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                        Your Message
                      </label>
                      <div className="relative group">
                        <MessageSquare
                          className="absolute left-4 top-4 text-slate-300 group-focus-within:text-primary-500 transition-colors"
                          size={14}
                        />
                        <textarea
                          required
                          name="message"
                          rows={4}
                          placeholder="What would you like to discuss?"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/5 outline-hidden transition-all resize-none placeholder:text-slate-300 text-slate-900 text-xs font-medium"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      disabled={loading}
                      className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:translate-y-0 text-sm"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 text-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} &bull; WEB DEVELOPER PORTFOLIO
          </p>
        </footer>
      </div>
    </section>
  );
}
