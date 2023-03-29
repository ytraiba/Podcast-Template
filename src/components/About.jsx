import React from 'react';

const About = () => {
  return (
    <div name='About' className='w-full h-screen sm:h-[90vh] bg-yellow-300 p-10 md:p-20 flex justify-evenly '>
      <div className='flex flex-col justify-center items-center w-full h-full bg-hero-blue bg-cover rounded-md'>
        <div className='max-w-[800px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4 text-white'>
            <p className='text-4xl md:text-5xl inline border-b-4 border-yellow-200'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold text-white'>
              
              <p>THE BIG BLOCK:</p>
            </div>
            <div className='text-xl md:text-2xl font-bold text-white'>
              <p>
              The Big Block is working to highlight innovators across the African continent who are
              creatively driving the adoption of defi, cryptocurrency, and other blockchain-based technologies and applications.  
              A semi-weekly podcast will be the platform's centerpiece, featuring in-depth interviews with industry 
              leaders, panel discussions between various stakeholders, and highlights of recent developments.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
