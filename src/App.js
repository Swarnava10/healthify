import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import { Home } from './components/Js/Home';
import { Forgot } from './components/Js/Forgot';
import { Signup } from './components/Js/Signup';
import { Login } from './components/Js/Login';
import { Taskmanager } from './components/Js/Taskmanager';
import { Report } from './components/Js/Report';
import { DiseaseAPI } from './components/Js/DiseaseAPI';
import { Emergency } from './components/Js/Emergency';



function App() {

 
  return (
    <div className="App">
      <Router>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route exact path='/signup' element={<Signup/>}/>
           <Route exact path='/forgot' element={<Forgot/>}/>
           <Route exact path='/taskmanager' element={<Taskmanager/>}/>
           <Route exact path='/report' element={<Report/> }/>
           <Route exact path='/diseasecure' element={<DiseaseAPI/> }/>
           <Route exact path='/emergency' element={<Emergency/>}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
