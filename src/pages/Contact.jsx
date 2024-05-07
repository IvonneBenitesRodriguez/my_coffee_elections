import React from "react";
import BeansCoffee from "../assets/beansCoffee.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BeansCoffee})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="address">Address</label>
          <input
            name="address"
            placeholder="Enter your address..."
            type="text"
          />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            placeholder="Enter your phone number..."
            type="tel"
          />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="1"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
