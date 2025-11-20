import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}files/Curriculo_Pedro_Toscano.pdf`

  return (
    <div className="min-h-screen bg-background">
      <Navbar resumeUrl={resumeUrl} />
      <main>
        <Hero resumeUrl={resumeUrl} />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
