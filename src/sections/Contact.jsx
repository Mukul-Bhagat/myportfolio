import { motion } from 'framer-motion'
import { Send, Mail } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-slate-400 mb-8">If you want contact me</p>

                    <a

                    >
                        <Mail className="text-purple-500 group-hover:scale-110 transition-transform" size={20} />
                        <span className="text-slate-200 group-hover:text-white font-medium">mukulbhagat001@gmail.com</span>
                    </a>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors" placeholder="Your Email" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Subject</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors" placeholder="Your Subject" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
