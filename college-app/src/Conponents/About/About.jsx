import React from "react";
import "./About.css";
import { assets } from "../../assets/asstes";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="about"
    >
      <div className="about-left">
        <img className="about-img" src={assets.about} alt="" />
        <img className="play-icon" src={assets.play_icon} alt="" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Our university is committed to providing a world-class education that
          empowers students to become innovative thinkers, ethical leaders, and
          socially responsible citizens. We believe in fostering an environment
          that encourages creativity, critical thinking, and collaboration.
        </p>
        <p>
          With a diverse community of students and faculty, state-of-the-art
          facilities, and a curriculum designed to meet the challenges of the
          modern world, we prepare our students to excel in their chosen fields
          and make a meaningful impact on society.
        </p>
        <p>
          Join us on a journey of discovery, innovation, and transformation as
          we shape the leaders of tomorrow. Together, we aim to create a
          brighter, more sustainable future for generations to come.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
