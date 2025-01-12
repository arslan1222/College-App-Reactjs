import React from "react";
import "./Footer.css";
import { assets } from "../../assets/asstes";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
// import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.logo} alt="" />
          <p>
            Empowering students with exceptional education and resources to build a brighter future. We aim to inspire innovation and nurture leadership.
          </p>
          <div className="footer-social-icons">
            <a className="social-icon"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a className="social-icon"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a className="social-icon"
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a className="social-icon"
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <FaPhoneAlt size={16} style={{ marginRight: "8px" }} />
              +92 321-7077229
            </li>
            <li>
              <FaEnvelope size={16} style={{ marginRight: "8px" }} />
              arslanhaiderchand88@gmail.com
            </li>
            <li>
              <FaMapMarkerAlt size={16} style={{ marginRight: "8px" }} />
              Baker street, suite 335, Sialkot, Pakistan
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; Edusity - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
