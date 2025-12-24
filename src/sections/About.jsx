import { motion } from 'framer-motion'
import { Code, Terminal, Cpu } from 'lucide-react'

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 relative z-10 flex items-center justify-center border border-slate-700">
                        {/* Image Placeholder */}
                        <Terminal size={64} className="text-slate-600" />
                        <p className="absolute bottom-4 text-slate-500 text-sm">Profile Image Placeholder</p>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute top-4 -left-4 w-full h-full border-2 border-purple-500/30 rounded-2xl -z-0" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-12 h-1 bg-purple-500 rounded-full"></span>
                        About Me
                    </h2>
                    <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                        <p>
                            An aspiring Software Developer with hands-on experience in Full-Stack Web applications, Native Mobile Apps, and AI-powered solutions.
                        </p>
                        <p>
                            Skilled in <strong className="text-purple-400">Java, Python, JavaScript, Kotlin</strong>, and modern DevOps tools. I enjoy building scalable systems from concept to deployment and bring a creative, problem-solving mindset to every project.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-8">
                        {[
                            { label: 'Projects', value: '10+' },
                            { label: 'Experience', value: '2 Yrs' },
                            { label: 'Certifications', value: '5+' },
                        ].map((stat, i) => (
                            <div key={i} className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-800">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
