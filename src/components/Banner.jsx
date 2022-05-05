import React from 'react';

const Skills = () => {

    return (
    <div name='listenHome' className='w-full h-screen sm:h-[70vh] bg-hero-listen text-white bg-cover border border-b-[50px] border-[#b5b5b5]'>
        <div className='flex flex-col mx-auto h-full items-center justify-center'>
        <p className='text-6xl font-bold sm:font-extrabold sm:text-7xl inline pt-20'>LISTEN</p>
        <br/>
        <p className='text-3xl text-pb-20'>- podcast episodes -</p>
        <button className='text-white group border-2 border-white] px-6 py-3 my-2 flex items-center hover:text-yellow-300 hover:border-white'>
            Subscribe
        </button>
        </div>
        
    </div>
  );
};

export default Skills;
