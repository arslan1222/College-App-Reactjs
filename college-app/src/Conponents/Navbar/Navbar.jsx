import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/asstes'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <div className={`navbar container ${sticky ? 'dark-nav' : ''}`}>
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
