import React from "react";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
import VimalResume from '../assets/VimalResume.pdf'
import { Link } from 'react-scroll';



const Home = () => {


    const handleDownload = () => {
 
        const link = document.createElement('a');   
        link.href = VimalResume;
        link.download = 'VimalResume.pdf';       
        document.body.appendChild(link);       
        link.click();    
        document.body.removeChild(link);
      };


  return (
    <div name="home" className=" w-full h-screen banner">
      <div className="max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center">
        <p className=" text-[#ececec]"> Hi, My name is </p>
        <h1 className=" text-4xl sm:text-7xl text-[#ececec] font-bold">
          Vimal D
        </h1>
        <h2 className=" text-4xl sm:text-7xl text-[#ececec] font-bold">
          {" "}
          I'm a Full Stack Developer
        </h2>
        <p className=" text-[#ececec] py-4 max-w-[700px]">
          A full stack web developer is a person who can devlop both client and
          servcer software. In addition to mastering HTML and CSS Currently, I'm
          focused on building responsive full-stack web application.
        </p>
        <div className="flex  justify-start">
          <Link to='projects' smooth={true} duration={500}className=" bg-teal-600  text-white flex rounded-full border-2 px-6 py-3 my-2 group items-center hover:bg-teal-600 hover:border-teal-600">
            View Projects{" "}
            <span className=" duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
          <button onClick={handleDownload} className="  bg-blue-500  text-white flex rounded-full border-2 px-6 py-3 my-2 group items-center hover:bg-blue-600 hover:border-teal-600">
            Download CV{" "}
            <span className=" duration-300">
              <HiArrowNarrowDown className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
