import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import icon from './assets/Icon/icon.png';
import icon1 from './assets/Icon/Icon1.png';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/home1" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed bg-gradient-to-r from-gray-900 to-gray-950 shadow-md z-50 w-[1200px] h-[70px] border-[0.5px] border-black m-auto flex justify-between items-center px-4">
      {/* Logo */}
      <div className="w-[100px] h-[50px] cursor-pointer mb-[20px] mx-[70px] flex gap-2 items-center border-2 relative group transition-colors duration-300">
        <img className="w-[45px] h-[35px] rounded-xl bg-red-500 mt-5 group-hover:scale-105 transition-transform duration-300" src={icon} alt="logo" />
        <h1 className="text-amber-50 text-xl font-bold cursor-pointer group-hover:text-red-400">Datacode</h1>
        <span className="text-[12px] flex gap-1 absolute top-full my-[-12px] mx-[50px] text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <img className="w-3 h-3 my-[4px]" src={icon1} alt="icon1" />
          Innovation
        </span>
      </div>

      {/* Nav Links */}
      <ul className="flex items-center h-full px-4 flex-row space-x-6 relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.name}>
<Link
  to={item.path}
  className={`relative inline-block text-[15px] px-2 transition-colors duration-300 
              ${isActive ? 'text-red-400' : 'text-white hover:text-red-400'}`}
>
  <span
    className={`relative z-10
                before:content-[''] before:absolute before:bottom-[-4px] before:left-0 
                before:h-[2px] before:w-full before:bg-red-400 
                before:origin-center before:scale-x-0 hover:before:scale-x-100
                before:transition-transform before:duration-300
                ${isActive ? 'before:scale-x-100' : ''}`}
  >
    {item.name}
  </span>
</Link>

            </li>
          );
        })}
        <li>
          <button className="btn btn-error bg-red-700 rounded-3xl text-white">Get started</button>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-[1200px] m-auto h-[4000px] border-[0.2px] border-black">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home1" element={<div className="p-10 text-xl">Services Page</div>} />
          <Route path="/contact" element={<div className="p-10 text-xl">Contact Page</div>} />
          <Route path="*" element={<h1 className="text-center mt-20 text-3xl text-red-500">404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
