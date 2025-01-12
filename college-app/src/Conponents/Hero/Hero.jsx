import React from "react";
import "./Hero.css";
import { assets } from "../../assets/asstes";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="hero container">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hero-text"
      >
        <h1>We Ensure Better Education For Better World</h1>
        <p>
          Our mission is to provide quality education that inspires innovation,
          fosters growth, and empowers individuals to create a better tomorrow.
        </p>
        <button className="btn">
          Explore more <img src={assets.dark_arrow} alt="" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
