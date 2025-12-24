import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl mix-blend-screen animate-blob" />
            <div className="absolute top-1/3 -right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600/30 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-4000" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto">
                        <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">
                            {/* Placeholder for Profile Photo */}
                            <span className="text-4xl text-slate-700 font-bold">MB</span>
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Mukul S. Bhagat</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto"
                >
                    Mobile App Developer | Cloud & DevOps Trainee | Computer Engineering Student
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-slate-500 mb-10 text-lg"
                >
                    Building scalable apps, modern web solutions, and intelligent systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold flex items-center gap-2 hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/25"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-purple-500 hover:text-purple-400 transition-colors flex items-center gap-2"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
