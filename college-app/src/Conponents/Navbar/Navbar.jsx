import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/asstes'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar container'>
      <img className='logo' src={assets.logo} alt="" />
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/program'><li>Program</li></NavLink>
        <NavLink to='/about'><li>About us</li></NavLink>
        <NavLink to='/campus'><li>Campus</li></NavLink>
        <NavLink to='/testimonials'><li>Testimonials</li></NavLink>
        <NavLink to='/cantact'><li><button className='btn'>Contact us</button></li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar
