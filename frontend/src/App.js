import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Signup';

import Dashboard from './Dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
               <Route path ='/'element={<Login/>}></Route>
               <Route path ='/signup'element={<Signup/>}></Route>
               <Route path ='/dashboard'element={<Dashboard/>}></Route>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
