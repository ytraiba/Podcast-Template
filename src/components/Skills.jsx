import React from 'react';
import { HTML, CSS, JS, ReactImg, Node, Github } from '../assets';

const Skills = () => {
    const GridEntry = props => {
        return <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-24 mx-auto' src={props.asset} alt={props.alt} />
            <p className='my-4'>{props.name}</p>
        </div>
    };

    return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#b625d9] '>Skills</p>
              <p className='py-4'> These are the tools used to create this website</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <GridEntry name="HTML" asset={HTML} alt="HTML icon" />
            <GridEntry name="CSS" asset={CSS} alt="CSS icon" />
            <GridEntry name="JAVASCRIPT" asset={JS} alt="JavaScript icon" />
            <GridEntry name="REACT" asset={ReactImg} alt="React icon" />
            <GridEntry name="GITHUB" asset={Github} alt="GitHub icon" />
            <GridEntry name="NODE JS" asset={Node} alt="Node icon" />
          </div> 
      </div>
    </div>
  );
};

export default Skills;
