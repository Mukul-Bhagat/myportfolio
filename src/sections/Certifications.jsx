import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, X } from 'lucide-react';

const certifications = [
    {
        id: 1,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        description: "Foundational understanding of AWS Cloud concepts, security, compliance, and basic architectural best practices.",
        color: "from-orange-400 to-yellow-500",
        link: "#"
    },
    {
        id: 2,
        title: "Meta Front-End Developer",
        issuer: "Meta",
        date: "2023",
        description: "Professional certificate covering React, JavaScript, modern UI/UX principles, and responsive web design.",
        color: "from-blue-400 to-cyan-400",
        link: "#"
    },
    {
        id: 3,
        title: "Google UX Design Professional",
        issuer: "Google",
        date: "2023",
        description: "Comprehensive training in UX research, wireframing, prototyping, and user testing methodologies.",
        color: "from-indigo-400 to-purple-400",
        link: "#"
    },
    {
        id: 4,
        title: "Docker Certified Associate",
        issuer: "Docker",
        date: "2024",
        description: "Skills in orchestration, image creation, installation, and security scanning for containerized applications.",
        color: "from-blue-500 to-blue-700",
        link: "#"
    }
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certifications" className="py-16 relative overflow-hidden bg-slate-950">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600"
                >
                    Main Certifications
                </motion.h2>

                {/* Horizontal Scroll / Sliding Layout */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scroll-smooth no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            onClick={() => setSelectedCert(cert)}
                            className="min-w-[300px] md:min-w-[350px] aspect-[16/10] bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 group relative snap-center"
                        >
                            {/* Certificate Thumbnail Appearance */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                            <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-sm text-slate-700 z-10">
                                <Award size={20} />
                            </div>

                            <div className="h-full flex flex-col items-center justify-center p-6 text-center relative z-0">
                                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mb-3 text-white shadow-md`}>
                                    <Award size={28} />
                                </div>
                                <h3 className="text-slate-900 font-bold text-lg leading-tight mb-1 group-hover:text-purple-600 transition-colors line-clamp-2">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-500 text-sm font-medium">{cert.issuer}</p>
                            </div>

                            {/* Hover Overlay Text */}
                            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full">
                                    View Details
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            className="bg-slate-900/90 border border-slate-700/50 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:h-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Left: Certificate Visual */}
                            <div className="w-full md:w-1/2 bg-white relative p-12 flex items-center justify-center min-h-[300px]">
                                <div className={`absolute inset-0 bg-gradient-to-br ${selectedCert.color} opacity-10`} />
                                <div className="text-center relative z-10">
                                    <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${selectedCert.color} flex items-center justify-center mb-6 text-white shadow-xl`}>
                                        <Award size={48} />
                                    </div>
                                    <h2 className="text-3xl font-serif text-slate-800 tracking-wide">CERTIFICATE</h2>
                                    <p className="text-slate-500 font-medium mt-2">OF COMPLETION</p>
                                    <div className="w-16 h-1 bg-slate-300 mx-auto my-6" />
                                    <p className="text-slate-900 font-bold text-xl">{selectedCert.title}</p>
                                </div>
                            </div>

                            {/* Right: Details */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-slate-900/50">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                        ISSUED {selectedCert.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedCert.title}</h3>
                                <p className="text-lg text-purple-400 font-medium mb-6">{selectedCert.issuer}</p>

                                <p className="text-slate-400 leading-relaxed mb-8 text-base">
                                    {selectedCert.description}
                                </p>

                                <div className="mt-auto">
                                    <a
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-white hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-all shadow-lg active:scale-[0.98]"
                                    >
                                        Verify Certificate
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
