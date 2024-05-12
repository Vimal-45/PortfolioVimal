import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaInstagram, FaMailBulk, FaTimes } from 'react-icons/fa';
import Logo from '../assets/pngwing.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed w-full h-20 md:h-14 flex justify-between items-center px-4 bg-[#08111e] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo' style={{ width: "50px" }} />
            </div>

            <div className='md:flex hidden'>
                <ul className='flex'>
                    <li className='mr-4 uppercase text-sm font-semibold'>
                        <Link to='home' smooth={true} duration={500} >
                        Home
                        </Link>
                    </li>
                    <li className='mr-4 uppercase text-sm font-semibold'>
                        <Link to='about' smooth={true} duration={500} >
                        About
                        </Link>
                    </li>
                    <li className='mr-4 uppercase text-sm font-semibold'>
                        <Link to='skills' smooth={true} duration={500} >
                        Skills
                        </Link>
                    </li>
                    <li className='mr-4 uppercase text-sm font-semibold'>
                        <Link to='projects' smooth={true} duration={500} >
                        Projects
                        </Link>
                    </li>
                    <li className='uppercase text-sm font-semibold'>
                        <Link to='contact' smooth={true} duration={500} >
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10'>
                {nav ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={nav ? 'absolute top-20 md:top-24 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center' : 'hidden'}>
                <li className='py-6 text-1xl uppercase font-semibold'>Home</li>
                <li className='py-6 text-1xl uppercase font-semibold'>About</li>
                <li className='py-6 text-1xl uppercase font-semibold'>Skills</li>
                <li className='py-6 text-1xl uppercase font-semibold'>Projects</li>
                <li className='py-6 text-1xl uppercase font-semibold'>Contact</li>
            </ul>

            <div className= 'hidden lg:flex fixed md:top-[35%] left-0'>
                <ul>
                    <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 rounded-full bg-blue-600 rounded-1-none' >
                        <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                            Facebook <FaFacebook size={30}/>
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] flex justify-between mt-2 items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#333] rounded-1-none' >
                        <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] flex justify-between mt-2 items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-gray-900 rounded-1-none' >
                        <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                            Mail <FaMailBulk size={30}/>
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] flex justify-between mt-2 items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-pink-600 rounded-1-none' >
                        <a className=' flex justify-between items-center w-full text-gray-300' href="/">
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
