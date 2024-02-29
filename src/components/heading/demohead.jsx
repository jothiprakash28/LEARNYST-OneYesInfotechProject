import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Demohead = () => {
  return (
    <div className='demohead-container'>
    <div style={{display:'flex',justifyContent:'center',gap:'15px',backgroundColor:'#ECFEEC',heigth:'auto',padding:'20px',marginTop:'120px'}}> 
        <div style={{display:'flex',flexDirection:'column',height:'auto',gap: '13px'}}>
        <h1 className='sectionHead'>Have any <br /> questions?</h1>
       <p>Explore the world of online teaching with Learnyst's free trial.<br/>Begin sculpting your ideas into engaging courses.</p>
       <Button style={{backgroundColor:'#4fba58', width:'150px',color:'white', border:'none', height: '46px',cursor:'pointer'}}>Book Demo</Button>
        </div>
       <div id='leftSection'>
        <h1 className='headingSection'>Free Trail</h1>
        <p className='leftpara'>Get a taste of our basic features,<br /> enough to set the ball rolling for your <br /> online course creation.</p>
        <h1 className='leftPrice'>₹0</h1>
        <Button id='trialButton' onClick={() => window.location.href = "https://www.learnyst.com/signup"}>Start Free Trial</Button>
       </div>
    </div>
    </div>
  )
}

export default Demohead