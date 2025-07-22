import React from 'react'
import { box2, box3,box4 } from '../../Api'
import icon10 from '../../assets/Icon/icon10.png'
import icon26 from '../../assets/Icon/icon26.png'
import icon22 from '../../assets/Icon/icon22.png'
import icon23 from '../../assets/Icon/icon23.png'
import icon24 from '../../assets/Icon/icon24.png'
import icon27 from '../../assets/Icon/icon27.png'
import icon28 from '../../assets/Icon/icon28.png'
import icon29 from '../../assets/Icon/icon29.png'
import icon30 from '../../assets/Icon/icon14.png'
import icon32 from '../../assets/Icon/icon32.png'
import icon31 from '../../assets/Icon/icon31.png'
import icon33 from '../../assets/Icon/icon2.png'
import icon34 from '../../assets/Icon/icon33.png'
import icon35 from '../../assets/Icon/icon4.png'
import icon36 from '../../assets/Icon/icon3.png'
import icon37 from '../../assets/Icon/icon34.png'
import icon38 from '../../assets/Icon/icon35.png'
import icon39 from '../../assets/Icon/icon36.png'
import icon40 from '../../assets/Icon/icon6.png'
import icon41 from '../../assets/Icon/icon7.png'
import icon42 from '../../assets/Icon/icon37.png'
import icon17 from '../../assets/Icon/icon.png'
import { Link } from 'react-router-dom'
const Services = () => {
    const rasmlar = {
        1: icon10,
        2: icon26,
        3: icon27,
        4: icon28,
        5: icon29,
        6: icon30,

    }
    const rasm = {
        1: icon32,
        2: icon31,
        3: icon27,
        4: icon10,
        5: icon26,
        6: icon30
    }
    const icon={
        1:icon33,
        2:icon34,
        3:icon35,
        4:icon36,
        5:icon37,
        6:icon38,
        7:icon39,
        8:icon28,
        9:icon40,
        10:icon41,
        11:icon27,
        12:icon42,
    }


    return (
        <div className="w-[1200px] m-auto bg-black overflow-hidden ">
            {/* --- BO'LIM 1 --- */}
            <div className=' border-gray-700 bg-gradient-to-br from-blue-950 to-black pt-20 overflow-hidden '>
                <div className='w-[800px] m-auto'>
                    <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
                        <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Our Services</h1>
                    </div>
                    <div className='w-[900px] m-auto mb-[200px]'>
                        <h1 className='text-6xl text-white font-bold mr-20 text-center '>
                            Comprehensive<span className='text-red-500 '>  <br />Digital Solutions</span>
                        </h1>
                        <p className='text-[22px] text-center mr-10 text-white mt-6'>
                            From concept to deployment, we offer end-to-end web development services tailored to your business needs. Transform your digital presence with our innovative solutions and expert craftsmanship.    </p>
                    </div>
                </div>
            </div>
            {/* --- BO'LIM 2 --- */}
            <div className='w-full h-auto py-20 bg-gray-800 border-t-[1px] '>
                <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-10 rounded-2xl bg-red-900/20'>
                    <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Our Services</h1>
                </div>
                <h1 className='text-5xl text-white font-bold  text-center '>
                    Services That Drive Results
                </h1>
                <h1 className='text-2xl text-gray-400 text-center my-4'>Choose from our comprehensive range of services designed to elevate your <br /> digital presence and accelerate business growth.</h1>
                <div className='flex flex-wrap  justify-evenly mt-8'>
                    {
                        box2.map((value) => {
                            return (
                                <div
                                    key={value.id}
                                    className="relative my-5 w-[360px] h-[520px] bg-gray-600/30 p-4 rounded-t-xl shadow-md border-gray-700 border-[0.2px] 
             transform transition-transform duration-300 hover:scale-105
             after:content-[''] after:absolute after:bottom-0 after:left-1/2
             after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[2px]
             after:bg-red-500 after:transition-all after:duration-500 hover:bg-gradient-to-br from-red-400/10 to-gray-700/10 ">
                                    <img src={rasmlar[value.id]} alt="" className='w-16  mb-4 ' />
                                    <h2 className='text-xl my-5  text-amber-50 font-bold hover:text-red-400'>{value.title} </h2>
                                    <p className='text-gray-300 my-5'>{value.info}</p>
                                    <p className='text-gray-300 my-5'>{value.h1}</p>
                                    <p className='text-gray-300 my-5'>{value.h2}</p>
                                    <p className='text-gray-300 my-5'>{value.h3}</p>
                                    <p className='text-gray-300 my-5'>{value.h4}</p>
                                    <hr className='text-gray-400' />
                                    <h1 className='text-[18px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-500  mt-2'>{value.h5}</h1>
                                    <button className='btn btn-ghost border-[0.5px] border-red-400 hover:bg-red-500 text-red-400 text-[17px] mt-2  hover:text-white w-82 h-12'> Lean More</button>

                                </div>
                            )
                        })
                    }


                </div>
            </div>
            {/* --- BO'LIM 3 --- */}
            <div className=' border-b-[1px] border-gray-700 bg-gradient-to-br from-blue-950/50 to-black pt-20 '>
                <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-10 rounded-2xl bg-red-900/20'>
                    <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Our Process</h1>
                </div>
                <h1 className='text-5xl text-white font-bold  text-center '>
                    How We Bring Ideas to Life
                </h1>
                <h1 className='text-2xl text-gray-400 text-center my-4'>A proven methodology that ensures successful project delivery every time, from <br /> initial concept to final deployment and beyond</h1>
                <div className='flex flex-wrap  justify-evenly mt-8'>
                    {
                        box3.map((value) => {
                            return (
                                <div
                                    key={value.id}
                                    className="relative my-5 w-[350px] h-[320px] bg-gray-600/30 p-4 rounded-t-xl shadow-md border-gray-700 border-[0.2px] 
             transform transition-transform duration-300 hover:scale-105
             after:content-[''] after:absolute after:bottom-0 after:left-1/2
             after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[2px]
             after:bg-red-500 after:transition-all after:duration-500 hover:bg-gradient-to-br from-red-400/10 to-gray-700/10 group  cursor-pointer">
                <div className='flex justify-between'>
                                    <h1 className='text-[38px] text-red-400 font-bold'>{value.h1}</h1>
                                    <img src={rasm[value.id]} alt="" className='w-14   h-12 duration-300  group-hover:scale-110' />
                                    </div>
                                    <h2 className='text-[25px] my-5  text-amber-50 font-bold group-hover:text-red-400'>{value.title} </h2>
                                    <p className='text-gray-300 my-5 text-[18px]'>{value.info}</p>

                                </div>
                            )
                        })
                    }


                </div>


            </div>
              {/* --- BO'LIM 4 --- */}
              <div className=' border-gray-700 bg-gray-800 overflow-hidden '>
                <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-15 rounded-2xl bg-red-900/20'>
                    <h1 className='text-center text-red-300  text-[14px]'>Technologies We Master
                    </h1>
                </div>
                <h1 className='text-5xl text-white font-bold  text-center '>
                Cutting-Edge Tech Stack
                </h1>
                <h1 className='text-2xl text-gray-400 text-center my-4'>We stay current with the latest technologies and frameworks to deliver solutions <br /> that are both innovative and reliable.

</h1>
                <div className='flex flex-wrap gap-5 justify-center mt-8'>
                    {
                        box4.map((value) => {
                            return (
                                <div
                                    key={value.id}
                                    className="relative my-5 w-[160px] h-[150px] bg-gray-600/30 p-4 rounded-xl shadow-md border-gray-700 border-[0.2px] 
             transform transition-transform duration-300 hover:translate-y-[-5px]
              after:transition-all after:duration-500 hover:bg-gradient-to-br from-red-400/10 to-gray-700/10 group  cursor-pointer hover:border-red-400/30">
               
                                    <img src={icon[value.id]} alt="" className='w-8   h-8 duration-300  group-hover:translate-y-[-3px]' />          
                                    <h2 className='text-[20px] my-1  text-amber-50 font-bold group-hover:text-red-400'>{value.title} </h2>
                                    <p className='text-gray-300 my-1 text-[18px]'>{value.info}</p>

                                </div>
                            )
                        })
                    }


                </div>


            </div>
 {/* --- BO'LIM 5 --- */}
 <div className='h-[700px] border-b-[1px] border-gray-700 bg-gradient-to-br from-blue-950/50 to-black pt-20'>
        <div className='w-[1000px] m-auto bg-red-500 rounded-4xl' > <br />
          <div className='w-[300px] m-auto  h-[38px] border-[0.5px] border-red-400 my-3 rounded-2xl bg-red-300/20'>
            <h1 className='text-center  font-bold text-white my-1 text-[14px]'>Ready to Get Started?
            </h1>
          </div>
          <div className='w-[600px] m-auto'>
            <h1 className='text-[30px] text-white font-bold text-center'>Let's Build Something Extraordinary

            </h1>
            <p className='text-[20px] text-center text-white mt-6'>
            Transform your vision into reality with our expert development team. Get a free consultation and discover how we can accelerate your digital transformation. </p>
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

export default Services