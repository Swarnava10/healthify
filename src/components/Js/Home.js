import React from 'react';
import "../Css/home.css";
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube, FaStethoscope,FaUserMd, FaPlusSquare, FaMedkit, FaHeartbeat, FaAmbulance} from "react-icons/fa";
import doctor from "../Images/doctor.png";
import doctor1 from "../Images/doctor1.svg";
import doctor2 from "../Images/doctor2.png";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';







export const Home = () => {

  const contacts = useRef('')
  const name = useRef('')
  const email = useRef('')
  const phone = useRef('')
  const message= useRef('')

  

  const send_message =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_w9cfa2n', 'template_ay9u7lr', contacts.current , 'ubcme6hEA4NNt02J3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    name.current.value="";
    email.current.value="";
    phone.current.value="";
    message.current.value="";
  }


  return (
    <div className='Home' id="home">

      <Header/>
      {/* LANDING PAGE */}
      <div className="landingpage" >
        <div className="landing_description">
          <div className="land_heading">Recover yourself faster with Heathify Pro Kit.</div>
          <div className="land_description">Welcome to Healthify me, a platform provide one on one Doctors consultation, created by the development team at Start Bootstrap</div>         
          <div className="landbutton">
          <button type="button" className="btn btn-primary btn-lg btnk1"><a className='land_btnn' href="#aboutus">{"Details ->"}</a></button>
          </div>
        </div>
        <img src={doctor} className="Landing_image" alt="NoneNone" />
      </div>









    {/* OUR SERVICES */}
    <section className='section1' id="services">
      <div className="row row11">
        <h2 className="section-heading">Our Services</h2>
        <div className="servicess1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, magnam eos? Nemo hic numquam vel repellat?</div>
        <div className="servicess2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sint.</div>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FaMedkit className='fas'/>
            </div>
            <h3>Medicinal Services</h3>
            <p className='p11'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FaUserMd className='fas'/>
            </div>
            <h3>Physiotherapy Services</h3>
            <p className='p11'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FaStethoscope className='fas'/>
            </div>
            <h3>Surgical Services</h3>
            <p className='p11'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FaPlusSquare className='fas'/>
            </div>
            <h3>Nursing Services</h3>
            <p className='p11'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FaHeartbeat className='fas'/>
            </div>
            <h3>Paediatric Services</h3>
            <p className='p11'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <FaAmbulance className='fas'/>
            </div>
            <h3>Radiology Services</h3>
            <p className='p11'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.</p>
          </div>
        </div>
      </div>
    </section>

    











      {/* ABOUT Us */}
      <section className='shadow-lg about_section' id="aboutus">
      <h2 className="service-heading">---- About Us ----</h2>
      <div className="Services_offered">
        <img src={doctor1} alt="" className=' service_image'/>
        <div className="service_description">
          <div className="serviceheading ghost1">Patient's Comfort</div>
          <div className="service_descrip">Effective doctor-patient communication is a central clinical function in building a therapeutic doctor-patient relationship, which is the heart and art of medicine. This is important in the delivery of high-quality health care. </div>
          <div className="service_descrip">Much patient dissatisfaction and many complaints are due to breakdown in the doctor-patient relationship. However, many doctors tend to overestimate their ability in communication. Over the years, much has been published in the literature on this important topic.</div>

        </div>
      </div>

      {/* GUIDELINES */}
      <div className="Services_offered guidelines">
        <div className="guide_description ">
          <div className="serviceheading">Guidelines</div>
          <div className="service_descrip guide_desc">There have been some instances of hospitals having closed down as few health care workers(HCW) working there turned out to be positive for COVID -19. Also some non-COVID healthfacilities have reported confirmation of COVID-19, in patients admitted for unrelated/nonrespiratory illness, causing undue apprehension among healthcare workers, sometimesleading to impaired functionality of such hospitals.</div>
          <div className="service_descrip guide_desc">Much patient dissatisfaction and many complaints are due to breakdown in the doctor-patient relationship. However, many doctors tend to overestimate their ability in communication. Over the years, much has been published in the literature on this important topic.</div>
        </div>
        <img src={doctor2} alt="" className='guide_image'/>
      </div>
      </section>










      {/* CONTACT FORM */}
      <div className="container shadow-lg" id='contact'>
       <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="https://m.facebook.com/100063734421533/" target="_main">
                <FaFacebookF/>
              </a>
              <a href="https://www.instagram.com/devrohit778/" target="_main">
                <FaInstagram/>
              </a>
              <a href="https://twitter.com/rohit_dev7" target="_main">
                <FaTwitter/>
              </a>
              <a href="https://www.youtube.com/channel/UCYl68rshw-rYuEJxwb1ZpQQ" target="_main">
               <FaYoutube/>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" ref={contacts} onSubmit={send_message} autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" placeholder='Username' name="name" className="input" ref={name}/>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" placeholder='Email' className="input" ref={email} />
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" placeholder='Phone' className="input" ref={phone}/>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder='Message' ref={message}></textarea>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn btnk" />
          </form>
        </div>
      </div>
      </div>

      <Footer/>

    </div>
  )
}
