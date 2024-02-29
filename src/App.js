
import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "./components/heading/Head";
import Login from "./components/heading/login";
import Signup from "./components/heading/signup";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Head />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>

  )
}

export default App