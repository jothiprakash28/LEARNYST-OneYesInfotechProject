import React from 'react'
import UserImage1 from "../images/userimg1.png"
import UserImage2 from "../images/userimg.png"

const ReferenceSection = () => {

    const contentData = [
        {
          subHead: ['Branded Websites & Apps'],
          para: ["Elevate your brand's digital identity with a", "customizable App and Website. Enhance the learning", "experience through a user-friendly LMS, fostering", "seamless education and engagement."]
        },
        {
            subHead: ['In-built Marketing Tools'],
            para: ["Leverage advanced marketing tools to effectively", "capture leads and communicate in a personalized way." ,"Ensure your courses resonate with the right audience", "to drive enrollments through our targeted learning","management solutions."]
          },
          {
            subHead: ['Comprehensive Management',' Suite'],
            para: ["A seamless and intuitive learning management","software suite for effortless management of students,","faculties, and courses, ensuring your institute's smooth "," operation online."]
          }
        
      ];


      const contentData1 = [
        {
          subHead: ["Seamless Integration with", "Payment Gateway"],
          para: [
            "Streamline your course launch and transaction", "processes with our LMS solutions, enabling educators",
            "to concentrate on content quality and enjoy hassle-","free revenue growth."
          ]
        },
        {
          subHead: ["Get In-Depth Analytics:","Measure and Grow"],
          para: [
            "Reshape your strategies to better meet what your","students seek, making your online teaching both",
            "deeply impactful and financially rewarding."
          ]
        },
        {
          subHead: ['Enhanced Student Interaction'],
          para: [
            "Offer interactive live classes and community features"," within our learning management system to create a",
            "dynamic learning environment, enhancing student", "satisfaction and outcomes."
          ]
        }
      ];
      

      
  return (
    <div>
    <div className='referenceContainer' style={{marginTop:'230px'}}>
        <h1 className='referenceTitle'>No Code LMS that Lets You Sell Courses From Your <br /> Brand</h1>
    <div className='referenceCard'>
    <div><img className='userImage1' src={UserImage1} alt="Customer" width={479} height={506}/></div>
        <div>
            <div>
                <div className='contentContainer'>
                {
                contentData?.map((item) => (
                <div className='referenceContent'>
                <strong className='referenceSubHead'>{item?.subHead?.map((data, index) => (
                    <React.Fragment key={index}>
                        {data}
                        <br/>
                    </React.Fragment>
                    ))}</strong>
                <p className='referencePara'>
                    {item?.para?.map((data, index) => (
                    <React.Fragment key={index}>
                        {data}
                        <br/>
                    </React.Fragment>
                    ))}
                    </p>
                    </div>
                ))
                }
                </div>
            </div>
        </div>
       
    </div>
    </div>

    <div className='referenceContainer' style={{marginTop:'130px'}}>
        <h1 className='referenceTitle'>Unleash the Hidden Potential of Your Courses</h1>
    <div className='referenceCard'>
        <div>
                <div>
                    <div className='contentContainer'>
                    {
                    contentData1?.map((item) => (
                    <div className='referenceContent'>
                    <strong className='referenceSubHead'>{item?.subHead?.map((data, index) => (
                        <React.Fragment key={index}>
                            {data}
                            <br/>
                        </React.Fragment>
                        ))}</strong>
                    <p className='referencePara'>
                        {item?.para?.map((data, index) => (
                        <React.Fragment key={index}>
                            {data}
                            <br/>
                        </React.Fragment>
                        ))}
                        </p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
        <div><img className='userImage2' src={UserImage2} alt="Customer" width={479} height={506}/></div>
    </div>
    </div>
    </div>
  )
}

export default ReferenceSection