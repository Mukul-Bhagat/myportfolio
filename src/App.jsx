import { Helmet } from 'react-helmet-async'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import bgMain from './assets/bg-main.png'
import SectionDivider from './components/SectionDivider'

function App() {
    return (
        <div className="min-h-screen text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative">
            <Helmet>
                <title>Mukul Bhagat | Full Stack Developer | Cloud & DevOps Trainee</title>

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mukulbhagat.onrender.com/" />
                <meta property="og:title" content="Mukul Bhagat – Developer Portfolio" />
                <meta property="og:description" content="Full Stack Developer specializing in MERN, Mobile Apps, and Cloud & DevOps." />
                <meta property="og:image" content="https://mukulbhagat.onrender.com/og-image.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://mukulbhagat.onrender.com/" />
                <meta property="twitter:title" content="Mukul Bhagat – Developer Portfolio" />
                <meta property="twitter:description" content="Full Stack Developer specializing in MERN, Mobile Apps, and Cloud & DevOps." />
                <meta property="twitter:image" content="https://mukulbhagat.onrender.com/og-image.png" />
            </Helmet>

            {/* FIXED BACKGROUND */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                {/* 1. Underlying Texture Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${bgMain})` }}
                />

                {/* 2. Bluish-Purple Radial Pulse Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(76,29,149,0.3),transparent_70%)] animate-pulse-slow" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]" />

                {/* 3. Dark Vignette & Fade Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950/90" />
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.7)]" />
            </div>

            {/* HERO - Full Bleed */}
            <Hero />

            {/* REST OF CONTENT - Constrained */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative">

                {/* Divide Hero & About */}
                <SectionDivider />

                <About />
                <SectionDivider />

                <Skills />
                <SectionDivider />

                <Certifications />
                <SectionDivider />

                <Projects />
                <SectionDivider />

                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
