import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/asstes'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <div onClick={toggleMenu} className={`navbar container ${sticky ? 'dark-nav' : ''}`}>
      <img className='logo' src={assets.logo} alt="" />
      <ul className={mobileMenu ? 'mobile-menu show-menu' : 'mobile-menu hide-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={400} onClick={toggleMenu}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={400} onClick={toggleMenu}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={400} onClick={toggleMenu}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={400} onClick={toggleMenu}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={400} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={400} className='btn' onClick={toggleMenu}>Contact us</Link></li>
      </ul>
      <img onClick={toggleMenu} className='menu-icon' src={assets.menu_icon} alt="" />
    </div>
  )
}


export default Navbar
