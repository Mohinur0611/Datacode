import React from 'react'
import icon22 from '../../assets/Icon/icon22.png'
import icon23 from '../../assets/Icon/icon23.png'
import icon24 from '../../assets/Icon/icon24.png'
import icon25 from '../../assets/Icon/icon25.png'
import icon from '../../assets/Icon/icon.png'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
 {/* --- BO'LIM 1 --- */}
 <div className='min-h-screen  border-gray-700 bg-gradient-to-br from-blue-950 to-black pt-20'>
        <div className='w-[800px] m-auto'>
          <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
            <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Get In Touch</h1>
          </div>
          <div className='w-[1000px] m-auto mx-[-80px] '>
            <h1 className='text-6xl text-white font-bold text-center '>
     
Get In Touch
Let's Build Something<span className='text-red-500 text-center'> Amazing Together</span>
            </h1>
            <p className='text-[22px] text-center text-white mt-6'>
            Ready to transform your digital presence? Get in touch with our expert team <br />today and let's discuss how we can bring your vision to life with innovative <br /> solutions and exceptional craftsmanship.</p>
          </div>
        </div>
      </div> 
      {/* --- BO'LIM 2 --- */}   
      <div>
<div className='w-full py-20 bg-gray-800 border-t-[1px] border-black' >
  <div className='flex gap-4 '>
<div className='w-100 h-220  mx-8 '>
<div className='w-[800px] m-auto'>
          <div className='w-[200px]  m-5 h-[30px] border-[0.5px] border-red-400 my-8 rounded-2xl bg-red-900/20'>
            <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Get In Touch</h1>
          </div>
          <h1 className='text-white m-5 text-[25px] font-bold'>Let's Start a Conversation</h1>
          <h1  className=' text-[15px] text-gray-400 m-5 '>We'd love to hear about your project. Send us a <br /> message and we'll respond within 24 hours with  <br /> a detailed proposal.
<div className='w-80 h-25 border-[0.5px] rounded-2xl my-8 flex flex-wrap bg-gray-400/10 hover:border-red-400 cursor-pointer'>
    <div>
<img src={icon23} className='w-12 border-[7px] border-blue-400 bg-blue-400 rounded-[5px] m-5 duration-500 hover:scale-110' alt="" /></div>
<div className='mt-4'>
<h1  className=' text-[15px] text-white hover:text-red-400 font-bold' >Email Us</h1>
<h1  className=' text-[15px] text-red-400  ' >hello@datacode.com</h1>
<h1  className=' text-[15px] text-gray-400  '>Send us an email anytime</h1>
</div>
</div>
<div className='w-80 h-25 border-[0.5px] rounded-2xl my-8 flex flex-wrap bg-gray-400/10 hover:border-red-400 cursor-pointer'>
    <div>
<img src={icon24} className='w-12 border-[7px] border-green-400 bg-green-400  rounded-[5px] m-5 duration-500 hover:scale-110' alt="" /></div>
<div className='mt-4'>
<h1  className=' text-[15px] text-white hover:text-red-400 font-bold' >Call Us</h1>
<h1  className=' text-[15px] text-red-400  ' >+1 (555) 123-4567</h1>
<h1  className=' text-[15px] text-gray-400  '>Mon-Fri 9am-6pm PST</h1>
</div>
</div>
<div className='w-80 h-25 border-[0.5px] rounded-2xl my-8 flex flex-wrap bg-gray-400/10 hover:border-red-400 cursor-pointer'>
    <div>
<img src={icon22} className='w-12 border-[7px] border-purple-500 bg-purple-500 rounded-[5px] m-5 duration-500 hover:scale-110' alt="" /></div>
<div className='mt-4'>
<h1  className=' text-[15px] text-white hover:text-red-400 font-bold' >Visit Us</h1>
<h1  className=' text-[15px] text-red-400  ' >San Francisco, CA</h1>
<h1  className=' text-[15px] text-gray-400  '>Schedule an appointment</h1>
</div>
</div>
<div>
<div className='w-80 h-42 border-[0.5px] rounded-2xl my-8 flex flex-wrap bg-red-400/10  border-red-400 cursor-pointer'>
<div className='w-50 h-10  m-2 flex gap-1 flex-wrap '>
<img src={icon25} className='w-7 h-7 my-1' alt="" />
<h1 className='text-5 mt-[7px] text-red-400'>Quick Response</h1>

<h1 className='text-4 text-gray-300' >We typically respond to all inquiries within 2-4 hours during business hours. For urgent matters, don't hesitate to call us directly.</h1>
</div>
</div>
<div>

</div>
</div>



</h1>
</div>



</div>

<div className="w-400  ">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card  w-150 h-200 bg-gray-400/10 shrink-0 shadow-2xl border-[0.5px] border-gray-500">
    <h1 className='text-white text-[20px] text-center font-bold mt-7'>Tell Us About Your Project</h1>
    <h1 className='text-[15px] text-gray-400 text-center mt-2' > Fill out the form below and we'll get back to you soon</h1>
      <div className="card-body">
      <fieldset className="fieldset">
  <label className="label text-gray-300 text-[15px]">Full Name *</label>
  <input
    type="text"
    className="text-gray-300 border border-gray-400 rounded-[10px] bg-gray-300/10 h-12 px-3 w-full"
    placeholder="John Doe"
  />

  <label className="label text-gray-300 text-[15px]">Company</label>
  <input
    type="text"
    className="text-gray-300 border border-gray-400 rounded-[10px] bg-gray-300/10 h-12 px-3 w-full"
    placeholder="Your Company"
  />

  <label className="label text-gray-300 text-[15px]">Email Address *</label>
  <input
    type="email"
    className="text-gray-300 border border-gray-400 rounded-[10px] bg-gray-300/10 h-12 px-3 w-full"
    placeholder="john@example.com"
  />

  <label className="label text-gray-300 text-[15px]">Service Needed</label>
  <select
    className="text-gray-300 border border-gray-400 rounded-[10px] bg-gray-300/10 h-12 px-3 w-full appearance-none"
  >
    <option disabled selected className="bg-gray-800 text-gray-400 text-sm">
      Select a service
    </option>
    
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
      Web Development
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
      UI/UX Design
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
  Clou Solutions
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
  SEO Sptimization
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
    Performace Optimization
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
    E-commerce Solutions
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
   Custom Software
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
     Other
    </option>
  </select>
  <label className="label text-gray-300 text-[15px]">Project Budget</label>
  <select
    className="text-gray-300 border border-gray-400 rounded-[10px] bg-gray-300/10 h-12 px-3 w-full appearance-none"
  >
    <option disabled selected className="bg-gray-800 text-gray-400 text-sm">
      Select budget range
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
     Under $5,000
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
    $5,000-$10,000
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
    $10,000-$25,000
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
    $25,000-$50,000
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
    $50,000-$100,000
    </option>
    <option className="bg-gray-800 text-white text-sm hover:bg-gray-600">
    $100,000 +
    </option>
    
    </select>
     
  <label className="label text-gray-300 text-[15px] mt-4 block">Project Details *</label>
  <textarea
    className="text-gray-300 border border-gray-400 rounded-[10px] bg-gray-300/10 h-32 px-3 py-2 w-full resize-none placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
    placeholder="Tell us about your project requirements, timeline, goals, and any specific features you need. The more details you provide, the better we can understand your vision and provide an accurate proposal."
  ></textarea>
  <button className="btn btn-neutral bg-gradient-to-br from-red-500 to-red-600 mt-4 " type=''>Send Message</button>
</fieldset>


      </div>
      </div>
    </div>
  </div>




  
</div>

</div>
<div className="bg-[#0f172a] min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-2xl">
        <button className="bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm mb-4 border border-red-500/30">
         Frequently Asked Questions
        </button>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
          Got Questions? We Have Answers
        </h1>
        <p className="text-gray-400 text-lg">
          Here are some common questions about our process, services, and how we work with clients.
        </p>
      </div>

      <div className="mt-10 w-full max-w-3xl bg-[#1e293b] text-left p-6 rounded-xl border-[0.5px] cursor-pointer group duration-200 hover:border-red-400  ">
        <h2 className="text-white font-semibold text-lg  duration-200 group-hover:text-red-400">
          How long does a typical project take?
        </h2>
        <p className="text-gray-400 mt-2">
          Project timelines vary based on complexity and scope. Simple websites typically take 2–4 weeks, 
          while complex web applications can take 8–16 weeks. We provide detailed timelines during our 
          initial consultation and keep you updated throughout the development process.
        </p>
      </div>
      <div className="mt-10 w-full max-w-3xl bg-[#1e293b] text-left p-6 rounded-xl border-[0.5px] cursor-pointer group duration-200 hover:border-red-400">
        <h2 className="text-white font-semibold text-lg duration-200 group-hover:text-red-400">
        Do you provide ongoing maintenance and support?
        </h2>
        <p className="text-gray-400 mt-2">
        Yes, we offer comprehensive maintenance packages including security updates, performance monitoring,
         bug fixes, and feature enhancements. We believe in long-term partnerships and provide 24/7 support 
         to ensure your application runs smoothly.
        </p>
      </div>
      <div className="mt-10 w-full max-w-3xl bg-[#1e293b] text-left p-6 rounded-xl border-[0.5px] cursor-pointer group duration-200 hover:border-red-400">
        <h2 className="text-white font-semibold text-lg duration-200 group-hover:text-red-400">
        What technologies do you specialize in?
        </h2>
        <p className="text-gray-400 mt-2">
        We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, Python, and cloud platforms like AWS and Azure. We choose the best technology stack based on your specific project requirements and business goals.
        </p>
      </div>
      <div className="mt-10 w-full max-w-3xl bg-[#1e293b] text-left p-6 rounded-xl border-[0.5px] cursor-pointer group duration-200 hover:border-red-400">
        <h2 className="text-white font-semibold text-lg duration-200 group-hover:text-red-400">
        How do you handle project communication and updates?
        </h2>
        <p className="text-gray-400 mt-2">
        We maintain transparent communication throughout the project with regular updates, progress reports, and dedicated project management tools. You'll have direct access to our team and always know where your project stands.
        </p>
      </div>
      <div className="mt-10 w-full max-w-3xl bg-[#1e293b] text-left p-6 rounded-xl border-[0.5px] cursor-pointer group duration-200 hover:border-red-400">
        <h2 className="text-white font-semibold text-lg duration-200 group-hover:text-red-400">
        Can you work with our existing team or systems?
        </h2>
        <p className="text-gray-400 mt-2">
        Absolutely! We excel at integrating with existing teams and systems. Whether you need to extend your current development capacity or integrate with legacy systems, we adapt our approach to work seamlessly with your existing infrastructure.

</p>
      </div>
      <div className="mt-10 w-full max-w-3xl bg-[#1e293b] text-left p-6 rounded-xl border-[0.5px] cursor-pointer group duration-200 hover:border-red-400">
        <h2 className="text-white font-semibold text-lg duration-200 group-hover:text-red-400">
        What makes Datacode different from other agencies?
        </h2>
        <p className="text-gray-400 mt-2">
        Our focus on innovation, quality, and long-term partnerships sets us apart. We don't just build applications – we craft digital experiences that drive business growth. Our team combines technical expertise with creative vision to deliver exceptional results.
</p>
      </div>

      <h2 className="text-gray-400  mt-15 font-semibold text-lg duration-200 group-hover:text-red-400">
      Still have questions?
        </h2>
<button className='btn btn-ghost border-[0.5px] border-red-400 hover:bg-red-500 text-red-400 text-[17px] mt-10 hover:text-white w-50 h-20'> Contact Us Directly</button>







</div>
    </div>
{/* --- BO'LIM 3 --- */} 
<div className='w-ful m-auto  py-10 bg-gray-800  '>
        <div className='w-[1000px]   flex justify-evenly m-auto' >
          <div className='w-100 h-60  flex flex-wrap'>
            <img className="w-[45px] h-[35px] rounded-xl bg-red-500 mt-5 " src={icon} alt="logo" />
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
               <img src={icon23}  alt="" className='w-5 h-5' />
            <h1 className='text-gray-400 '>+1(555)123-4567 </h1>
            <img src={icon22}  alt="" className='w-5 h-5 mr-[12px]' />
            <h1 className='text-gray-400 '>San Francisco, CA</h1>
          </div>
        </div></div>

        <hr className='text-gray-500 w-[1150px] ' />
        <div className=' flex justify-between my-6 group'>
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

export default Contact