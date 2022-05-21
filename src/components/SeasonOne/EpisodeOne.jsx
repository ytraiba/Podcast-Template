import React from 'react';
import YasinPhoto from '../../assets/YasinPhoto.jpeg';

const Episodes = () => {
    

    return (
    <div name='SznOneEpOne'> 

    <div className='flex items-end w-full h-[80vh] bg-hero-listen bg-fixed bg-cover  text-black'>
        
      <div className='max-w-[1000px] mx-auto rounded-lg bg-hero-blue bg-cover grid grid-cols-1 sm:grid-cols-2 text-white h-[90vh] sm:h-[66vh]'>
            <div className='pl-2 sm:pl-8 pt-6 sm:pt-8 w-full'>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-300 text-white'>Epsiode One</p>
              <p className='text-white text-xl py-4'>Chatting With Yasin</p>
              <p className='sm:text-xl'>In this episode we talk with Yasin and discuss how he built this website 
                using React.js, Tailwind CSS, and Vercel.In this episode we talk with Yasin and discuss how he built this website 
                using React.js, Tailwind CSS, and Vercel.n this episode we talk with Yasin and discuss how he built this website 
                using React.js, Tailwind CSS, and Vercel.In this episode we talk with Yasin and discuss how he built this website 
                using React.js, Tailwind CSS, and Vercel.
              </p>
            </div>
            <div className='flex flex-wrap h-full pt-0 sm:pt-12 pr-2 sm:pr-6 pl-2 pb-2'> 
              <iframe title="episode one" className='w-full h-3/4 border-4 border-white' src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <p className='sm:text-xl'>June 12th, 2022</p>
              <div className='flex place-content-end w-full'>
                  <a href="../" className='pt-2 text-2xl sm:text-3xl hover:text-yellow-300'>Next Episode</a> 
              </div>  
            </div>
      </div>
    </div>

    <div className='flex pt-12 w-full h-[400px] sm:h-[600px] bg-hero-listen bg-fixed bg-cover  text-black'>
        <div className='max-w-[600px] mx-auto rounded-lg bg-hero-blue bg-cover grid grid-cols-1 sm:grid-cols-2 text-white h-[85%] sm:h-2/3'>
           <div className='pl-2 sm:pl-8 pt-6 sm:pt-8 w-full'>
             <p className='text-3xl font-bold inline border-b-4 border-yellow-300 text-white'>About Yasin</p>
             <p className='text-white text-xl py-2'>His Work and Contact Info</p>
             <p className='sm:text-xl'>Yasin is working towards a bachelors degree in Civil Engineering while also working as a software developer.
                Please check out any of his other projects on his portfolio. Also feel free to add him as a friend on LinkedIn.  
             </p>
           </div>
           <div className='flex flex-wrap h-fit pt-0 sm:pt-12 pr-2 sm:pr-8 pl-2 sm:pl-4'> 
           <img className='h-0 sm:h-full sm:border-4 border-white inline rounded-sm object-contain hover:border-white' src={YasinPhoto} alt="img" />             
           <div className='text-center w-full pt-2 '>
                 <a href="../" className='text-2xl sm:text-3xl hover:text-yellow-300'>LinkedIn</a>
            </div>  
           </div>
     </div>
   </div>


   </div>
  );
};

export default Episodes;





