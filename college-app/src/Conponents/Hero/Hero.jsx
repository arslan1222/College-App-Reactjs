import React from 'react'
import './Hero.css'
import { assets } from '../../assets/asstes'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For Better World</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur exercitationem, nisi voluptas blanditiis illum rem.</p>
        <button className='btn'>Explore more <img src={assets.dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
