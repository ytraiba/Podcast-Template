import React from 'react';

const Latest = () => {
  return (
    <div name='Latest' className='w-full h-screen p-5 md:h-[90vh] text-gray-300 flex place-items-center bg-hero-back sm:bg-fixed bg-cover'>
      <div className='max-w-[800px] max-h-[700px] sm:max-h-[500px] rounded-md mx-auto p-4 flex flex-col justify-center w-full h-full bg-hero-blue bg-cover'>
        <div className='flex flex-col justify-center items-center w-full h-full text-white '>
          <h3 className='text-4xl md:text-5xl border-b-4 border-yellow-300'>Our Latest Episode</h3>
          <br/>
          <div className='justify-center sm:flex space-x-4'>
            <iframe title='youtube' className='pb-2 max-w-sm sm:w-96 h-52 sm:h-72' src="https://www.youtube.com/embed/Q_Z-_7-_ZqQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className='max-w-[350px]  w-full h-full text-white '>
              <h3 className='text-3xl sm:text-center border-b-2 w-52 p-1 border-yellow-300'>Episode #1: </h3>
              <h3 className='text-3xl sm:text-center p-1'>Chatting with Yasin</h3>
              <br/>
              <h1 className='text-white text-xl font-extrabold '>April 20th, 2022</h1>
              <p className='text-xl pr-4'>In this episode we interview Yasin, who is working with blank and continues to try and find the answer for blank
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
