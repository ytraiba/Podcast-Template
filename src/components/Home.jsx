import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import background from '../assets/background.jpeg';


const Home = () => {
  return (
    <div name='home' className='pt-[100px] w-full h-screen bg-fixed bg-hero-back bg-cover '>
      {/* Container */}
      <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full items-center pt-2'>
        <span className='flex'>
          <p className='text-[white] font-bold text-2xl sm:text-4xl '>Brought to you by</p>&nbsp;&nbsp;
          <p class='text-black font-bold text-2xl sm:text-4xl'>DataNovae</p>
        </span>
        <h2 className='text-6xl text-center sm:text-8xl font-extrabold text-yellow-300'>
          Welcome to the podcast.</h2>
        <br/>
        <br/>
        <br/>
        <button className='mt-8 text-white group border-2 border-white px-6 py-3 my-2 flex items-center hover:border-yellow-300 hover:text-yellow-300'>
            Listen
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
        </button>
        
        
        <p className='text-2xl max-w-[600px] text-center text-white text font-extrabold'>
          A showcase of individual entrepreneurs, small-businesses, 
          and community-based organizations building new applications and 
          processes using blockchain technology.</p>
        <div>
          
        </div>
      </div>
      
    </div>
  );
};

export default Home;
