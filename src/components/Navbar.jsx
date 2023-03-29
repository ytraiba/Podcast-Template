import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#b5b5b5] text-black'>
      <div className='flex items-center sm:place-items-end'>
        <a className='whitespace-nowrap text-2xl sm:text-3xl font-bold border-b-4 border-yellow-300' href="../">The Big Block</a>
        <a href="https://david-app-eta.vercel.app/" className='w-[100%] sm:flex sm:place-items-end'>
        <p className='text-lg sm:text-xl text-center font-bold pl-4 invisible lg:visible'>by</p>
        <img src={Logo} alt='Logo' className='h-5 pl-4 sm:pl-2 pr-4 invisible lg:visible' />
        </a>
      </div>

      {/* menu */}
      <ul className='hidden text-xl text space-x-2 md:flex mt-4'>
        
        <li className='border-b-2 inline border-transparent hover:text-yellow-300'>
          <a href="./Listen">Listen</a>
        </li>
        <li className='border-b-2 border-transparent hover:text-yellow-300'>
          <Link to='About' smooth={true} duration={800} offset={-75}>
            About
          </Link>
        </li>
        <li className='whitespace-nowrap border-b-2 border-transparent hover:text-yellow-300'>
          <Link to='Latest' smooth={true} duration={800} offset={-75}>
            Our Latest
          </Link>
        </li>
        <li className='border-b-2 border-transparent hover:text-yellow-300'>
          <Link to='Contact' smooth={true} duration={800} offset={-75}> 
            Contact
          </Link>
        </li>
        <li className='inline '>
          <a className='border-b-2 border-[#b625d9] hover:text-yellow-300' href="https://david-app-eta.vercel.app/">
            Our Company
          </a>
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#b5b5b5] flex flex-col justify-center items-center'
        } >
        <li className='py-4 text-4xl'>
          <a href="../">Home</a>
        </li>
        <li className='py-4 text-4xl'>
          <a href="./Listen">Listen</a>
        </li>
        <li className='py-4 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Latest' smooth={true} duration={500} offset={-100}>
            Our Latest
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='About' smooth={true} duration={500} offset={-100} >
            About
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Contact' smooth={true} duration={500} offset={-100}>
            Contact
          </Link>
        </li>
        <li className='py-4 text-4xl'>
          <a className='border-b-2 border-[#b625d9]' href="https://david-app-eta.vercel.app/">Our Company</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
