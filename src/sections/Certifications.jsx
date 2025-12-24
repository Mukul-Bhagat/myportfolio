import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Award } from 'lucide-react';

const certifications = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        description: "Foundational understanding of AWS Cloud concepts, security, and compliance.",
        color: "from-orange-400 to-yellow-500",
        link: "#"
    },
    {
        id: 2,
        title: "Meta Front-End Developer",
        issuer: "Meta",
        date: "2023",
        description: "Professional certificate covering React, JavaScript, and modern UI/UX principles.",
        color: "from-blue-400 to-cyan-400",
        link: "#"
    },
    {
        id: 3,
        title: "Google UX Design Professional",
        issuer: "Google",
        date: "2023",
        description: "Comprehensive training in UX research, wireframing, prototyping, and testing.",
        color: "from-indigo-400 to-purple-400",
        link: "#"
    },
    {
        id: 4,
        title: "Docker Certified Associate",
        issuer: "Docker",
        date: "2024",
        description: "Skills in orchestration, image creation, installation, and security scanning.",
        color: "from-blue-500 to-blue-700",
        link: "#"
    }
];

export default function Certifications() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextCert = () => {
        setActiveIndex((prev) => (prev + 1) % certifications.length);
    };

    const prevCert = () => {
        setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
    };

    const getCertIndex = (offset) => {
        return (activeIndex + offset + certifications.length) % certifications.length;
    };

    return (
        <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white"
                >
                    Main Certifications
                </motion.h2>

                <div className="relative h-[500px] flex items-center justify-center">

                    {/* Previous Button */}
                    <button
                        onClick={prevCert}
                        className="absolute left-0 md:left-4 z-30 p-3 rounded-full bg-slate-800/50 hover:bg-purple-500 hover:text-white transition-all backdrop-blur-sm border border-slate-700 text-slate-300"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextCert}
                        className="absolute right-0 md:right-4 z-30 p-3 rounded-full bg-slate-800/50 hover:bg-purple-500 hover:text-white transition-all backdrop-blur-sm border border-slate-700 text-slate-300"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Container */}
                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center perspective-1000">
                        <AnimatePresence mode="popLayout">
                            {[-1, 0, 1].map((offset) => {
                                const index = getCertIndex(offset);
                                const cert = certifications[index];
                                const isActive = offset === 0;

                                return (
                                    <motion.div
                                        key={`${cert.id}-${offset}`}
                                        layout
                                        initial={{
                                            scale: 0.8,
                                            x: offset * 100 + '%',
                                            opacity: 0,
                                            zIndex: 0
                                        }}
                                        animate={{
                                            scale: isActive ? 1 : 0.85,
                                            x: offset === 0 ? '0%' : (offset > 0 ? '60%' : '-60%'),
                                            opacity: isActive ? 1 : 0.4,
                                            zIndex: isActive ? 20 : 10,
                                            rotateY: isActive ? 0 : (offset > 0 ? -15 : 15) // Subtle 3D rotation
                                        }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className={`absolute flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 border-opacity-50
                                            ${isActive ? 'w-full md:w-[800px] h-full z-20 shadow-purple-900/20' : 'w-[300px] md:w-[400px] h-[300px] z-10 blur-[1px]'}`}
                                    >

                                        {/* Left Side: Certificate Image / Visual */}
                                        <div className={`relative ${isActive ? 'w-full md:w-1/2 h-48 md:h-full' : 'w-full h-full'} overflow-hidden`}>
                                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20`} />
                                            {/* Pattern Overlay */}
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />

                                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                                <Award size={isActive ? 80 : 48} className="text-white/80 mb-4 drop-shadow-lg" />
                                                <h3 className={`font-bold text-white ${isActive ? 'text-2xl' : 'text-lg'}`}>
                                                    {cert.title}
                                                </h3>
                                                {!isActive && <p className="text-slate-300 text-sm mt-2">{cert.issuer}</p>}
                                            </div>
                                        </div>

                                        {/* Right Side: Details (Only Visible when Active) */}
                                        {isActive && (
                                            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-slate-900/95 backdrop-blur-md">
                                                <div className="mb-6">
                                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                                        {cert.date}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                                    {cert.title}
                                                </h3>
                                                <p className="text-purple-400 font-medium mb-4 text-lg">
                                                    {cert.issuer}
                                                </p>

                                                <p className="text-slate-400 leading-relaxed mb-8">
                                                    {cert.description}
                                                </p>

                                                <a
                                                    href={cert.link}
                                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors w-full md:w-auto"
                                                >
                                                    Verify Certificate
                                                    <ExternalLink size={18} />
                                                </a>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Scroll Indicator */}
                <div className="flex gap-2 justify-center mt-8 md:hidden">
                    {certifications.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === activeIndex ? 'bg-purple-500' : 'bg-slate-700'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
