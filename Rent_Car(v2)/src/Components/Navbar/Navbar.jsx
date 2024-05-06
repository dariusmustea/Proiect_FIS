import React, { useEffect, useState } from 'react'
import './Navbar.css'
import car from '../../assets/logo.png'

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
            <li>Home</li>
            <li>Program</li>
            <li>Rent</li>
            <li>Contact us</li>
            <li>Sign in</li>
        </ul>
        </nav>
      
  )
}

export default Navbar