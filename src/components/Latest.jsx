import React from 'react';

const Latest = () => {
  return (
    <div name='Latest' className='w-full h-screen p-5 md:h-[90vh] text-gray-300 flex place-items-center bg-hero-back bg-fixed bg-cover'>
      <div className='max-w-[900px] max-h-[500px] rounded-md mx-auto p-4 flex flex-col justify-center w-full h-full bg-hero-blue bg-cover'>
        <div className='flex flex-col justify-center items-center w-full h-full text-white '>
          <h3 className='text-4xl md:text-5xl border-b-4 border-yellow-300'>Our Latest Episode</h3>
          <br/>
          <div className='flex space space-x-4'>
            <iframe title='youtube' width="400" height="270" src="https://www.youtube.com/embed/Q_Z-_7-_ZqQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='flex flex-col  max-w-[350px]  w-full h-full text-white '>
              <h3 className='text-3xl text-center border-2 rounded-md pb-1 border-yellow-300'>Episode #1: Chatting with Yasin</h3>
              <br/>
              <h1 className='text-white text-xl font-extrabold '>April 20th, 2022</h1>
              <p className='text-xl'>In this episode we interview Yasin, who is working with blank and continues to try and find the answer for blank
               We discuss diffrent types of apporaches to solve the problem of blank and how they can be used to solve the problem of blank
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
