import React from 'react';
import { Link } from 'react-router-dom';
import "../Css/taskmanager.css";

export const Taskmanager = () => {
  return (
    <div className='Taskmanager'>
        <div className="centered">
            <Link className="lgbtn green nav-link newbtns" to="/report">Create Report</Link>
        </div>

        <div className="centered">
            <Link className="lgbtn green nav-link medicine" to="/diseasecure">Disease Vs Medicine</Link>
        </div>

        <div className="centered">
            <Link className="lgbtn green nav-link emergency" to="/emergency">Emergency</Link>
        </div>

        <Link to='/login'><button type="button" class="btn btn-secondary logout_btn" data-toggle="button" aria-pressed="false" autocomplete="off">
          Logout
        </button>
        </Link>
    </div>
  )
}
