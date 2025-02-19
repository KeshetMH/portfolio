import './App.css'
import Navbar from './component/Navbar'
import Skills  from './component/Skills'
import Introduction from './component/Introduction'
import Projects from './component/Projects'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'


function App() {

  return (
    <>
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
