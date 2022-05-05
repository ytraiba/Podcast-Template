import React from 'react';
// import { HTML, CSS, JS, ReactImg, Node, Github } from '../assets';

const Episodes = () => {
    const GridEntry = props => {
        return <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-72'>
            <div className='flex flex-col justify-center items-center h-full text-lg'>
            <img className=' w-auto mx-auto' src={props.asset} alt={props.alt} />
            <p className='my-4'>{props.name}</p>
            <p className='my-4'>{props.asset}</p>
            </div>
        </div>
    };

    return (
    <div name='episodes' className='w-full h-[150vh] sm:h-[120vh] bg-gray-200 text-black'>

      <div className='max-w-[1000px] mx-auto p-4 pt-[100px] flex flex-col justify-center w-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#b625d9] '>Episodes</p>
              <p className='py-4'> Season 1</p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <GridEntry name="SZN1 EP1" asset="March 22nd 2022" alt="EP1 icon" />
            <GridEntry name="EP2"  alt="CSS icon" />
            <GridEntry name="EP3"  alt="JavaScript icon" />
            <GridEntry name="EP4"  alt="React icon" />
            <GridEntry name="EP5"  alt="GitHub icon" />
            <GridEntry name="EP6"  alt="Node icon" />
          </div> 
      </div>
    </div>
  );
};

export default Episodes;
