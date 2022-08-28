import React from 'react';
import "../Css/footer.css";
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='Footer'>
     <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i
           className="fab fa-slack"></i>
          <span className="logo_name">Healthify</span>
        </div>
        <div className="media-icons">
          <a href="https://m.facebook.com/100063734421533/" target="_main"><FaFacebookF/></a>
          <a href="https://twitter.com/rohit_dev7" target="_main"><FaTwitter/></a>
          <a href="https://www.instagram.com/devrohit778/" target="_main"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/emailget-pandey-8a6896174/" target="_main"><FaLinkedinIn/></a>
          <a href="https://www.youtube.com/channel/UCYl68rshw-rYuEJxwb1ZpQQ" target="_main"><FaYoutube/></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Company</li>
          <li><Link to="/">Home</Link></li>
          <li><a href="#contact">Contact us</a></li>
          
          <li><a href="#aboutus">About us</a></li>
          <li><Link to="/login">Get started</Link></li>
        </ul>
        <ul className="box">
          <li className="link_name">Services</li>
          <li><Link to="/">Surgery</Link></li>
          <li><Link to="/">Body Checkups</Link></li>
          <li><Link to="/">Vaccination</Link></li>
          <li><Link to="/">Dental checkups</Link></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/">My account</Link></li>
          <li><Link to="/">Prefrences</Link></li>
          <li><Link to="/">Purchase</Link></li>
        </ul>
        <ul className="box">
          <li className="link_name">Courses</li>
          <li><Link to="/">Nurse Training</Link></li>
          <li><Link to="/">Surgery</Link></li>
          <li><Link to="/">Clinical staff Training</Link></li>
          <li><Link to="/">Covid-19 precautions</Link></li>
        </ul>
        <div className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="email" name="email" placeholder="Enter your email"/></li>
          <li><input type="button"  value='Subscribe'/></li>
        </div>
        
        
        
        {/* <form ref={emailget} className='box input-box ' onSubmit={send_email}>
          <div className='sub_form'>
            <li className="link_name">Subscribe</li>
            <li><input type="email" placeholder="Enter your email"/></li>
            <li><input type="submit" value='Subscribe' className='footer_submit'/></li>
          </div>
        </form> */}
        





      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <Link to="/">Health Care.</Link>All rights reserved</span>
        <span className="policy_terms">
          <Link to="/">Privacy policy</Link>
          <Link to="/">Terms & condition</Link>
        </span>
      </div>
    </div>
  </footer>



    </div>
  )
}
