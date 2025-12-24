import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
    {
        title: "TaskMate – Full-Stack MERN Application",
        description: "Dual-role system with admin and member dashboards, task tracking, permissions, and secure authentication.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    },
    {
        title: "AI-Powered Q&A System (RAG)",
        description: "Chat with PDF documents to get instant, context-aware answers using retrieval-augmented generation.",
        tech: ["LangChain", "Ollama", "Streamlit", "Vector Database"],
    },
    {
        title: "Kotlin Banking Application",
        description: "Secure banking app with account management, transaction history, and fund transfers.",
        tech: ["Kotlin", "Jetpack Compose", "SQLite"],
    }
]

export default function Projects() {
    const containerRef = useRef(null)

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400">Some of my best work.</p>
                </div>
                {/* Navigation for scroll - could be added here */}
            </div>

            <div className="overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory flex gap-6" ref={containerRef}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex-none w-full md:w-[450px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-300 snap-center group"
                    >
                        {/* Small rolling project image placeholder - using gradient area */}
                        <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-purple-600/10 mix-blend-overlay group-hover:bg-purple-600/20 transition-colors" />
                            <span className="text-slate-600 font-bold text-lg group-hover:text-purple-300 transition-colors">Project Preview</span>
                        </div>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed text-sm h-20 overflow-hidden">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href="#" className="flex-1 py-3 rounded-xl bg-slate-800 text-white font-medium flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                                    <Github size={18} /> Code
                                </a>
                                <a href="#" className="flex-1 py-3 rounded-xl bg-purple-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                                    Live Demo <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
