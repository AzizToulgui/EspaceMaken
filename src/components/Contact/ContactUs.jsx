import React from 'react';
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import "./ContactUs.scss";

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container">
      <div className="section-title">
          <h1>Contact-Us</h1>
          <hr />
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.866399321634!2d10.323724037149507!3d36.88080645348474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b4f2c142108d%3A0x4f2c9dd1470d9787!2sCentre%20Fadhel%20Ben%20Achour%20pour%20la%20Culture%20et%20l&#39;Art%20(%20espace%20Maken%20)!5e0!3m2!1sfr!2stn!4v1734521377601!5m2!1sfr!2stn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact-details">
              <div className="info">
                <CiLocationOn className="icon" size={40} />
                <div>
                  <h4>Address</h4>
                  <p>Tunis, Rue du Liban,</p>
                  <p>4eme etage, 27, b17</p>
                </div>
              </div>
              <div className="info">
                <CiPhone className="icon" size={40}  />
                <div>
                  <h4>Call Us</h4>
                  <p>+ 216 58 065 605</p>
                  <p>+ 216 25 783 283</p>
                </div>
              </div>
              <div className="info">
                <TfiEmail className="icon" size={40} />
                <div>
                  <h4>Email Us</h4>
                  <p>info@karriery.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form>
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" />
              <input type="text" placeholder="Subject" className="form-input" />
              <textarea placeholder="Message" className="form-textarea"></textarea>
              <button type="submit" className="send-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

