import React from 'react'
import Navbar from './Conponents/Navbar/Navbar'
import Hero from './Conponents/Hero/Hero'
import Programs from './Conponents/Programs/Programs'
import Title from './Conponents/Title/Title'
import About from './Conponents/About/About'
import Capmus from './Conponents/Campus/Capmus'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos' />
        <Capmus />
      </div>
      
    </div>
  )
}

export default App
