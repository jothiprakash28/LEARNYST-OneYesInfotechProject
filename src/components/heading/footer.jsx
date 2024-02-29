import React from 'react'
import CompanyLogo from "../images/companylogo.png"
import Capterra from "../images/capterra.svg"
import AWS from '../images/aws.png'
import AppleFlex from '../images/appleimg.png'
import Google from '../images/widevine.png'
import Facebook from '../images/facebook.png'
import Instagram from '../images/Instagram.png'
import Youtube from '../images/youtube.png'
import LinkedIn from '../images/linkedIn.png'
import Twitter from '../images/twitter.png'
import Whatsapp from '../images/whatsapp.png'
const Footer = () => {
  return (
    <div className='footerContainer' style={{marginTop:'180px'}}>
        <div id='companyLogo'><img src={CompanyLogo} alt="CompanyLogo" width={200}/></div>

        <div className='footerPaths'>
            <div>
                <div className='addressPath'>
                <strong className="footerSubHead">CALL US</strong>
                <p className='addressPara'>080 4736 1000</p>
                </div>
                <div className='addressPath'>
                <strong className="footerSubHead">MAIL US</strong>
                <p className='addressPara'>hello@learnyst.com</p>
                </div>
                <div className='addressPath'>
                <strong className="footerSubHead">OFFICE</strong>
                <p className='addressPara'>Learnyst Insight Private Limited <br /> #110, 2nd Floor, <br /> Krishna Garden Main Road, <br /> RR Nagar, Bangalore, 560098
                </p>
                </div>
            </div>

            <div>
                <strong className="footerHead">Features</strong>
                <div>
                    <a href="" className="footerMenu">Sell Courses Online</a>
                    <a href="" className="footerMenu">Create Mock Test</a>
                    <a href="" className="footerMenu">Teaching Apps</a>
                    <a href="" className="footerMenu">Security</a>
                    <a href="" className="footerMenu">Marketing</a>
                    <a href="" className="footerMenu">Community</a>
                    <a href="" className="footerMenu">Website Builder</a>
                </div>
            </div>

            <div>
                <strong className="footerHead">Resources</strong>
                <div>
                    <a href="" className="footerMenu">Content Library</a>
                    <a href="" className="footerMenu">Daily Webinar</a>
                    <a href="" className="footerMenu">Blog</a>
                    <a href="" className="footerMenu">Learnyst Uni</a>
                    <a href="" className="footerMenu">Support Docs</a>
                </div>
            </div>
            <div>
                <strong className="footerHead">Comparisons</strong>
                <div>
                    <a href="" className="footerMenu">Graphy</a>
                    <a href="" className="footerMenu">Teachable</a>
                    <a href="" className="footerMenu">Thinkific</a>
                    <a href="" className="footerMenu">Kajabi</a>
                    <a href="" className="footerMenu">Podia</a>
                    <a href="" className="footerMenu">Moodle</a>
                    <a href="" className="footerMenu">LearnWorlds</a>
                </div>
            </div>
            <div>
                <strong className="footerHead">Company</strong>
                <div>
                    <a href="" className="footerMenu">About Us</a>
                    <a href="" className="footerMenu">Success Stories</a>
                    <a href="" className="footerMenu">Pricing</a>
                    <a href="" className="footerMenu">Live Demo</a>
                    <a href="" className="footerMenu">FAQs</a>
                    <a href="" className="footerMenu">Whats New</a>
                </div>
            </div>
            <div>
                <strong className="footerSideHead">Why Trust Us?</strong>
                <div className='supportCompany'>
                    <img src={Capterra} alt="Capterra" width={144} height={47} />
                    <strong className="footerSubHead">Proud Partners</strong>
                </div>
                <div id='sponserCompany'>
                    <img src={AWS} alt="AWS" width={200} height={78}/>
                    <img src={AppleFlex} alt="Flex" width={200} height={78}/>
                    <img src={Google} alt="Widevine" width={200} height={78}/>
                </div>
            </div>
        </div>

        <div className='directive'>
            <a href="" className='report'>Report Abuse</a>
            <a href="" className='othermenu'>Terms and Condtions</a>
            <a href="" className='othermenu'>Privacy Policy</a>
        </div>

        <div className='lineStyle'></div>

        <div id='copyrightsContainer'>
            <div id='copyrightsPara'>2024 @Learnyst</div>
            <div id='socialMedia'>
                <img src={Facebook} alt="Facebook" width={30} height={30}/>
                <img src={Instagram} alt="Instagram" width={30} height={30}/>
                <img src={Youtube} alt="Youtube" width={30} height={30}/>
                <img src={LinkedIn} alt="LinkedIn" width={30} height={30}/>
                <img src={Twitter} alt="Twitter" width={30} height={30}/>
                <img src={Whatsapp} alt="Whatsapp" width={30} height={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer;