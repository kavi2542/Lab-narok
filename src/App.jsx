/* eslint-disable react/react-in-jsx-scope */


import './App.css'

import Navbar from './component/navbar/Navbar'
import Hero from './component/hero/Hero'
// eslint-disable-next-line no-unused-vars
import Skills from './component/Skill/Skills'
import Services from './component/Services/Services'
import Portfolio from './component/Portfolio/Portfolio'
import Number from './component/Number/Number'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import Team from './component/Team/Team'
// eslint-disable-next-line no-unused-vars
import AnimatedCursor from "react-animated-cursor"


function App() {
 

  return (
    <>
    
     <Navbar/>
     <Hero/>
     <Team/>
     <Services/>
     <Skills/>
     <Portfolio/>
     <Number/>
     <Testimonials/>
     <Contact/>
     <Footer/>
     
     
     
    </>
  )
}

export default App
