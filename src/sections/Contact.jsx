import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
    const [state, handleSubmit] = useForm("mnjaywvk");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-slate-900/50 backdrop-blur-xl p-12 rounded-3xl border border-slate-800 shadow-xl text-center"
                    >
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="text-green-500" size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto">
                            Thanks for reaching out. I'll get back to you at my earliest convenience (typically within 24 hours).
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-16">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-slate-400 mb-8">Have a project in mind? Let's build something together.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                                    placeholder="Your Email"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors text-white"
                                placeholder="Your Subject"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors resize-none text-white"
                                placeholder="Tell me about your project..."
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
                        <a href="mailto:mukulbhagat001@gmail.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                            <Mail size={18} />
                            mukulbhagat001@gmail.com
                        </a>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Nashik, Maharashtra, India - 422006</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
