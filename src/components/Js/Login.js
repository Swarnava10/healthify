import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import "../Css/login.css";
import Logi from "../Images/Doc1.jpg";
import { Link } from 'react-router-dom';
import { useRef,useState } from 'react';
import {auth,googleProvider} from './firebaseconfig';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [logmessage, setlogmessage] = useState("Please enter your credentials");
  const mailtxt = useRef("");
  const passwordtxt =useRef("");
  const navigate = useNavigate();
 
  


  
  

  


  const logaction=(a,b)=>{
    console.log(a.current.value);
    console.log(b.current.value);
    if(a.current.value==="" || b.current.value===""){
      setlogmessage("All fields are mandatory");
    }
    else if(!validator.isEmail(a.current.value)){
      setlogmessage("please enter a valid email.");
    }
    else if(b.current.value.length<8){
      setlogmessage("password less than 8 characters");
    }
    else{
      auth.signInWithEmailAndPassword(
        a.current.value,
        b.current.value
      ).then(user=>{
        navigate('/taskmanager');
        // alpha.change(user.user.uid);
        
      })
      .catch(err=>{
        console.log(err);
        setlogmessage("Invalid User");
      })
      setlogmessage("");
      a.current.value='';
      b.current.value='';

    }

  }


  

  const signinwithGoogle = () =>{
    auth.signInWithRedirect(googleProvider)
    .then((res) =>{
      console.log(res.user);
    })
    .catch(function(error) {
      console.log(error.message);
    })
  }
  
  return (
    <div className='login' >
          <div className="loginmain_container">
           
            
            <div className="col-md-9 col-lg-6 col-xl-5 login_image">
              <img src={Logi} className="img-fluid " alt="None"/>
            </div>



            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login_container2">
              <form autoComplete='off'>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <button onClick={signinwithGoogle} href="/"  className="btn btn-danger btn-block btngoogly shadow-lg"><FaGoogle className='Googly'/> <span className='google_text'>Sign in with Google</span></button>
        
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">OR</p>
                </div>
                
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg input_fontsize "
                    placeholder="Email" ref={mailtxt} />
                </div>

          
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg input_fontsize"
                    placeholder="Password" ref={passwordtxt} />
                </div>
                

                <div className="d-flex justify-content-between align-items-center">
        
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label remember_text" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot" className="text-body forgot_text">Forgot password?</Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg btoc1 login_btn" onClick={()=>logaction(mailtxt,passwordtxt)}>Login</button>
                <p className="small  mt-2 pt-1 mb-0 Registers">Don't have an account? <Link to="/signup"
                      className="register_text">Register</Link></p>
                </div>

              </form>
            </div>
          <div/>
        </div>
     

    </div>
  )
}
