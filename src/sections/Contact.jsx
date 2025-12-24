import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
    const [state, handleSubmit] = useForm("mnjaywvk");

    if (state.succeeded) {
        return (
            <section id="contact" className="py-12 flex items-center justify-center min-h-[50vh]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-[90%] max-w-[420px] bg-slate-900/60 backdrop-blur-xl p-8 rounded-[20px] border border-white/10 shadow-[0_0_40px_-10px_rgba(124,58,237,0.1)] text-center"
                >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 mb-6 text-sm">
                        I'll get back to you shortly.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-8 py-2.5 rounded-full bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
                    >
                        Send Another
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-12 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-[90%] max-w-[420px] bg-slate-900/60 backdrop-blur-md p-8 rounded-[24px] border border-white/10 shadow-[0_0_50px_-10px_rgba(124,58,237,0.15)]"
            >
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Get In Touch</h2>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="relative">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all text-sm"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-pink-500 text-xs mt-1" />
                    </div>

                    {/* Subject */}
                    <div className="relative">
                        <input
                            id="subject"
                            type="text"
                            name="subject"
                            required
                            placeholder="Subject"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all text-sm"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="4"
                            placeholder="Message"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder:text-slate-500 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all resize-none text-sm"
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-pink-500 text-xs mt-1" />
                    </div>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm shadow-lg shadow-purple-900/20 hover:scale-[1.02] hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {state.submitting ? 'Sending...' : 'Send'}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-xs flex items-center justify-center gap-2">
                        <MapPin size={14} />
                        Nashik, Maharashtra, India - 422006
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
