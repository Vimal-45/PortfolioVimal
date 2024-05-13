import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGithub, FaInstagram, FaMailBulk, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeComponent, setActiveComponent] = useState('home');

    const handleClick = () => {
        setNav(!nav);
    };

    const handleSetActiveComponent = (component) => {
        setActiveComponent(component);
    };

    return (
        <div className='fixed w-full h-20 md:h-14 flex justify-between items-center px-4 bg-[#08111e] text-gray-300'>
            <div>
                <h2 className='text-4xl text-blue-300'>
                    <Link to='home' smooth={true} duration={500} className="cursor-pointer" onClick={() => handleSetActiveComponent('home')}>
                        VIMAL D
                    </Link>
                </h2>
            </div>

            <div className='md:flex hidden'>
                <ul className='flex'>
                    <li className={`mr-4 uppercase text-sm font-semibold ${activeComponent === 'home' ? 'underlinefont-bold inline border-b-2 border-teal-400  text-gray-300' : ''}`}>
                        <Link to='home' smooth={true} duration={500} spy={true} onSetActive={() => handleSetActiveComponent('home')}>
                            Home
                        </Link>
                    </li>
                    <li className={`mr-4 uppercase text-sm font-semibold ${activeComponent === 'about' ? 'font-bold inline border-b-2 border-teal-400  text-gray-300' : ''}`}>
                        <Link to='about' smooth={true} duration={500} spy={true} onSetActive={() => handleSetActiveComponent('about')}>
                            About
                        </Link>
                    </li>
                    <li className={`mr-4 uppercase text-sm font-semibold ${activeComponent === 'skills' ? 'font-bold inline border-b-2 border-teal-400  text-gray-300' : ''}`}>
                        <Link to='skills' smooth={true} duration={500} spy={true} onSetActive={() => handleSetActiveComponent('skills')}>
                            Skills
                        </Link>
                    </li>
                    <li className={`mr-4 uppercase text-sm font-semibold ${activeComponent === 'projects' ? 'font-bold inline border-b-2 border-teal-400  text-gray-300' : ''}`}>
                        <Link to='projects' smooth={true} duration={500} spy={true} onSetActive={() => handleSetActiveComponent('projects')}>
                            Projects
                        </Link>
                    </li>
                    <li className={`uppercase text-sm font-semibold ${activeComponent === 'contact' ? 'font-bold inline border-b-2 border-teal-400  text-gray-300' : ''}`}>
                        <Link to='contact' smooth={true} duration={500} spy={true} onSetActive={() => handleSetActiveComponent('contact')}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10'>
                {nav ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <ul className={nav ? ' absolute top-20 md:top-24 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center' : 'hidden'}>
                <li className='py-6 text-1xl uppercase font-semibold'>
                    <Link to='home' smooth={true} duration={500} onClick={() => { handleSetActiveComponent('home'); setNav(false); }}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-1xl uppercase font-semibold'>
                    <Link to='about' smooth={true} duration={500} onClick={() => { handleSetActiveComponent('about'); setNav(false); }}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-1xl uppercase font-semibold'>
                    <Link to='skills' smooth={true} duration={500} onClick={() => { handleSetActiveComponent('skills'); setNav(false); }}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-1xl uppercase font-semibold'>
                    <Link to='projects' smooth={true} duration={500} onClick={() => { handleSetActiveComponent('projects'); setNav(false); }}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-1xl uppercase font-semibold'>
                    <Link to='contact' smooth={true} duration={500} onClick={() => { handleSetActiveComponent('contact'); setNav(false); }}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Links */}
            <div className='hidden lg:flex fixed md:top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px]  duration-300 rounded-full bg-blue-600 rounded-1-none'>
                        <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="https://www.facebook.com/vimal.don.16">
                            Facebook <FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between mt-2 items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-[#333] rounded-1-none'>
                        <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="https://github.com/Vimal-45">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between mt-2 items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-gray-900 rounded-1-none'>
                        <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="/">
                            Mail <FaMailBulk size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between mt-2 items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-full bg-pink-600 rounded-1-none'>
                        <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href="https://www.instagram.com/vimal_d92/">
                            Instagram <FaInstagram size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
