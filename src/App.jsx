import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-purple-500 selection:text-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-24">
                <Hero />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
