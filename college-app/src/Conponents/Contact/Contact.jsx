import React from 'react'
import './Contact.css'
import { assets } from '../../assets/asstes'

const Contact = () => {

    // web3form react code or messaging
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_API_BASE_URL);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your Message Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={assets.msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum inventore blanditiis repellat optio omnis accusamus accusantium provident in nesciunt suscipit.</p>
        <ul>
            <li><img src={assets.mail_icon} alt="" />arslanhaiderchand88@gmail.com</li>
            <li><img src={assets.phone_icon} alt="" />(+92) 321-7077-229</li>
            <li><img src={assets.location_icon} alt="" />Baker Street, suite 335 <br /> Sialkot, Pakistan</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="phone" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={assets.white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
