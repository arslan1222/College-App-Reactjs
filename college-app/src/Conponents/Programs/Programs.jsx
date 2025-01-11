import React from 'react'
import './Programs.css'
import {assets} from '../../assets/asstes'

const Programs = () => {
  return (
    <div className='programs'>
    <div className="program">
        <img src={assets.program1} alt="" />
        <div className="caption">
            <img src={assets.program_icon1} alt="" />
            <p>Graduation Degree</p>
        </div>
    </div>
    <div className="program">
        <img src={assets.program2} alt="" />
        <div className="caption">
            <img src={assets.program_icon2} alt="" />
            <p>Master Degree</p>
        </div>
    </div>
    <div className="program">
        <img src={assets.program3} alt="" />
        <div className="caption">
            <img src={assets.program_icon3} alt="" />
            <p>Post Gradution</p>
        </div>
    </div>
    </div>
  )
}

export default Programs
