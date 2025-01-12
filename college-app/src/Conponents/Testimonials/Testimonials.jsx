import React, { useRef } from "react";
import "./Testimonials.css";
import { assets } from "../../assets/asstes";
import { motion } from "motion/react";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0; // translateX is 0

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="testimonials"
    >
      <img
        onClick={slideForward}
        className="next-btn"
        src={assets.next_icon}
        alt=""
      />
      <img
        onClick={slideBackward}
        className="back-btn"
        src={assets.back_icon}
        alt=""
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user1} alt="" />
                <div>
                  <h3>Sara Ilyas</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Sara's experience with our platform has been exceptional. She
                loves how easy it is to connect and collaborate with others
                while staying productive.
              </p>
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
              <p>
                Ahmed appreciates the intuitive design and the robust features
                of our platform, which have helped him streamline his daily
                tasks.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user3} alt="" />
                <div>
                  <h3>Ayesha Tariq</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Ayesha finds our platform to be a game-changer for her team. She
                especially loves the seamless communication tools and real-time
                updates.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={assets.user4} alt="" />
                <div>
                  <h3>Usman Mateen</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Usman has found great value in our platform's flexibility and
                customer support. He recommends it to anyone looking to boost
                productivity.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Testimonials;
