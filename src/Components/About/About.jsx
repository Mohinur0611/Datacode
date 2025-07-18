import React from 'react'
import { box1 } from '../../Api'
import icon17 from '../../assets/Icon/icon18.png'
import icon18 from '../../assets/Icon/icon19.png'
import icon19 from '../../assets/Icon/icon13.png'
import icon20 from '../../assets/Icon/icon20.png'
const About = () => {
  const photo = {
    1: icon17,
    2: icon18,
    3: icon19,
    4: icon20
  }


  return (

    <div className="w-[1200px] m-auto bg-black">
      {/* --- BO'LIM 1 --- */}
      <div className='h-[800px] border-b-[1px] border-gray-700 bg-gradient-to-br from-blue-950 to-black pt-20'>
        <div className='w-[800px] m-auto'>
          <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
            <h1 className='text-center text-red-300 my-0.5 text-[14px]'>About Datacode</h1>
          </div>
          <div className='w-[800px] m-auto mb-[200px]'>
            <h1 className='text-6xl text-white font-bold text-center '>
              Crafting Digital<span className='text-red-500'>Excellence</span>
            </h1>
            <p className='text-[22px] text-center text-white mt-6'>
              We're a passionate team of innovators, developers, and designers dedicated to creating exceptional web experiences that drive business growth and inspire user engagement.     </p>
          </div>
        </div>
      </div>
      {/* --- BO'LIM 2 --- */}
      <div className='w-full flex justify-evenly'>
        <div className='w-[550px] h-[600px]'>
          <div className='w-[200px]  h-[30px] border-[0.5px] border-red-400 mt-15 rounded-2xl bg-red-900/20'>
            <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Our Mission</h1>
          </div>
          <h1 className='text-[40px] font-bold my-2 text-white'>Transforming Ideas Into Digital Reality</h1>
          <h1 className='text-gray-400  text-[20px] my-5'>At Datacode, we believe that great software should be both powerful and beautiful. Our mission is to help businesses transform their digital presence through innovative web development solutions that combine cutting-edge technology with exceptional design.</h1 >
          <h1 className='text-gray-400  text-[20px] my-5'>We don't just build applications – we craft digital experiences that engage users, drive conversions, and scale with your business growth. Every project is an opportunity to push the boundaries of what's possible.</h1 >
        </div>
        <div className='w-[550px] h-[350px]  rounded-2xl bg-red-600 mt-30'>
          <h1 className='text-[60px] text-white font-bold text-center mt-15'>5+</h1>
          <h1 className='text-[25px] text-white/90 text-center'> Years of Excellence</h1>
          <h1 className='text-[18px] text-white/70 text-center'>Building digital solutions that matter</h1>
          <div className='flex gap-5 mx-10 mt-7'>
            <div className='w-50 h-20 bg-white/30 rounded-[20px]'>
              <h1 className='text-[25px] text-white text-center font-bold'>
                150+
              </h1>
              <h1 className='text-[18px] text-white/70 text-center'>
                Projects
              </h1>
            </div>
            <div className='w-50 h-20 bg-white/30 rounded-[20px]'>
              <h1 className='text-[25px] text-white text-center font-bold'>
                150+
              </h1>
              <h1 className='text-[18px] text-white/70 text-center'>
                Projects
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* --- BO'LIM 3 --- */}
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
            box1.map((value) => {
              return (
                <div
                  key={value.id}
                  className="relative w-[250px] h-[280px] bg-gray-600/30 p-4 rounded-xl shadow-md border-gray-500 border-[0.2px] 
             transform transition-transform duration-300 hover:scale-105
             after:content-[''] after:absolute after:bottom-0 after:left-1/2
             after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[2px]
             after:bg-red-500 after:transition-all after:duration-500">
                  <img src={photo[value.id]} alt="icon" className='w-14  mb-4 ' />
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
      {/* --- BO'LIM 4 --- */}
      <div className='h-[1000px]  border-b-[1px] border-gray-700 bg-gradient-to-br from-blue-950/50 to-black pt-20'>
        <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
          <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Meet Our Team</h1>
        </div>
        <h1 className='text-[50px] text-white font-bold text-center'>The Minds Behind the Magic</h1>
        <h1 className='text-[25px] text-gray-400 text-center'>Experienced professionals passionate about creating exceptional web solutions <br /> and pushing the boundaries of technology.</h1>
        <div className='flex justify-evenly my-10'>
          < div className='w-[360px] h-[350px] bg-gray-500/20 mt-10 border-[0.5px] border-gray-600 rounded-[25px] group hover:translate-y-[-15px] duration-500 hover:border-red-400/50 hover:bg-gradient-to-br from-red-400/5 to-gray-500/10'>
            <div className='w-[95px] h-[95px] border-[0.5px] bg-gradient-to-bl from-blue-400 to-purple-600 rounded-3xl mx-10 my-5 group-hover:scale-105  duration-400'>
              <h1 className='text-[28px] text-white font-bold p-7 '>AT</h1>
            </div>
            <h1 className='text-[20px] text-white font-bold mx-10 group-hover:text-red-400/80 duration-400'>Alex Thompson</h1>
            <h1 className='text-[18px] text-red-400 my-2 mx-10'>Founder & Lead Developer</h1>
            <h1 className='text-[15px] text-gray-400 my-2 mx-10'>8+ years in full-stack development</h1>
            <h1 className='text-[16px] text-gray-300 my-2 ml-10'>Expertise: React, Node.js, Cloud Architecture</h1>
            <h1 className='text-[15px] text-gray-400 my-2 mx-10 italic'>Passionate about creating scalable solutions that make a difference.</h1>
          </div>
          < div className='w-[360px] h-[350px] bg-gray-500/20 mt-10 border-[0.5px] border-gray-600 rounded-[25px] group hover:translate-y-[-15px] duration-500 hover:border-red-400/50 hover:bg-gradient-to-br from-red-400/5 to-gray-500/10'>
            <div className='w-[95px] h-[95px] border-[0.5px] bg-gradient-to-bl from-red-400 to-pink-600 rounded-3xl mx-10 my-5 group-hover:scale-105  duration-400'>
              <h1 className='text-[28px] text-white font-bold p-7 '>MS</h1>
            </div>
            <h1 className='text-[20px] text-white font-bold mx-10 group-hover:text-red-400/80 duration-400'>Maria Santos</h1>
            <h1 className='text-[18px] text-red-400 my-2 mx-10'>Senior Frontend Developer</h1>
            <h1 className='text-[15px] text-gray-400 my-2 mx-10'>6+ years in UI/UX development</h1>
            <h1 className='text-[16px] text-gray-300 my-2 ml-10'>xpertise: React, TypeScript, Design Systems</h1>
            <h1 className='text-[15px] text-gray-400 my-2 mx-10 italic'>Believes in the power of beautiful, intuitive user experiences.</h1>
          </div>
          < div className='w-[360px] h-[350px] bg-gray-500/20 mt-10 border-[0.5px] border-gray-600 rounded-[25px] group hover:translate-y-[-15px] duration-500 hover:border-red-400/50 hover:bg-gradient-to-br from-red-400/5 to-gray-500/10'>
            <div className='w-[95px] h-[95px] border-[0.5px] bg-gradient-to-bl from-green-300 to-green-600 rounded-3xl mx-10 my-5 group-hover:scale-105  duration-400'>
              <h1 className='text-[28px] text-white font-bold p-7 '>DK</h1>
            </div>
            <h1 className='text-[20px] text-white font-bold mx-10 group-hover:text-red-400/80 duration-400'>David Kim</h1>
            <h1 className='text-[18px] text-red-400 my-2 mx-10'>Backend Engineer</h1>
            <h1 className='text-[15px] text-gray-400 my-2 mx-10'>7+ years in backend systems</h1>
            <h1 className='text-[16px] text-gray-300 my-2 ml-10'>Expertise: Python, PostgreSQL, DevOps</h1>
            <h1 className='text-[15px] text-gray-400 my-2 mx-10 italic'>Dedicated to building robust, secure, and performant systems.</h1>
          </div>
        </div>
        {/* --- BO'LIM 5 --- */}
        <div className='bg-[#0f172a] w-full p-18'>
          <div className='relative w-[200px] m-auto h-[30px]  border-[0.5px] border-red-400   rounded-2xl bg-red-900/20'>
            <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Our Journey</h1>
          </div>
          <h1 className='text-[60px] text-white font-bold text-center my-2'>Milestones of Innovation</h1>
          <h1 className='text-[20px] text-gray-400 my-2 text-center'>From humble beginnings to industry recognition, here's how we've grown and <br /> evolved over the years.</h1>
          <div className="bg-[#0f172a] min-h-screen flex items-center justify-center px-4 py-10">

            <div className="relative w-full max-w-4xl group">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-red-500"></div>

              <div className="mb-16 flex justify-start ">
                <div className="bg-[#1e293b] text-white p-6 rounded-xl w-[350px] h-[200px] relative">
                  <h3 className="text-red-500 text-2xl font-bold ">2019</h3>
                  <h4 className="text-white text-xl font-semibold hover:text-red-400">Company Founded</h4>
                  <p className="text-gray-400 text-lg mt-1">
                    Started with a vision to transform web development
                  </p>
                </div>
              </div>

              <div className="mb-16 flex justify-end w-full  cursor-pointer   ">
                <div className="bg-[#1e293b] text-white p-6 rounded-xl w-[350px] h-[200px] relative">
                  <h3 className="text-red-500 text-3xl font-bold">2020</h3>
                  <h4 className="text-white text-xl font-semibold hover:text-red-400">First Major Client</h4>
                  <p className="text-gray-400 text-lg mt-1">
                    Delivered our first enterprise-level solution
                  </p>
                </div>
              </div>

              <div className="mb-16 flex justify-start w-full cursor-pointer  ">
                <div className="bg-[#1e293b] text-white p-6 rounded-xl w-[350px] h-[200px] relative">
                  <h3 className="text-red-500 text-3xl font-bold">2021</h3>
                  <h4 className="text-white text-xl font-semibold hover:text-red-400">Team Expansion</h4>
                  <p className="text-gray-400 text-lg mt-1">
                    Grew to a team of skilled developers and designers
                  </p>
                </div>
              </div>
              <div className="mb-16 flex justify-end w-full cursor-pointer  ">
                <div className="bg-[#1e293b] text-white p-6 rounded-xl w-[350px] h-[200px] relative">
                  <h3 className="text-red-500 text-3xl font-bold">2022</h3>
                  <h4 className="text-white text-xl font-semibold hover:text-red-400">50+ Projects</h4>
                  <p className="text-gray-400 text-lg mt-1">
                    Reached milestone of 50 successful project deliveries
                  </p>
                </div>
              </div>
              <div className="mb-16 flex justify- w-full cursor-pointer  ">
                <div className="bg-[#1e293b] text-white p-6 rounded-xl w-[350px] h-[200px] relative">
                  <h3 className="text-red-500 text-3xl font-bold">2023</h3>
                  <h4 className="text-white text-xl font-semibold hover:text-red-400">Innovation Award</h4>
                  <p className="text-gray-400 text-lg mt-1">
                    Recognized for outstanding technical innovation
                  </p>
                </div>
              </div>
              <div className="mb-16 flex justify-end w-full cursor-pointer  ">
                <div className="bg-[#1e293b] text-white p-6 rounded-xl w-[350px] h-[200px] relative">
                  <h3 className="text-red-500 text-3xl font-bold">2024</h3>
                  <h4 className="text-white text-xl font-semibold hover:text-red-400">Global Reach</h4>
                  <p className="text-gray-400 text-lg mt-1">
                    Expanded services to clients worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div>

        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sit ea ex inventore fugit fuga sint corrupti voluptatum nostrum cum?</h1>
        </div>
      </div>
      )
}

      export default About;