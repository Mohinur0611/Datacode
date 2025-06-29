import React from 'react';
import icon from "../../assets/icon.png"
import icon1 from '../../assets/icon1.png'

const Navbar = () => {
  return (
    <nav className="fixed bg-gradient-to-r from-gray-900 to-gray-950 shadow-md z-50 w-[1200px] h-[70px] border-[0.5px] border-black m-auto flex justify-between items-center px-4">

      
<div className="w-[100px] h-[50px] cursor-pointer mb-[20px] mx-[70px] flex gap-2 items-center border-2 relative group transition-colors duration-300">
  <img
    className="w-[45px] h-[35px] rounded-xl bg-red-500 mt-5 group-hover:scale-105 transition-transform duration-300"
    src={icon}
    alt=""
  />
  <h1 className="text-amber-50 text-xl font-bold cursor-pointer group-hover:text-red-400">
    Datacode
  </h1>
  <span className="text-[15px] flex gap-1 absolute top-full my-[-10px] mx-[50px] text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <img className="w-3 h-4 my-[4px]" src={icon1} alt="" />
    Innovation
  </span>
</div>



      <div className="w-[500px] h-full flex items-center ">
        <ul className="flex items-center h-full px-4 flex-row space-x-4 relative">

          <li className="relative text-white text-[15px]  cursor-pointer group  hover:text-red-300 ">
            Home
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full group-hover:bg-red-400"></span>
          </li>
          <li className="relative text-white text-[15px] fcursor-pointer group hover:text-red-300">
            About
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full group-hover:bg-red-400"></span>
          </li>
          <li className="relative text-white text-[15px]  cursor-pointer group hover:text-red-300">
            Services
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full group-hover:bg-red-400"></span>
          </li>
          <li className="relative text-white text-[15px] fcursor-pointer group hover:text-red-300">

            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full group-hover:bg-red-400"></span>
          </li>
          <li className="relative text-white text-[15px]  cursor-pointer group hover:text-red-300">
            Contact
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:left-0 group-hover:w-full group-hover:bg-red-400"></span>
          </li>
          <li>
            <button className="btn btn-error bg-red-700 rounded-3xl text-white">Get started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
