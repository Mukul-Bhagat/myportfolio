import { motion } from 'framer-motion'
import { Code, Terminal, Cpu } from 'lucide-react'
import travelPic from '../assets/travelpic.jpg'

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block" // Hidden on mobile, visible on desktop
                >
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 relative z-10 border border-slate-700">
                        <img
                            src={travelPic}
                            alt="Mukul Travelling"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
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
                            An aspiring Software Developer with hands-on experience in  <strong className="text-purple-400"> Full-Stack Web applications, Native Mobile Apps, AI-powered solutions</strong> and modern <strong className="text-purple-400">DevOps</strong> tools and I thrive on managing the full development lifecycle—from concept to deployment
                        </p>
                        <p>
                            Beyond the screen, I am fueled by a love for fitness and travel. Whether I’m pushing my limits in the gym or exploring new destinations, I bring that same adventurous and disciplined mindset to my code. I believe that exploring the world unlocks creativity, and staying fit builds the resilience needed to solve complex technical challenges. I’m always looking for the next problem to solve and the next place to explore.
                        </p>
                    </div>

                    {/* MOBILE IMAGE (Visible only on mobile) */}
                    <div className="block md:hidden w-full aspect-square rounded-2xl overflow-hidden border border-slate-700 my-8">
                        <img
                            src={travelPic}
                            alt="Mukul Travelling"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="mt-8">
                        <a
                            href="https://www.instagram.com/mukulbhagat_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
                        >
                            Follow My Journey on Instagram
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
