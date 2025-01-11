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

  return (
    <div className={`navbar container ${sticky ? 'dark-nav' : ''}`}>
      <img className='logo' src={assets.logo} alt="" />
      <ul>
        <Link to='hero' smooth={true} offset={0} duration={400}><li>Home</li></Link>
        <li><Link to='program' smooth={true} offset={-260} duration={400}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={400}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={400}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={400}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={400} className='btn'>Contact us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
