import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import logo from '../assets/Logomb.png'
import profilePic from '../assets/profilepic.png'

const socialLinks = [
    { icon: Github, href: "https://github.com/Mukul-Bhagat/" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mukul-bhagat/" },
    { icon: Instagram, href: "https://www.instagram.com/mukulbhagat_/" },
    { icon: Twitter, href: "https://twitter.com/yourusername" },
]

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">


            {/* =========================================
           MOBILE LAYOUT (< md)
          ========================================= */}
            <div className="block md:hidden relative z-10 w-full px-6 pt-24 pb-12 flex flex-col items-center min-h-screen justify-center">

                {/* 1. TOP BAR (Logo Left, Socials Right) */}
                <div className="absolute top-0 left-0 w-full px-6 py-6 flex items-center justify-between z-50">
                    {/* Logo */}
                    <a href="/">
                        <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                className="text-slate-400 p-2 active:scale-95 transition-transform"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. MAIN MOBILE CONTENT */}
                <div className="flex flex-col items-center w-full">

                    {/* 3. NAME */}
                    <h1 className="text-5xl font-light text-white tracking-tight text-center mb-2">
                        Mukul Bhagat
                    </h1>

                    {/* 4. ROLE */}
                    <p className="text-lg font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-center mb-8">
                        Full Stack Developer | Cloud & DevOps Trainee
                    </p>

                    {/* 5. IMAGE (Centered) */}
                    <div className="relative w-full max-w-[320px] mb-8">
                        <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl -z-10" />
                        <img
                            src={profilePic}
                            alt="Mukul S. Bhagat"
                            className="w-full h-auto object-contain"
                            style={{ filter: "saturate(85%) contrast(110%) brightness(105%) drop-shadow(0 20px 25px rgba(0,0,0,0.15))" }}
                        />
                    </div>

                    {/* 6. DESCRIPTION */}
                    <p className="text-slate-400 text-base leading-relaxed text-center max-w-sm mb-8">
                        An aspiring software developer with hands-on experience in mobile applications, full-stack web development, and cloud-native systems. I focus on building scalable, clean, and efficient solutions.
                    </p>

                    {/* 7. BUTTONS */}
                    <div className="flex flex-row flex-wrap w-full justify-center gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center w-auto px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium shadow-lg hover:shadow-purple-500/30 text-center hover:opacity-90 active:scale-95 transition-all">
                            View Projects
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center w-auto px-6 py-3 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-300 text-sm font-medium text-center hover:bg-slate-800 hover:text-white hover:border-slate-500 active:scale-95 transition-all">
                            Get In Touch
                        </a>
                    </div>
                </div>

            </div>

            {/* =========================================
           DESKTOP LAYOUT (>= md)
          ========================================= */}
            <div className="hidden md:flex relative w-full min-h-screen items-center">

                {/* HEADER: Social Icons Top Right */}
                <header className="absolute top-0 right-0 p-8 z-50 flex items-center gap-8">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:text-purple-400"
                        >
                            <social.icon size={24} strokeWidth={1.5} />
                        </a>
                    ))}
                </header>

                {/* DESKTOP GRID */}
                <div className="w-full max-w-[1920px] mx-auto px-12 lg:px-24 grid grid-cols-2 gap-12 items-center h-full">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col items-start justify-center space-y-8 z-20">
                        {/* Logo above name */}
                        <a href="/" className="block">
                            <img src={logo} alt="Logo" className="w-10 lg:w-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                        </a>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white leading-tight">
                                Mukul <br />
                                <span className="font-thin text-slate-200">Bhagat</span>
                            </h1>

                            <h2 className="text-2xl lg:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wide">
                                Full Stack Developer | Cloud & DevOps Trainee
                            </h2>

                            <p className="text-slate-400 font-light text-lg lg:text-xl max-w-xl leading-relaxed">
                                An aspiring software developer with hands-on experience in mobile applications, full-stack web development, and cloud-native systems. I focus on building scalable, clean, and efficient solutions with a strong emphasis on performance.
                            </p>

                            <div className="flex flex-row gap-4 pt-4">
                                <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium shadow-md hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300">
                                    View Projects
                                </a>
                                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300">
                                    Get In Touch
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex items-center justify-center relative z-10 w-full h-full min-h-[500px]">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full max-w-[500px] lg:max-w-[650px] flex flex-col items-center group"
                        >
                            {/* PURPLE & BLUE GRADIENT SPOTLIGHT */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-blue-500/20 rounded-full blur-[80px] -z-10"
                            />

                            {/* CENTER BLUE GLOW */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 2.5, ease: "easeOut", delay: 0.1 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen"
                            />

                            <img
                                src={profilePic}
                                alt="Mukul S. Bhagat"
                                className="w-full h-auto object-contain z-10 relative"
                                style={{
                                    filter: "saturate(85%) contrast(110%) brightness(105%) drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
                                    width: '600px',
                                    maxWidth: 'none'
                                }}
                            />

                            {/* GROUNDING BASE SHADOW */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.5 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                className="absolute -bottom-4 w-[80%] h-16 bg-purple-900/40 blur-[40px] rounded-[100%] -z-10"
                            />

                            {/* SUBTLE PLATFORM SURFACE */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.8 }}
                                animate={{ opacity: 0.6, scaleX: 1 }}
                                transition={{ duration: 1.8, ease: "easeOut", delay: 0.1 }}
                                className="absolute -bottom-1 w-[110%] h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    )
}
