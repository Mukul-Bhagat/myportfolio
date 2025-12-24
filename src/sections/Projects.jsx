import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
    {
        title: "TaskMate – Full-Stack MERN Application",
        description: "Dual-role system with admin and member dashboards, task tracking, permissions, and secure authentication.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop", // Task/Productivity
    },
    {
        title: "AI-Powered Q&A System (RAG)",
        description: "Chat with PDF documents to get instant, context-aware answers using retrieval-augmented generation.",
        tech: ["LangChain", "Ollama", "Streamlit", "Vector Database"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop", // AI/Brain
    },
    {
        title: "Kotlin Banking Application",
        description: "Secure banking app with account management, transaction history, and fund transfers.",
        tech: ["Kotlin", "Jetpack Compose", "SQLite"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop", // Finance/Mobile
    },
    {
        title: "AttendMark - Smart Attendance System",
        description: "Automated attendance tracking system with smart logging, student management, and real-time reporting capabilities.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", // Classroom/Tech
    },
    {
        title: "Gulheri – Client E-Commerce Store",
        description: "A premium client-side e-commerce platform built on Shopify, featuring custom theme customization and seamless shopping experience.",
        tech: ["Shopify", "Liquid", "E-Commerce", "Web Design"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop", // Shopping/Store
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">Featured Projects</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Some of my best work, built with modern tech stacks.
                    </p>
                </div>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl hover:border-purple-500/30 transition-all duration-300 md:grid md:grid-cols-2"
                        >
                            {/* Image / Preview Section */}
                            <div className="h-64 md:h-auto bg-slate-800 relative overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-blue-900/40 opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-sm font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a href="#" className="flex-1 py-4 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center gap-2 hover:bg-slate-700 hover:scale-[1.02] transition-all">
                                        <Github size={20} /> Code
                                    </a>
                                    <a href="#" className="flex-1 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-purple-500/20">
                                        Live Demo <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
