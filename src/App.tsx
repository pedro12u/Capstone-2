import { CursorGlow } from './components/CursorGlow'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Architecture } from './sections/Architecture'
import { CaseStudies } from './sections/CaseStudies'
import { Contact } from './sections/Contact'
import { Dashboards } from './sections/Dashboards'
import { Hero } from './sections/Hero'
import { Labs } from './sections/Labs'
import { Projects } from './sections/Projects'
import { StackSection } from './sections/StackSection'
import { Workflow } from './sections/Workflow'

function App() {
  const resumeUrl = `${import.meta.env.BASE_URL}files/Curriculo_Pedro_Toscano.pdf`

  return (
    <>
      <CursorGlow />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero resumeUrl={resumeUrl} />
          <Projects />
          <CaseStudies />
          <Architecture />
          <StackSection />
          <Workflow />
          <Labs />
          <Dashboards />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
