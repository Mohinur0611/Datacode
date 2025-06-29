import React from 'react'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import icon7 from '../../assets/icon7.png'
import icon8 from '../../assets/icon8.png'
import icon9 from '../../assets/icon9.png'

const Home = () => {
  return (
    <div className='w-[1200px]  m-auto h-[1000px] border-[0.2px] border-black flex items-center mt-[-120px]  justify-center bg-radial from-blue-950  to-black'>
      <div className='w-[800px] m-auto h-[550px]  flex justify-center flex-wrap'>
        <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20  '>
          <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Innovative Web Solutions</h1>
        </div>
        <div className='w-[680px] h-[400px] m-auto   mb-[150px]'>
          <h1 className='text-6xl text-white font-bold mx-1'>Build the Future with <span className='mx-[140px] text-6xl text-red-500'>Modern Code</span></h1> <br />
          <h1 className='text-[20px] text-center text-white'>We create stunning, high-performance web applications that drive results. Transform your business with our expert development services and cutting-edge technology.</h1>
          <div className=' m-auto w-[500px]  flex gap-6 h-[70px]  my-20 mx-25 items-center '>
          <button className="group btn btn-soft w-[250px] h-[60px] text-[17px] text-white border-red-500 bg-red-500 rounded-[10px] flex items-center justify-center gap-2">
  Start Your Projects
  <img
    src={icon8}
    alt=""
    className="w-10 mt-1 transition-transform duration-300 group-hover:translate-x-2"
  />
</button>

            <button className='btn btn-ghost border-red-400 w-[200px] text-[17px] text-red-500 h-[75px] hover:text-white hover:bg-red-500  rounded-[10px]'>
         
              View our Work</button>
          </div>
          <h1 className='text-gray-500 text-center'>Powered by modern technologies</h1>
          <div className='w-[1000px] h-[100px] flex justify-center gap-3 items-center   mx-[-150px] '>
            <button className='btn border-[0.1px] btn-outline border-gray-400 w-[100px]  hover:border-red-400 hover:bg-black duration-75 transform-all text-white rounded-[10px] '>
              <img className='w-5' src={icon2} alt="" />
              React</button>
            <button className='btn border-[0.1px] btn-outline border-gray-400 w-[100px]  hover:border-red-400 hover:bg-black duration-75 transform-all text-white rounded-[10px] '>
            <img className='w-5' src={icon3} alt="" />
              Node.js</button>
            <button className='btn border-[0.1px] btn-outline border-gray-400 w-[100px]  hover:border-red-400 hover:bg-black duration-75 transform-all text-white rounded-[10px] '>
            <img className='w-5 rounded-[5px]' src={icon4} alt="" />
              TypeScript</button>
            <button className='btn border-[0.1px] btn-outline border-gray-400 w-[100px]  hover:border-red-400 hover:bg-black duration-75 transform-all text-white rounded-[10px] '>
            <img className='w-5 rounded-[5px]' src={icon5} alt="" />
              AWS</button>
            <button className='btn border-[0.1px] btn-outline border-gray-400 w-[100px]  hover:border-red-400 hover:bg-black duration-75 transform-all text-white rounded-[10px] '>
            <img className='w-5 rounded-[5px]' src={icon6} alt="" />
              Docker</button>
            <button className='btn border-[0.1px] btn-outline border-gray-400 w-[100px]  hover:border-red-400 hover:bg-black duration-75 transform-all text-white rounded-[10px] '>
            <img className='w-4 rounded-[5px]' src={icon7} alt="" />
              
              GraphQL</button>





          </div>

        </div>
      </div>

    </div>
  )
}

export default Home