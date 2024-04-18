import React from 'react'
import './Navbar.css'
import car from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={car} alt="" className='car'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>Rent</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><button className='btn'>Help</button></li>
        </ul>
        </nav>
  )
}

export default Navbar