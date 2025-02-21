

import React from 'react';
import './Footer.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer (){
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Jem Project</h3>
          <address>
            Tunis , Rue du Liban,<br />
            4eme etage, 27, b17 <br />

          </address>
          <p>
            <strong style={{color : 'white'}}>Phone:</strong> + 216 58 065 605 / + 216 25 783 283
          </p>
          <p>
            <strong style={{color : 'white'}}>Email:</strong> info@karriery.com
          </p>
          <div className="footer-socials">
            <a href="#" ><FaXTwitter className="footer-icon" size={30} fill='white'/></a>
            <a href="#" ><FaFacebookSquare className="footer-icon" size={30} fill='white'/></a>
            <a href="#" ><FaInstagram className="footer-icon" size={30} fill='white'/></a>
            <a href="#" ><CiLinkedin className="footer-icon" size={30} fill='white'/></a>
          </div>
        </div>


        <div className="footer-section">
          <h3 className="footer-title">Useful Links</h3>
          <ul>
            <li><span>► </span><a href="#">Home</a></li>
            <li><span>► </span><a href="#">About Us</a></li>
            <li><span>► </span><a href="#">Our News</a></li>
            <li><span>► </span><a href="#">Reviews</a></li>
            <li><span>► </span><a href="#">Contact</a></li>
          </ul>
        </div>

 
        <div className="footer-section">
          <h3 className="footer-title">Our Services</h3>
          <ul>
            <li> <span>► </span> <a href="#">News</a></li>
            <li><span>► </span><a href="#">Blogs</a></li>
            <li><span>► </span><a href="#">See more...</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Feed Back</h3>
          <p>Give us your feedback to help improve our services at <b>info@karriery.com.</b></p>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button type="submit" className="footer-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Copyright © 2024 Aftercode</li>
          </ul>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
