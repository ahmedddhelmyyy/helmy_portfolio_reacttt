import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import BubbleBackground from '../src/components/BackGround';
import Experience from './components/experience/Experience'

function App() {

  return (
    <>

  <BubbleBackground /> {/* Render bubbles behind all content */}
      
     <Home>
     </Home>
     <Nav></Nav>
     <About></About>
     <Experience />
     <Skills></Skills>
     <Projects></Projects>
     <Contact></Contact>
     <Services></Services>
     <Footer></Footer>
    
    
    
    
    </>
  )
}

export default App
