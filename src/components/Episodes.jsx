import React from 'react';
import EP1 from '../assets/EP1.jpeg';
import EP2 from '../assets/EP2.jpeg';
import EP3 from '../assets/EP3.jpeg';
import EP4 from '../assets/EP4.jpeg';
import EP5 from '../assets/EP5.jpeg';
import EP6 from '../assets/EP6.jpeg';

const Episodes = () => {
    const GridEntry = props => {
        return <div className='rounded-sm bg-[#b5b5b5] shadow-md shadow-[#040c16] hover:bg-gray-200 duration-500 h-auto py-4'>
            <div className='flex flex-col justify-center items-center h-full text-lg'>
            <p className='text-2xl mb-4 border-b-4 border-yellow-300'>{props.name}</p>
            <img className='rounded-sm w-56 sm:w-72 mx-auto' src={props.img} alt={props.alt} />
            <p className='text-sm mt-4'>{props.asset}</p>
            </div>
        </div>
    };

    return (
    <div name='Episodes' className='w-full h-[150vh] sm:h-[130vh] bg-hero-listen bg-fixed bg-cover  text-black'>

      <div className='max-w-[1200px] mx-auto rounded-lg bg-hero-blue flex flex-col justify-center h-full'>
          <div className='pt-4'>
              <p className='text-4xl font-bold inline border-b-4 border-[#b625d9] text-white mx-8'>Season One</p>
              <p className='text-white py-4 mx-8'>Episodes</p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-2 px-6 pb-8'>
            <GridEntry name="Episode 1"  asset="March 22nd 2022" img={EP2} alt="EP1 icon" />
            <GridEntry name="Episode 2"  asset="March 23rd 2022" img={EP1} alt="EP1 icon" />
            <GridEntry name="Episode 3"  asset="March 24th 2022" img={EP3}alt="EP1 icon" />
            <GridEntry name="Episode 4"  asset="March 25th 2022" img={EP4}alt="EP1 icon" />
            <GridEntry name="Episode 5"  asset="March 26th 2022" img={EP5}alt="EP1 icon" />
            <GridEntry name="Episode 6"  asset="March 27th 2022" img={EP6}alt="EP1 icon" />
          </div> 
      </div>
      <div className='bg-hero-listen bg-fixed bg-cover h-[20vh] w-full'></div>
    </div>
  );
};

export default Episodes;
