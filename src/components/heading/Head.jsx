import React from 'react'
import "./head.css"
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhone } from 'react-icons/fa';
import Cardimg from "../images/cardimage1.jpg"
import CustomerImage1 from "../images/cardimage1.jpg"
import CustomerImage2 from "../images/cardimage2.png"
import CustomerImage3 from "../images/cardimage3.png"
import CustomerImage4 from "../images/cardimage4.png"
import Demohead from './demohead';
import ReferenceSection from './section';
import Management from './management';
import Footer from './footer';
import { Link } from 'react-router-dom';
// import logo from "./components/images/logo.svg"
const Head = () => {
  return (
    <>
    <section className='heading'>
       <p><FaPhone/>Talk to Sales: 080 4736 1000</p>
       
        <div className='container-head'>
       
             <div className='logo'>
            

 <Navbar expand="lg" sticky="top">
   <img src="https://assets-global.website-files.com/616d55402e7088e362a27b50/616d582300e3cd5175fc5e30_logo%20learnyst.svg" className='logoimg' alt="" />
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Features" id="basic-nav-dropdown" >
            <div className='tongleslist'>
              <div className='container-col'>
              <ul className='col1'>
                <h5><li>Security</li></h5>
                
                <p><li>Anti-piracy(DRM)</li></p>
                <p><li>Screen Capture</li></p>
                <p><li>Account Sharing</li></p>
                <p><li>Data Security</li></p>
                
              </ul>

              <ul className='col2'>
                <h5><li>Sell Courses</li></h5>
                <p><li>Website Builder</li></p>
                <p><li>Mobile Apps</li></p>
                <p><li>Payment Gateway</li></p>
                <p><li>Courses</li></p>
                <p><li>Quizes</li></p>
                
              </ul>

              <ul className='col3'>
                <h5><li>Marketing</li></h5>
                <p><li>Acquire</li></p>
                <p><li>Engage</li></p>
                <p><li>Retain</li></p>
               
                
              </ul>

              <ul className='col4'>
                <h5 className='p13hover'><li>Analytics</li></h5>
                <p><li>Revenue Insights</li></p>
                <p><li>Student Reports</li></p>
                <p><li>KPI</li></p>

                
              </ul>

              
            </div>
            </div>
              
            </NavDropdown>
            <NavDropdown title="Solution" id="basic-nav-dropdown">
            <div className='tongleslist'>
              <div className='container-col'>
              <ul className='col1'>
                <h5><li>Coaching</li></h5>
                <p><li>CA</li></p>
                <p><li>CAT</li></p>
                <p><li>SSC</li></p>
                <p><li>UPSC</li></p>
                <p><li>NEAT</li></p>
                <p><li>GATE</li></p>
                <p><li>GMAT</li></p>
                <p><li>IIT-JEE</li></p>
               
              </ul>

              <ul className='col2'>
                <h5><li>Creators</li></h5>
                <p><li>Fiance</li></p>
                <p><li>Coding</li></p>
                
                
              </ul>

              <ul className='col3'>
                <h5><li>Enterprise</li></h5>
                <p><li>Customer Training</li></p>
                <p><li>Employee Training</li></p>
                
                
              </ul>

              

              
            </div>
            </div>
              
            </NavDropdown>
            
            <Nav.Link href="#home" id='success'>Success Stories</Nav.Link>
            <Nav.Link href="#home" id='pricing'>Pricing</Nav.Link>
            <Nav.Link href="#link" id='Resources'>Resources</Nav.Link>
            
            
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1X"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              <ul className='col1'>
              
              <p className='p17hover'><li>Content Libraries</li></p>
              <p className='p18hover'><li>Daily Webinars</li></p>
              <p className='p19hover'><li>Blogs</li></p>
              <p className='p20hover'><li>Live Demos</li></p>
              <p className='p21hover'><li>Universities</li></p>
              <p className='p22hover'><li>Support Docs</li></p>
              
             
            </ul>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              
             
              
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        <div className='blogin'>
       <Link to="/login" id='login'>Login</Link>
        </div>
        {/* <Button variant="success" className='btntrial' onClick={()=>window.location.href = "https://www.learnyst.com/signup"}>Start free Trial</Button> */}
        <Link to="/signup">
  <Button variant="success" className='btntrial'>
    Start Free Trial
  </Button>
</Link>

      </Container>
      
    </Navbar>


            </div>
            
          
        </div>
        
    </section>

    
    <section className='Centeredparagraph'>
    <div className="centered-container">
      <p className="centered-paragraph">
      Empower Your Teaching & Earnings 
    
      <p>with Secure Learning Management <p className='para3'>Software</p></p>
      
      </p>
    </div>
    </section>
    
    <section className='card-image-container'>
      <div className='card-content'>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Take Your Institute Online</h1>
            
          </div>
          
        </div>
        <div className='container'>
        <p className="card-text"><p>Transition seamlessly from offline to the digital sphereand amplify your reach <p>and revenue with our robust LMS and learning</p>
         management solutions, tailor-made for coaching institutes looking to thrive online..</p>
         </p>
         <Link to="/signup"><button type="button" class="btn btn-success">Start free Trial</button></Link>
      </div>
      </div>
      <div className='card-image'></div>
    </section>



    <section className='Centeredparagraphtwo'>
    <div className="centered-containertwo">
      <h3 className="centered-paragraphtwo">
      Streamlined, Secure and Engaging! 
    
  </h3>
  <p>Our platform offers a learning management system that's not only efficient and secure but also enhances student

  </p><p>engagement, ensuring a smooth transition to a formidable online presence for your institute. With our best learning</p><p>management system, rest assured that your content and interactions are in safe, capable hands.</p>

  
    </div>
    </section>





    <section className='cardtwo'>
      <div className='container'>
        <div className='card-imagetwo'>
          <div id="feature" className="section-p1">
            <div className="fe-box">
              <img src={CustomerImage1} alt="" />
              <h6>Streamlined Management</h6>
              <p>Efficient and intuitive handling of students, faculties, and courses.</p>
            </div>
            <div className="fe-box">
              <img src={CustomerImage2} alt="" />
              <h6>Secure Course Content</h6>
              <p>As Google's Widevine DRM authorized Partner, we protect your course content against piracy.</p>
            </div>
            <div className="fe-box">
              <img src={CustomerImage3} alt="" />
              <h6>Engage Effectively</h6>
              <p>Enhanced engagement through live classes, communities, and discussion forums.</p>
            </div>
            <div className="fe-box">
              <img src={CustomerImage4} alt="" />
              <h6>Cost Efficient</h6>
              <p>Already using an LMS? Reduce your costs by 80% and ensure a 20x increase in your course sales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    

    
    <Demohead/>
    <ReferenceSection/>
    <Management/>
    <section className='bannerone' >
      <div className='container-bannerone 'style={{marginTop:'170px'}}>
        <div className='bannerimage'>
          <div className="container col-xxl-8 px-4 py-5" id="order">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-out-down">
                <img src="https://assets-global.website-files.com/616d55402e7088e362a27b50/644b62e8ed4600da90e9354d_Signup%20illustration-p-500.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                  height="500" loading="lazy" />
              </div>
              <div className="col-lg-6" data-aos="fade-out-up">
                <h1 className="display-5 fw-bold lh-1 mb-3">Thousands of Educators Trust us with their content and data security</h1>
                <p className="lead">Start your 14-day free trial, no credit card required</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                 <Link to="/signup" ><Button variant="success" size="lg" className="px-4 me-md-4">Start a Free Trial</Button></Link>
                  <Button variant="outline-success" size="lg" className="px-4 me-md-4">Book a Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Head