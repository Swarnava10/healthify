import React from 'react';
import Logi from "../Images/Doc1.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import "../Css/forgot.css";
import {auth,googleProvider} from './firebaseconfig';
import validator from 'validator';
import { useState,useRef } from 'react';





export const Forgot = () => {
  const navigate=useNavigate();
  const [mailmessage,setmailmessage]=useState("Please enter your email");
  const mailtxt3=useRef("");

  const forgotaction=(a)=>{
    console.log(a.current.value);
    if(!validator.isEmail(a.current.value)){
      setmailmessage("please enter a valid email.");
    }
    else{
      auth.sendPasswordResetEmail(
        a.current.value
      ).then(()=>
      {
        navigate('/signup')
      }).catch(()=>setmailmessage("Please enter registered email."))
      setmailmessage("Please enter your email");
    }
  }

  return (
    <div className='Forgot'>
        <section className="vh-100 login_section">
        <div className=" logincontent">
          <div className="loginmain_container">
           
            
            <div className="col-md-9 col-lg-6 col-xl-5 login_image">
              <img src={Logi} className="img-fluid " alt="None"/>
            </div>



            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login_container2">
              <form autoComplete='off'>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <button href="/" className="btn btn-danger btn-block btngoogly shadow-lg"><FaGoogle className='Googly'/> <span className='google_text'>Sign in with Google</span></button>
        
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>
                

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg input_fontsize "
                    placeholder="Email" ref={mailtxt3} />
                </div>           

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg btoc1 login_btn" onClick={()=>forgotaction(mailtxt3)}>Reset</button>
                  <p className="small  mt-2 pt-1 mb-0 Registers">Remember Password? <Link to="/login"
                      className="register_text">Go Back</Link></p>
                </div>

              </form>
            </div>
          <div/>
        </div>
       </div>      
      </section>
     
    </div>
  )
}
