import React from 'react';
import "../Css/emergency.css";
import { Link } from 'react-router-dom';
import Snake from "../Images/Snake1.png";


export const Emergency = () => {
  return (
    <div className='Emergency'>

        
        <div className="emergency_containr">
         <div className='txt_boxemer'>
          <div className="emergencytxt">Select Doctor:</div>
         </div>
         <select name="" className='Select_box shadow-lg'>
            <option value="">None</option>
            <option value="">Dr. Rupankar Ghosal</option>
            <option value="">Dr. Payal Das</option>
            <option value="">Dr. Rajashri</option>
            <option value="">Dr. Ramesh Bhatia</option>
            <option value="">Dr. Om Shankar</option>
            <option value="">Dr. Mahesh Kapoor</option>
          </select>
         
         <div className='emer_txt'><p className='emergencytextheads'>Patient name</p></div>
          <input type="text" placeholder='Patient name' className='patient bed shadow-lg'/>
         <div className='emer_txt' ><p className='emergencytextheads'>Bed number</p></div>
          <input type="text" placeholder='Bed number' className='patient bed2 shadow-lg'/>

          <div className='emergency_button shadow-lg'>
            <button className="send_emergency">
              Notify
            </button>
          </div>
          <Link to="/taskmanager" className='emergency_route'> Go back</Link>
        </div>

        <div className="emergencystylecontainers">
           <div className="stylecontainer">
            <img src={Snake} className="snakeLogo" alt="" />
           </div>
        </div>
    </div>
  )
}
