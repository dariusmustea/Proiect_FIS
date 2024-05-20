import React, { useEffect, useState } from 'react'
import './Navbar.css'
import car from '../../assets/logo.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky, setSticky]=useState(false);

  useEffect(()=>{window.addEventListener('scroll',()=>{ 
    window.scrollY >50 ? setSticky(true) :setSticky(false);
  })
},[]);


  return (
    <nav className={ `container ${sticky ? 'dark-nav' : ''}`}>
        <img src={car} alt="" className='car'/>
            
       <ul>
       <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li>Program</li>
        <li>Rent</li>
        <li><Link to='contact' smooth={true} offset={0} duration={500}>Contact us</Link></li>
        <li>Sign in</li>
        </ul>
        </nav>
      
  )
}

export default Navbar