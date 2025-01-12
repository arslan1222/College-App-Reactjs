import React from 'react'
import './Campus.css'
import { assets } from '../../assets/asstes'
import { motion } from "motion/react"

const Capmus = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className='campus'>
      <div className="gallery">
        <img src={assets.gallery1} alt="" />
        <img src={assets.gallery2} alt="" />
        <img src={assets.gallery3} alt="" />
        <img src={assets.gallery4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={assets.white_arrow} alt="" /></button>
    </motion.div>
  )
}

export default Capmus
