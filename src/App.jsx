import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Events from './Components/Events/Events'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="containers">
      <Title subTitle= 'Deanslist' title='Get Started On Solana'/>
      <Programs/>
      <About/>
      <Title subTitle= 'Our Services' title='What We Offer'/>
      <Services/>
      <Title subTitle= 'What&apos;s Happening'  title='Events'/>
      <Events/>
      <Title subTitle= 'Contact Us'  title='GET IN TOUCH'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App