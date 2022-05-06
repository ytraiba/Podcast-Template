import React from 'react';

const Skills = () => {

    return (
    <div name='listenHome' className='w-full h-screen sm:h-[55vh] bg-hero-listen text-white bg-cover bg-fixed '>
        <div className='flex mx-auto h-full items-center justify-center p-0 pt-28 sm:pl-28'>
        <section className='place-content-center items-center mr-4'>
        <p className='text-8xl font-extrabold sm:font-extrabold sm:text-7xl inline '>LISTEN</p>
        <p className='text-4xl text-pb-20 pt-2 text-yellow-300'>podcast episodes</p>
        </section> 
        <section>
        <button className='rounded-md text-white text-xl  group border-2 border-white px-4 pb-[6px] my-2 flex items-center hover:text-yellow-300 hover:border-yellow-300'>
            <h3 className='font-bold border-b-2 border-yellow-300 hover:border-white'>Subscribe</h3>
        </button>
        </section>
        </div>
        
    </div>
  );
};

export default Skills;
