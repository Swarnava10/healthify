import React from 'react';
import Logi from "../Images/Doc1.jpg";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import "../Css/signup.css";
import { useState , useRef } from "react";
import validator from 'validator';
import {auth} from './firebaseconfig';





export const Signup = () => {

  const [signmessage, setsignmessage] = useState("All fields are mandatory *");
  const mailtxt2 = useRef("");
  const pass1 = useRef("");
  const pass2 = useRef("");
  const username = useRef("");


  const signaction=(a,b,c,d)=>{
     console.log(a.current.value);
     console.log(b.current.value);
     console.log(c.current.value);
     console.log(d.current.value);
     if(a.current.value==='' || b.current.value==='' || c.current.value==='' || d.current.value===''){
          setsignmessage("All fields are mandatory *");
     }
     else if(a.current.value.length <6){
          setsignmessage("Username less than 6 characters");
     }
     else if(!validator.isEmail(b.current.value)){
          setsignmessage("Please enter a valid email.");
     }
     else if(c.current.value.length <8){
          setsignmessage("Password less than 8 characters");
     }
     else if(c.current.value!==d.current.value){
          setsignmessage("Password fields doen't match");
     }
     else{
         auth.createUserWithEmailAndPassword(
           b.current.value,
           c.current.value
         ).then(response=>{
           console.log(response.user)
         }).catch(err=>{
           console.log(err)
         })
         setsignmessage("All fields are mandatory *");
         a.current.value="";
         b.current.value="";
         c.current.value="";
         d.current.value="";

     }

  }

  return (
    <div className='Signup'>
      <section className="vh-100 login_section">
        <div className=" logincontent">
          <div className="loginmain_container">
           
            
            <div className="col-md-9 col-lg-6 col-xl-5 login_image">
              <img src={Logi} className="img-fluid " alt="None"/>
            </div>



            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login_container2">
              <form autoComplete='off'>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <button href="/"  className="btn btn-danger btn-block btngoogly shadow-lg"  ><FaGoogle className='Googly'/> <span className='google_text' >Sign in with Google</span></button>
        
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>
                
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3" className="form-control form-control-lg input_fontsize "
                    placeholder="Username"  ref={username}/>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg input_fontsize "
                    placeholder="Email" ref={mailtxt2} />
                </div>

          
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg input_fontsize"
                    placeholder="Password" ref={pass1} />
                </div>

                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg input_fontsize"
                    placeholder="Confirm Password" ref={pass2} />
                </div>

               

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button"  className="btn btn-primary btn-lg btoc1 login_btn" onClick={()=>signaction(username,mailtxt2,pass1,pass2)}>Signup</button>
                  <p className="small  mt-2 pt-1 mb-0 Registers">Already registered? <Link to="/login"
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
