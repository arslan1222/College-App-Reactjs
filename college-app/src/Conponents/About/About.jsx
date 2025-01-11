import React from 'react'
import './About.css'
import { assets } from '../../assets/asstes'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img className='about-img' src={assets.about} alt="" />
        <img className='play-icon' src={assets.play_icon} alt="" />
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium nam omnis assumenda, ipsam corporis suscipit! Consequatur aperiam fugiat non?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil doloremque sequi fugiat! Veritatis sint, accusamus, neque ab saepe deserunt esse delectus eius laboriosam sit, dignissimos non suscipit pariatur dolor?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id animi exercitationem nulla officia expedita, commodi ducimus quod a quidem vitae.</p>
      </div>

    </div>
  )
}

export default About
