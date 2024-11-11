import About from './About'
import Contact from './Contact'
import Exp from './Experience'
import Intro from './Landing'
import Navbar from './Navbar'
import Projects from './Project'
import Tech from './Tech'

export default function Home(){
    return(
        <div className="relative p-10 container mx-auto">
        <Navbar />
        <Intro />
        <About />
        <Tech/>
        <Exp/>
        <Projects/>
        <Contact/>
        
        hi there 
      </div>
    )
}