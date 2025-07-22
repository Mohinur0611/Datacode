import React, { useState } from 'react'
import icon2 from '../../assets/Icon/icon2.png'
import icon3 from '../../assets/Icon/icon3.png'
import icon4 from '../../assets/Icon/icon4.png'
import icon5 from '../../assets/Icon/icon5.png'
import icon6 from '../../assets/Icon/icon6.png'
import icon7 from '../../assets/Icon/icon7.png'
import icon8 from '../../assets/Icon/icon8.png'
import icon9 from '../../assets/Icon/icon10.png'
import icon10 from '../../assets/Icon/icon11.png'
import icon11 from '../../assets/Icon/icon12.png'
import icon12 from '../../assets/Icon/icon13.png'
import icon13 from '../../assets/Icon/icon14.png'
import icon14 from '../../assets/Icon/icon15.png'
import icon15 from '../../assets/Icon/icon16.png'
import icon16 from '../../assets/Icon/icon17.png'
import icon17 from '../../assets/Icon/icon.png'
import icon22 from '../../assets/Icon/icon22.png'
import icon23 from '../../assets/Icon/icon23.png'
import icon24 from '../../assets/Icon/icon24.png'

import { box } from '../../Api'
import { Link } from 'react-router-dom'
const Home = () => {
  const rasmlar = {
    1: icon9,
    2: icon10,
    3: icon11,
    4: icon12

  }

  return (
    <div className="w-[1200px] m-auto bg-black">
      {/* --- BO'LIM 1 --- */}
      <div className='h-[800px] border-b-[1px] border-gray-700 bg-gradient-to-br from-blue-950 to-black pt-20'>
        <div className='w-[800px] m-auto'>
          <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
            <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Innovative Web Solutions</h1>
          </div>
          <div className='w-[680px] m-auto mb-[150px]'>
            <h1 className='text-6xl text-white font-bold text-center'>
              Build the Future with <br /><span className='text-red-500'>Modern Code</span>
            </h1>
            <p className='text-[20px] text-center text-white mt-6'>
              We create stunning, high-performance web applications that drive results. Transform your business with our expert development services and cutting-edge technology.
            </p>
            <div className='flex gap-6 justify-center mt-10'>
              <button className="group btn btn-soft w-[250px] h-[60px] text-[17px] text-white border-red-500 my-5 bg-red-500 rounded-[10px] flex items-center justify-center gap-2">
                Start Your Projects
                <img src={icon8} alt="" className="w-10 mt-1 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              <button className='btn btn-ghost border-red-400 w-[200px] text-[17px] text-red-500 h-[90px] hover:text-white hover:bg-red-500 rounded-[10px]'>
                View our Work
              </button>
            </div>
            <h1 className='text-gray-500 text-center mt-10'>Powered by modern technologies</h1>
            <div className='  flex  justify-center gap-3 mt-5 '>
              {[{ icon: icon2, text: 'React' }, { icon: icon3, text: 'Node.js' }, { icon: icon4, text: 'TypeScript' },
              { icon: icon5, text: 'AWS' }, { icon: icon6, text: 'Docker' }, { icon: icon7, text: 'GraphQL' }]
                .map((item, index) => (
                  <button key={index} className='btn border-[0.1px] btn-outline border-gray-400 w-[110px] hover:border-red-400 hover:bg-black text-white rounded-[10px]'>
                    <img className='w-5  rounded-[5px] mr-2' src={item.icon} alt="" />
                    {item.text}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* --- BO'LIM 2 --- */}
      <div className='w-full h-auto py-20 bg-gray-800 border-t-[1px] border-black'>
        <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
          <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Why Choose Datacode?</h1>
        </div>
        <div className='w-[800px] m-auto mb-[100px]'>
          <h1 className='text-5xl text-center text-white font-bold'>
            Innovation Meets <span className='text-red-500'>Excellence</span>
          </h1>
          <p className='text-[20px] text-center text-gray-400 mt-6'>
            We combine technical expertise with creative vision to deliver exceptional results that drive your business forward.
          </p>
        </div>
        <div className='w-full flex flex-wrap gap-4 justify-center'>
          {
            box.map((value) => {
              return (
                <div
                  key={value.id}
                  className="relative w-[250px] h-[250px] bg-gray-600/30 p-4 rounded-xl shadow-md border-gray-500 border-[0.2px] 
             transform transition-transform duration-300 hover:scale-105
             after:content-[''] after:absolute after:bottom-0 after:left-1/2
             after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[2px]
             after:bg-red-500 after:transition-all after:duration-500">
                  <img src={rasmlar[value.id]} alt="icon" className='w-16  mb-4 ' />
                  <h2 className='text-xl my-5 text-amber-50 font-bold'>{value.title}</h2>
                  <p className='text-gray-300 my-5'>{value.info}</p>
                </div>
              )
            })
          }
        </div>
        <div>
        </div>
      </div>
      {/* --- BO'LIM 3 --- */}
      <div className='h-[800px] border-b-[1px] border-gray-700 bg-gradient-to-br from-blue-950/50 to-black pt-20'>
        <div className='w-[1000px] h-[400px] border-[0.5px] border-gray-700  bg-gray-400/15 m-auto rounded-[10px]'>
          <h1 className='text-4xl text-center mt-[20px] text-white font-bold'>Proven Track Record</h1>
          <p className='text-gray-500 text-center mt-5 text-xl'>Numbers that speak for our expertise</p>
          <div className='w-[980px] mt-10 h-[250px] flex justify-evenly m-auto gap-10'>
            <div className='w-[200px] h-[200px]  group' >
              <img className='w-[40px] m-auto duration-1200 transform-content group-hover:translate-y-[-10px]' src={icon13} alt="" />
              <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 mx-5 text-[60px]  duration-100 font-bold transform-all group-hover:scale-110'>150+</h1>
              <h1 className='text-[20px] mx-3 text-gray-500'>Projects Completed</h1>
            </div>
            <div className='w-[200px] h-[200px] group' >
              <img className='w-[40px] m-auto duration-1200 transform-content group-hover:translate-y-[-10px]' src={icon14} alt="" />
              <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 mx-7 text-[60px]  duration-100 font-bold transform-all group-hover:scale-110'>99%</h1>
              <h1 className='text-[20px] mx-4 text-gray-500'>Client Satisfaction</h1>
            </div>
            <div className='w-[200px] h-[200px]  group' >
              <img className='w-[40px] m-auto duration-1200 transform-content group-hover:translate-y-[-10px]' src={icon15} alt="" />
              <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 mx-7 text-[60px]  duration-100 font-bold transform-all group-hover:scale-110'>24/7</h1>
              <h1 className='text-[20px] mx-4 text-gray-500'>Support Available</h1>
            </div>
            <div className='w-[200px] h-[200px]  group' >
              <img className='w-[40px] m-auto duration-1200 transform-content group-hover:translate-y-[-10px]' src={icon16} alt="" />
              <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-700 mx-15 text-[60px]  duration-100 font-bold transform-all group-hover:scale-110'>5+</h1>
              <h1 className='text-[20px] mx-4 text-gray-500'>Years Experience</h1>
            </div>
          </div>
        </div>


      </div>
      {/* --- BO'LIM 4 --- */}
      <div className='w-full h-auto py-20 bg-gray-800 border-t-[1px] border-black'>
        <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
          <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Client Success Stories</h1>
        </div>
        <div className='w-[800px] m-auto mb-[100px]'>
          <h1 className='text-5xl text-center text-white font-bold'>
            What Our Clients Say
          </h1>
          <p className='text-[20px] text-center text-gray-400 mt-6'>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.  </p>
        </div>
        <div className='w-[1100px]  flex justify-center gap-10 m-auto group'>
          <div className='w-[350px] h-[300px] border-[0.5px] border-gray-700 rounded-xl bg-gray-600/30 duration-500  hover:border-red-800 hover:bg-gradient-to-br from-red-800/20  '>
            <div className='w-30 mx-5  my-5 flex gap-0.5' >
              <img className='w-5 ' src={icon14} alt="" />
              <img className='w-5 ' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" /></div>
            <h1 className='mx-5 my-8 text-[20px] italic text-gray-300'>
              "Datacode transformed our digital presence. Their attention to detail and technical expertise exceeded our expectations."</h1>
            <div className='w-70 mx-5 flex gap-5'>
              <div className='w-14 h-12 border-2 bg-gradient-to-bl from-red-600 to-red-500  border-red-500 rounded-[50%]'>
                <h1 className='mx-4 font-bold text-amber-50 my-1'>SJ</h1>
              </div>
              <h1 className='text-white font-bold'>Sarah Johnson <br /><span className='text-red-400 font-normal'>TechCorp Inc.</span></h1>

            </div>
          </div>
          <div className='w-[350px] h-[300px] border-[0.5px] border-gray-700 rounded-xl bg-gray-600/30 duration-500 hover:border-red-800 hover:bg-gradient-to-br from-red-800/20   '>
            <div className='w-30 mx-5  my-5 flex gap-0.5' >
              <img className='w-5 ' src={icon14} alt="" />
              <img className='w-5 ' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" /></div>
            <h1 className='mx-5 my-8 text-[20px] italic text-gray-300'>
              "Professional, reliable, and innovative. They delivered our project on time and within budget."</h1>
            <div className='w-50 mx-5 flex gap-5'>
              <div className='w-14 h-12 border-2 bg-gradient-to-bl from-red-600 to-red-500 border-red-500 rounded-[50%]'>
                <h1 className='mx-3 font-bold text-amber-50 my-1'>MC</h1>
              </div>
              <h1 className='text-white font-bold'>Michael Chen <br /><span className='text-red-400 font-normal'>StartupXYZ</span></h1>

            </div>
          </div>
          <div className='w-[350px] h-[300px] border-[0.5px] border-gray-700 rounded-xl bg-gray-600/30 duration-500 hover:border-red-800 hover:bg-gradient-to-br from-red-800/20   '>
            <div className='w-30 mx-5 my-5  flex gap-0.5 '>
              <img className='w-5 ' src={icon14} alt="" />
              <img className='w-5 ' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" />
              <img className='w-5' src={icon14} alt="" /></div>
            <h1 className='mx-5 my-8 text-[20px] italic text-gray-300'>

              "Outstanding development team. Their modern approach and clean code made all the difference."</h1>
            <div className='w-70 mx-5 flex gap-5'>
              <div className='w-14 h-12 border-2 bg-gradient-to-bl from-red-600 to-red-500 border-red-500 rounded-[50%]'>
                <h1 className='mx-4 font-bold text-amber-50 my-1'>ER</h1>
              </div>
              <h1 className='text-white font-bold'>
                Emily Rodriguez <br /><span className='text-red-400 font-normal'>Digital Solutions</span></h1>
            </div>
          </div>
        </div>

      </div>
      {/* --- BO'LIM 5 --- */}
      <div className='h-[700px] border-b-[1px] border-gray-700 bg-gradient-to-br from-blue-950/50 to-black pt-20'>
        <div className='w-[1000px] m-auto bg-red-500 rounded-4xl' > <br />
          <div className='w-[300px] m-auto  h-[38px] border-[0.5px] border-red-400 my-3 rounded-2xl bg-red-300/20'>
            <h1 className='text-center  font-bold text-white my-1 text-[14px]'>Ready to Transform Your Business?</h1>
          </div>
          <div className='w-[600px] m-auto'>
            <h1 className='text-[30px] text-white font-bold text-center'>Let's Build Something Amazing Together
            </h1>
            <p className='text-[20px] text-center text-white mt-6'>
              Join hundreds of satisfied clients who have transformed their digital presence with our innovative solutions. Your next breakthrough is just one conversation away. </p>
            <div className='flex gap-6 justify-center my-10 p-10 '>
              <button className="group btn btn-soft w-[250px] h-[90px] text-[17px] text-white border-white bg-white rounded-[10px] flex items-center justify-center gap-2">
              </button>
              <button className='btn btn-ghost border-red-400 w-[200px] text-[17px] text-white h-[90px] hover:text-white hover:bg-white rounded-[10px]'>
                View portfolio
              </button>
            </div>
          </div>
        </div>  </div>
      {/* --- BO'LIM 6 --- */}
      <div className='w-ful m-auto h-auto py-10 bg-gray-800  '>
        <div className='w-[1000px] h-[300px]  flex justify-evenly m-auto' >
          <div className='w-100 h-60  flex flex-wrap'>
            <img className="w-[45px] h-[35px] rounded-xl bg-red-500 mt-5 " src={icon17} alt="logo" />
            <h1 className="text-amber-50 text-xl my-5 mx-2 font-bold cursor-pointer group-hover:text-red-400">Datacode</h1>
            <h1 className='text-gray-400 mb-18'>We specialize in creating modern, scalable web applications that drive business growth. Transform your digital presence with our expert development services.</h1>
          </div>
          <div className='w-[150px] h-[200px] text-gray-500  '>
            <h1 className="text-amber-50 text-xl my-5 font-bold cursor-pointer 0">Quick Links</h1>
            <h1 className='text-gray-400 hover:text-red-400 duration-100 cursor-pointer'> <Link to='/'> Home </Link> </h1>
            <h1 className='text-gray-400 hover:text-red-400 duration-100 cursor-pointer'><Link to='/About'> About </Link></h1>
            <h1 className='text-gray-400 hover:text-red-400 duration-100 cursor-pointer'><Link to='/Services'> Services </Link></h1>
            <h1 className='text-gray-400 hover:text-red-400 duration-100 cursor-pointer'><Link to='/Contact'> Contact </Link></h1>
          </div>
          <div className='w-[150px] h-[200px] text-gray-500 '>
          
            <h1 className="text-amber-50 text-xl my-5  font-bold cursor-pointer group-hover:text-red-400">Contact</h1>
            <div className='flex gap-1  flex-wrap w-45'>
              <img src={icon24}  alt="" className='w-5 h-5' />
            <span className='text-gray-400 flex '>
               hello@datacode.com</span>
               <img src={icon23}  alt="" className='w-5 h-5 ' />
            <h1 className='text-gray-400 '>+1  ( 555 )  123 - 4567 </h1>
            <img src={icon22}  alt="" className='w-5 h-5' />
            <h1 className='text-gray-400 '>San Francisco, CA</h1>
          </div>
        </div></div>

        <hr className='text-gray-500 w-[1150px] ' />
        <div className=' flex justify-between my-5 group'>
          <h1 className='text-gray-400 mx-10'>© 2024 Datacode. All rights reserved.</h1>
          <div className='flex justify-around space-x-5 '>
            <h1 className='text-gray-400 hover:text-red-400 duration-100 cursor-pointer'><Link to='/Home'>
              Privacy Policy </Link>
            </h1>
            <h1 className='text-gray-400 hover:text-red-400 duration-100 cursor-pointe mx-[45px]'><Link to='/Home'>
              Terms of Service </Link>
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
