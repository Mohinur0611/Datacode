import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Home1 from './Components/Home/Home1'
import icon from './assets/icon.png'

const App = () => {
  return (
    <div className='w-[1200px]  m-auto h-[5000px] border-[0.2px] border-black '>
<Navbar/>
<Home/>
<About/>
<Home1/>
    </div>
  )
}

export default App