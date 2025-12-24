import { motion } from 'framer-motion';
// 1. Safe Imports (Verified Existence)
import {
    SiCplusplus, SiPython, SiKotlin, SiJavascript,
    SiAndroid, SiReact,
    SiNodedotjs, SiExpress, SiMongodb,
    SiLinux, SiDocker, SiKubernetes, SiJenkins, SiGit, SiGithub, SiGithubactions,
    SiFirebase, SiMysql,
    SiShopify
} from "react-icons/si";

// 2. Fallbacks for missing SI icons (Java, AWS, Azure, Microsoft, XML)
import { FaJava, FaAws, FaMicrosoft } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { FileCode } from 'lucide-react';

// Custom Cursor AI Icon
const CursorIcon = (props) => (
    <svg viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor" {...props}>
        <path d="M214.5 125.6c0 49.3-40 89.3-89.3 89.3-49.3 0-89.3-40-89.3-89.3s40-89.3 89.3-89.3c49.3 0 89.3 40 89.3 89.3z" fill="white" fillOpacity="0.2" />
        <path d="M214.5 125.6c0 49.3-40 89.3-89.3 89.3-49.3 0-89.3-40-89.3-89.3s40-89.3 89.3-89.3c49.3 0 89.3 40 89.3 89.3z" stroke="white" strokeWidth="16" />
        <path d="M170 125l-70 40V85l70 40z" fill="currentColor" />
    </svg>
);

// Custom Anti Gravity Icon (Rocket / Floating)
const AntiGravityIcon = (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const skillsData = [
    {
        title: "Languages",
        items: [
            { name: "C++", icon: SiCplusplus },
            { name: "Java", icon: FaJava }, // Use FA
            { name: "Python", icon: SiPython },
            { name: "Kotlin", icon: SiKotlin },
            { name: "JavaScript", icon: SiJavascript },
        ]
    },
    {
        title: "Mobile Development",
        items: [
            { name: "Android", icon: SiAndroid },
            { name: "XML", icon: FileCode }, // Use Lucide
            { name: "React Native", icon: SiReact },
        ]
    },
    {
        title: "Full Stack (MERN)",
        items: [
            { name: "React.js", icon: SiReact },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "MongoDB", icon: SiMongodb },
        ]
    },
    {
        title: "DevOps",
        items: [
            { name: "Linux", icon: SiLinux },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Jenkins", icon: SiJenkins },
            { name: "CI/CD", icon: SiGithubactions },
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
        ]
    },
    {
        title: "Cloud",
        items: [
            { name: "Azure", icon: VscAzure }, // Use VSC
            { name: "AWS", icon: FaAws }, // Use FA
        ]
    },
    {
        title: "Databases",
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "SQL", icon: SiMysql },
            { name: "Firebase", icon: SiFirebase },
        ]
    },
    {
        title: "Tools",
        items: [
            { name: "Power Platform", icon: FaMicrosoft }, // Use FA
            { name: "Cursor", icon: CursorIcon },
            { name: "Anti Gravity", icon: AntiGravityIcon },
            { name: "Shopify", icon: SiShopify },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="pt-0 pb-20">
            <div className="text-center mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600"
                >
                    Technical Arsenal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 max-w-2xl mx-auto"
                >
                    A comprehensive list of technologies and tools I've worked with.
                </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 px-4 md:px-0 max-w-7xl mx-auto">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] border border-slate-800 rounded-xl p-6 bg-slate-900/50 hover:bg-slate-900 transition-colors backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2 text-slate-200">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {category.items.map((skill, idx) => {
                                // Safety: Fallback to FileCode if icon component is missing
                                const IconComponent = skill.icon || FileCode;

                                return (
                                    <div
                                        key={idx}
                                        className="animate-float hover-pause"
                                        style={{ animationDelay: idx % 2 === 1 ? '-2s' : '0s' }}
                                    >
                                        <div
                                            title={skill.name}
                                            className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 hover:scale-110 transition-all cursor-help ring-1 ring-slate-700/50 hover:ring-purple-500/50 group relative"
                                        >
                                            <IconComponent className="text-3xl text-slate-400 group-hover:text-purple-400 transition-colors duration-300" />

                                            {/* Tooltip */}
                                            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-slate-900 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-20 border border-slate-700 shadow-lg translate-y-2 group-hover:translate-y-0 transition-all">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
