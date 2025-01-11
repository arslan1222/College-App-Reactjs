import React, { useRef } from 'react'
import './Testimonials.css'
import { assets } from '../../assets/asstes'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;  // translateX is 0


    
    const slideForward = () =>{
        if(tx > -50) {
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () =>{
        if(tx < 0) {
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img onClick={slideForward} className='next-btn' src={assets.next_icon} alt="" />
      <img onClick={slideBackward} className='back-btn' src={assets.back_icon} alt="" />

      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={assets.user1} alt="" />
                        <div>
                            <h3>Usman Irshad</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi fugit tenetur adipisci fugiat error consectetur commodi blanditiis delectus quod.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={assets.user2} alt="" />
                        <div>
                            <h3>Ahmed Ali</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi fugit tenetur adipisci fugiat error consectetur commodi blanditiis delectus quod.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={assets.user3} alt="" />
                        <div>
                            <h3>Atif Ilyas</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi fugit tenetur adipisci fugiat error consectetur commodi blanditiis delectus quod.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={assets.user4} alt="" />
                        <div>
                            <h3>Saad Ijaz</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum excepturi fugit tenetur adipisci fugiat error consectetur commodi blanditiis delectus quod.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
