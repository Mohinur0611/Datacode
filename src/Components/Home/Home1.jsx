// src/components/Home/Home1.jsx

import React from 'react';
import box from '../../Api'; // ✅ 2 qadam yuqoriga chiqamiz

const Home1 = () => {
  return (
    <div className='w-[1200px] h-[900px] border-[1px] border-black bg-gray-800 '>
      {/* Sarlavha */}
      <div className='w-[200px] m-auto h-[30px] border-[0.5px] border-red-400 my-14 rounded-2xl bg-red-900/20'>
        <h1 className='text-center text-red-300 my-0.5 text-[14px]'>Why Choose Datacode?</h1>
      </div>

      {/* Matnlar */}
      <div className='w-[800px] h-[400px] m-auto mb-[150px]'>
        <h1 className='text-5xl text-center text-white font-bold'>
          Innovation Meets <span className='text-5xl text-red-500'>Excellence</span>
        </h1>
        <br />
        <h1 className='text-[20px] text-center text-white'>
          We combine technical expertise with creative vision to deliver exceptional results that drive your business forward.
        </h1>
      </div>

      {/* Box ma'lumotlari map bilan chiqariladi */}
      <div className='w-[1000px] m-auto grid grid-cols-3 gap-5'>
        {box.map((value, index) => (
          <div key={index} className='bg-white p-4 rounded-lg'>
            <h1 className='text-black font-bold'>ID: {value.id}</h1>
            <h1 className='text-blue-700'>{value.title}</h1>
            <p className='text-gray-700'>{value.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home1;
