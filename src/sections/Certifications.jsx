import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 relative overflow-hidden">
            {/* Background element */}
            <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -z-10" />

            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group"
                    >
                        <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Award size={48} className="text-slate-600 group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">Certification Title {item}</h3>
                            <p className="text-slate-400 text-sm">Issuing Organization</p>
                            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-500">
                                <span>Issued: Jan 2024</span>
                                <span className="cursor-pointer hover:text-white transition-colors">View Credential &rarr;</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
