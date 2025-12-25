import { Github, Linkedin, Instagram, Mail, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex space-x-6 mb-8">
                    <a href="#" className="text-slate-400 hover:text-purple-500 transition-colors transform hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-purple-500 transition-colors transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://www.instagram.com/mukulbhagat_/" className="text-slate-400 hover:text-purple-500 transition-colors transform hover:scale-110">
                        <Instagram size={24} />
                    </a>
                    <a href="https://x.com/mukul_bhagat_" className="text-slate-400 hover:text-purple-500 transition-colors transform hover:scale-110">
                        <Twitter size={24} />
                    </a>
                    <a href="mailto:contact@example.com" className="text-slate-400 hover:text-purple-500 transition-colors transform hover:scale-110">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-slate-500 text-sm">
                    &copy; 2025 Mukul S. Bhagat. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
