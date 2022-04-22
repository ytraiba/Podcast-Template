import React from 'react'

import YasinPhoto from '../assets/YasinPhoto.jpeg';
import JaviPhoto from '../assets/JaviPhoto.jpeg';
import TerencePhoto from '../assets/Terrance.jpeg';
import NatashaPhoto from '../assets/NatashaPhoto.jpeg';
import CliffPhoto from '../assets/CliffPhoto.jpeg';
import DavidPhoto from '../assets/DavidPhoto.jpeg';

const People = () => {
  
  const GridEntry = props => {
    return <div className='w-full max-w-sm s mx-auto my-10'>
    <div className='bg-transparent container flex justify-center rounded-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <div className='text-xl mb-2'>
          <p className='text-white text-center flex flex-col space-y-2 items-center justify-center'>
            <img className='inline border-4 border-black rounded-sm object-contain h-58 w-58 hover:border-white' src={props.img} alt="img" />
            <span className='text-3xl border-b-2 border-[#b625d9]'>{props.name}</span>
            <span className='text-sm'>{props.alt}</span>
            <span className='text-sm'>{props.asset}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  };

  return (
    
    <div name='people' className='w-full h-full bg-[#0a192f] pt-20 pb-40'>
      {/* The Team  */}
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff] text-center mt-10'>The Team</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center justify-self-auto items-center pb-40'>
      <GridEntry name="Natasha Treunen" asset="Email" alt="PHD student at Oxford. Nickname: Bubbles" img={NatashaPhoto}/>
      <GridEntry name="David Rice" asset="Email" alt="Founder and Leader. Nickname: Uber Driver" img={DavidPhoto}/>
      <GridEntry name="Cliff Rotenburg" asset="Email" alt="Operations and Managment. Nickname: Shorts" img={CliffPhoto}/>
      <GridEntry name="Yasin Traiba" asset="Email" alt="Intern. Nickname: TBD" img={YasinPhoto}/>
      <GridEntry name="Javier Cerdas" asset="Email" alt="Software Engineer. Nickname: Keep" img={JaviPhoto}/>
      <GridEntry name="Terence McNamee" asset="Email" alt="International Relations. Nickname: SilverFox" img={TerencePhoto}/>
      
      </div>
      <footer className='text-center text-white'>
        <p className='text-sm'>Data Novae &copy; 2022</p>
      </footer>
    </div>
  )
}
// flex flex-wrap

export default People