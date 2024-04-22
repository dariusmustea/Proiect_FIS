import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About  from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
    <Title subTitle='THE CITY OF EXTRAVANCE' title='MONACO'
        />
        <Programs/>
        <About />
    </div>
    </div>
  )
}

export default App