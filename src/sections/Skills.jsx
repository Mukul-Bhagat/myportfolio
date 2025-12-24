import { motion } from 'framer-motion'
import { Code2, Server, Smartphone, Cloud, Database, PenTool, Layout } from 'lucide-react'

const skillsData = [
    {
        category: "Languages",
        icon: <Code2 className="w-6 h-6" />,
        skills: ["C++", "Java", "Python", "Kotlin", "JavaScript"]
    },
    {
        category: "Mobile Development",
        icon: <Smartphone className="w-6 h-6" />,
        skills: ["Android (Kotlin/Java)", "XML", "React Native"]
    },
    {
        category: "Full Stack (MERN)",
        icon: <Layout className="w-6 h-6" />,
        skills: ["React.js", "Node.js", "Express.js", "MongoDB"]
    },
    {
        category: "DevOps",
        icon: <Server className="w-6 h-6" />,
        skills: ["Linux", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git & GitHub"]
    },
    {
        category: "Cloud",
        icon: <Cloud className="w-6 h-6" />,
        skills: ["Azure", "AWS"]
    },
    {
        category: "Databases",
        icon: <Database className="w-6 h-6" />,
        skills: ["MongoDB", "SQL", "Firebase"]
    },
    {
        category: "Tools",
        icon: <PenTool className="w-6 h-6" />,
        skills: ["Microsoft Power Platform", "Cursor", "Shopify"]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{category.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, idx) => (
                                <span key={idx} className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
