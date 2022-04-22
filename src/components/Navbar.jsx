import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
// import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#b5b5b5] text-black'>
      <div>
        <h3 className='ml-6 text-2xl sm:text-5xl font-bold border-b-4 border-yellow-300'><Link to="home" smooth={true} duration={500}>The African Block</Link></h3>
        {/* <img src={Logo} alt='Logo' style={{ width: '250px' }} /> */}
      </div>

      {/* menu */}
      <ul className='hidden text-2xl text space-x-4 md:flex mt-4'>
        <li className='border-b-2 inline border-transparent hover:border-yellow-300'>
          <Link to='Article' smooth={true} duration={800} offset={-100}>
            Listen
          </Link>
        </li>
        <li className='border-b-2 border-transparent hover:border-yellow-300'>
          <Link to='About' smooth={true} duration={800} offset={-100}>
            About
          </Link>
        </li>
        <li className='border-b-2 border-transparent hover:border-yellow-300'>
          <Link to='Contact' smooth={true} duration={800} offset={-100}> 
            Contact
          </Link>
        </li>
        <li>
         <div class="mb-3 xl:w-62">
            <div class="input-group relative flex space-x-1 items-stretch w-full mb-4">
              <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"></input>
              <button class="btn inline-block px-6 py-2 border-2 border-black text-black hover:text-yellow-300 hover:border-yellow-300 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
            </div>
         </div>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobileMenu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#90BEDE] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Article' smooth={true} duration={500}>
            Article
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
