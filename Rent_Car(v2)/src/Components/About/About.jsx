import React from 'react'
import './About.css'
import about_img from '../../assets/monaco3.jpg'
import play_icon from '../../assets/375.png'
const About = () => {
  return (
    
      <div className='about'>
      <div className="about-left">
      <img src={about_img} alt="" className='about-img'/>
      <img src={play_icon} alt="" className='play-icon'/>
     </div>
      <div className="about-right">
      <h1>Monaco</h1>
      <h2>Monaco is a small sovereign city-state and microstate located in Western Europe, in the Mediterranean region,
       known for its luxury, sophisticated lifestyle, and spectacular landscapes.</h2>
   <h2> Monaco is often associated with luxury and opulence. It is well-known for its vibrant nightlife, famous restaurants,
     exclusive shops, and glamorous events. </h2>
    </div>
    </div>
  )
}

export default About
