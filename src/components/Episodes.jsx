import React from 'react';
import EP1 from '../assets/EP1.jpeg';
import EP2 from '../assets/EP2.jpeg';
import EP3 from '../assets/EP3.jpeg';
import EP4 from '../assets/EP4.jpeg';
import EP5 from '../assets/EP5.jpeg';
import EP6 from '../assets/EP6.jpeg';

const Episodes = () => {
    const GridEntry = props => {
        return <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 h-auto py-4'>
            <div className='flex flex-col justify-center items-center h-full text-lg'>
            <p className='mb-4'>{props.name}</p>
            <img className='w-40 sm:w-52 mx-auto' src={props.img} alt={props.alt} />
            <p className='mt-4'>{props.asset}</p>
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
            <GridEntry name="SZN1 EP1"  asset="March 22nd 2022" img={EP1} alt="EP1 icon" />
            <GridEntry name="SZN1 EP2"  asset="March 22nd 2022" img={EP2} alt="EP1 icon" />
            <GridEntry name="SZN1 EP3"  asset="March 22nd 2022" img={EP3}alt="EP1 icon" />
            <GridEntry name="SZN1 EP4"  asset="March 22nd 2022" img={EP4}alt="EP1 icon" />
            <GridEntry name="SZN1 EP5"  asset="March 22nd 2022" img={EP5}alt="EP1 icon" />
            <GridEntry name="SZN1 EP6"  asset="March 22nd 2022" img={EP6}alt="EP1 icon" />
          </div> 
      </div>
    </div>
  );
};

export default Episodes;
