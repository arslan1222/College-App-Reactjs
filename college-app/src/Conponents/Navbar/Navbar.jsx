import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/asstes'

const Navbar = () => {
  return (
    <div className='navbar container'>
      <img className='logo' src={assets.logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </div>
  )
}

export default Navbar
