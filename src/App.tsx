import './App.css'
import About from './components/About'
import Achievements from './components/Achievement'
import Contact from './components/Contact'
import Exp from './components/Experience'
import Intro from './components/Landing'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import Tech from './components/Tech'
import './index.css'

function App() {
  return (
    <div className='overflow-x-hidden selection:text-cyan-900 selection:bg-cyan-300'>

      {/* Background Layer */}
      <div className="fixed inset-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      
      <div className="relative p-10 container mx-auto">
        <Navbar />
        <Intro />
        <About />
        <Tech/>
        <Exp/>
        <Projects/>
        <Achievements/>
        <Contact/>
        
         
      </div>

    </div>
  )
}

export default App
