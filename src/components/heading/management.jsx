import React from 'react'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import icon5 from '../images/icon5.png'
const Management = () => {

    const contentData = [
        {
            icon: icon1,
            subHead:'Variety of Exam Formats',
            para:["Variety of Exam Formats","spectrum of exams including","CAT, GATE, IIT JEE, AIPMT, and","more. Reach a diverse range","of students with tailored","testing experiences."]
        },
        {
            icon: icon2,
            subHead:"Easily Import Your Content",
            para:["Speed up your course setup","with YouTube Embed.","Directly upload test","questions, images, options,","and explanations via Word or","Excel for a smooth and quick","setup."]
        },
        {
            icon: icon3,
            subHead:'In-Depth Test Analytics',
            para:["Provide your students with","in-depth quiz/ exam","analytics. Let your students","analyze their performance","with section analytics, leader","board, SWOT analysis and","more."]
        },
        {
            icon: icon4,
            subHead:"Comprehensive Analysis",
            para:["Enhance student learning by","providing in-depth answer","explanations with videos or","slides, ensuring students","grasp concepts fully."]
        },
        {
            icon: icon5,
            subHead:"Sell your Test Series",
            para:["Bundle multiple mock tests","into a comprehensive test","series to offer as a complete","package – a preferred choice","for learners."]
        }
    ]
  return (
    <div id='managementBox'>
        <h1 className='managementHead' style={{marginTop:'180px'}}>Unparalleled Exam Management as You Scale</h1>
        <div className='managementContainer'>
            {contentData?.map((item)=><div className='managementCard'>
                <img src={item.icon} alt="icon" width={80} height={80}/>
                <h3>{item.subHead}</h3>
                <p>
                    {item?.para?.map((data, index) => (
                        <React.Fragment key={index}>
                            {data}
                            <br/>
                        </React.Fragment>
                    ))}
                </p>
            </div>)}
        </div>
    </div>
  )
}

export default Management