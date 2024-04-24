import React from 'react'
import "../styles/AboutUs.css"
function AboutUs() {
  return (
    <div className='About'>
    <div className='About-us'>
      <h2 className='about-us-title'>ABOUT US</h2>
      <div className='about-us-p'>
      <p className='paragraph1'>
      Welcome to <b>QuickFix</b>, your go-to platform for accessing a wide array of local services tailored to meet your needs. From essential utilities like electricity to specialized services such as beauty treatments and car repairs, we connect you with skilled professionals in your area, ensuring convenience and reliability at every step. Our platform prioritizes local businesses, fostering community engagement while providing you with easy access to trusted service providers right in your neighborhood.
      </p>
      <p className="paragraph2">At QuickFix, we understand the importance of efficiency and quality when it comes to essential services. That's why we've curated a diverse network of professionals who are passionate about their craft, ensuring that you receive top-notch service every time you book through our platform. Whether you're seeking routine maintenance or a specialized solution, we're here to simplify your search and elevate your local service experience. Join us in supporting local businesses while enjoying the convenience of accessing essential services with just a few clicks.
      </p>
      </div>
      </div>
      <div className='Users-reviews'>
      <h2 className='users-review-title'>USER´S REVIEWS</h2>
      <p className='users-review-p'> Hear What Our Users Have to Say!</p>
      <div className='reviewspng'>
      <img className="Review1" src='./images/Review01.png'></img>
      <img className="Review2" src='./images/Review02.png'></img>
      <img className="Review3" src='./images/Review03.png'></img>
      </div>
      </div>
      </div>
  )
}

export default AboutUs
