import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import logo from '../assets/Logomb.png'
import profilePic from '../assets/profilepic.png'

const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername" },
    { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
    { icon: Instagram, href: "https://instagram.com/yourusername" },
    { icon: Twitter, href: "https://twitter.com/yourusername" },
]

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-[#0a0a0a] to-[#0f0518] overflow-hidden flex flex-col">

            {/* GLOBAL BACKGROUND LAYERS */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-900/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            {/* HEADER: SOCIALS ONLY */}
            <header className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-end items-start">
                <div className="flex flex-col gap-6 md:gap-8 items-center mt-2">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:text-purple-400"
                        >
                            <social.icon size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
                        </a>
                    ))}
                </div>
            </header>

            {/* MAIN CONTENT GRID */}
            <div className="flex-grow w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center relative z-10 pt-32 pb-12 lg:py-0">

                {/* LEFT COLUMN: LOGO & TEXT */}
                <div className="flex flex-col justify-center items-start space-y-6 md:space-y-8 order-2 lg:order-1">
                    {/* Logo - Now part of the flow */}
                    <a href="/" className="block mb-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-20 md:w-32 object-contain opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </a>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-4 md:space-y-6 w-full"
                    >
                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-light tracking-tight text-white leading-[1.1]">
                            Mukul <br />
                            <span className="font-thin text-slate-200">Bhagat</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl xl:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide max-w-2xl">
                            Mobile App Developer | Cloud & DevOps Trainee
                        </h2>

                        <p className="text-slate-400 font-light text-base md:text-lg xl:text-xl max-w-xl leading-relaxed">
                            An aspiring software developer with hands-on experience in mobile applications, full-stack web development, and cloud-native systems. I focus on building scalable, clean, and efficient solutions with a strong emphasis on performance, design, and real-world usability.
                        </p>

                        <div className="flex flex-wrap gap-4 md:gap-6 pt-6">
                            <a href="#projects" className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-base md:text-lg font-medium shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-300">
                                View Projects
                            </a>
                            <a href="#contact" className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-slate-700 text-slate-300 text-base md:text-lg font-light hover:bg-white/5 hover:border-slate-500 hover:text-white transition-all duration-300">
                                Get In Touch
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN: IMAGE */}
                <div className="flex items-end justify-center lg:justify-end h-[50vh] lg:h-screen w-full order-1 lg:order-2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full h-full flex items-end justify-center lg:justify-end"
                    >
                        {/* Glow behind image */}
                        <div className="absolute bottom-0 right-0 md:right-20 w-[60%] h-[70%] bg-purple-600/10 rounded-full blur-[80px] -z-10" />

                        <img
                            src={profilePic}
                            alt="Mukul S. Bhagat"
                            className="w-auto h-[90%] lg:h-[85%] xl:h-[90%] max-w-full object-contain object-bottom drop-shadow-2xl"
                            style={{
                                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                                filter: "drop-shadow(0 0 30px rgba(0,0,0,0.5))"
                            }}
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
