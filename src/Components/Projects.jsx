import React from "react";
import jobquest from '../assets/jobquest.jpg'
import dress from '../assets/dress.webp'

const Projects = () => {
  return (
    <div name="projects" className=" w-full h-screen projects text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text gray-300 border-teal-600">
            
            Projects
          </p>
          <p className=" py-6"> Please Check out some of my projects</p>
        </div>

            <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div style={{backgroundImage: `url(${jobquest})`}} className=" shadow-lg shadow-[#0d0e0f] group  hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
                   <div className=" opacity-0 text-center group-hover:opacity-100">

                        <span className=" font-bold text-white tracking-wider uppercase" > Interview Questions </span>
                        <div className=" pt-6 text-center" >
                            <a href="/">
                                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> Source Code</button>
                            </a>
                        </div>
                   </div>
                </div>
                <div style={{backgroundImage: `url(${dress})`}} className=" shadow-lg shadow-[#0d0e0f] group  hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
                   <div className=" opacity-0 text-center group-hover:opacity-100">

                        <span className=" font-bold text-white tracking-wider uppercase" > Dress Color Suggestion </span>
                        <div className=" pt-6 text-center" >
                            <a href="/">
                                <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> Source Code</button>
                            </a>
                        </div>
                   </div>
                </div>
            </div>

      </div>
    </div>
  );
};

export default Projects;
