import React from "react";
import jobquest from '../assets/jobquest.jpg'
import dress from '../assets/dress.webp'
import meals from '../assets/meals.webp'
import notes from '../assets/notes.webp'
import passwordreset from '../assets/passwordreset.jpg'

const Projects = () => {
  return (
    <div name="projects" className=" w-full h-auto projects text-gray-300">
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" mt-14 pb-8">
          <p className=" text-4xl font-bold inline border-b-4 text  gray-300 border-teal-600">

            Projects
          </p>
          <p className=" py-6"> Please Check out some of my projects</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <a href="https://job-questions.vercel.app/signin" target="_blank" rel="noopener noreferrer">
            <div style={{ backgroundImage: `url(${jobquest})` }} className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
              <div className="opacity-0 text-center group-hover:opacity-100">
                <span className="font-bold text-white tracking-wider uppercase text-lg">
                  Interview  Questions
                </span>
                <div className="pt-6 text-center">
                  <a target="_blank" href="https://github.com/Vimal-45/JobQuestions.git">
                    <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> FrontEndCode</button>
                  </a>
                  <a target="_blank" href="https://github.com/Vimal-45/JobQuest.git">
                    <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full mt-2 px-6 bg-white text-gray-700 font-bold"> BackEndCode</button>
                  </a>
                </div>
              </div>
            </div>
          </a>
          <a href="https://project-name-frontend-six.vercel.app/signin" target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${dress})` }} className=" shadow-lg shadow-[#0d0e0f] group  hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
            <div className=" opacity-0 text-center group-hover:opacity-100">

              <span className=" font-bold text-white tracking-wider uppercase inset-0 flex justify-center items-center text-lg" > Dress Color Suggestion </span>
              <div className=" pt-6 text-center" >
                <a target="_blank" href="https://github.com/Vimal-45/project-name-frontend.git">
                  <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> FrontEndCode</button>
                </a>
                <a target="_blank" href="https://github.com/Vimal-45/project-name-backend.git">
                  <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full mt-2 px-6 bg-white text-gray-700 font-bold"> BackEndCode</button>
                </a>
              </div>
            </div>
          </div>
          </a>
          
          <a href="https://password-reset-peach.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${passwordreset})` }} className=" shadow-lg shadow-[#0d0e0f] group  hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
            <div className=" opacity-0 text-center group-hover:opacity-100">

              <span className=" font-bold text-white tracking-wider uppercase inset-0 flex justify-center items-center text-lg" > Password Rest </span>
              <div className=" pt-6 text-center" >
                <a target="_blank" href="https://github.com/Vimal-45/Front-end-password-reset.git">
                  <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> FrontEndCode</button>
                </a>
                <a target="_blank" href="https://github.com/Vimal-45/back-end-password-reset.git">
                  <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full mt-2 px-6 bg-white text-gray-700 font-bold"> BackEndCode</button>
                </a>
              </div>
            </div>
          </div>
          </a>

          <a href="https://meals-db-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${meals})` }} className=" shadow-lg shadow-[#0d0e0f] group  hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
            <div className=" opacity-0 text-center group-hover:opacity-100">

              <span className=" font-bold text-white tracking-wider uppercase inset-0 flex justify-center items-center text-lg" > Meals  </span>
              <div className=" pt-6 text-center" >
                <a target="_blank" href="https://github.com/Vimal-45/MealsDB.git">
                  <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> Source Code</button>
                </a>
             
              </div>
            </div>
          </div>
          </a>
          <a href="https://task6-7crv.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${notes})` }} className=" shadow-lg shadow-[#0d0e0f] group  hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
            <div className=" opacity-0 text-center group-hover:opacity-100">

              <span className=" font-bold text-white tracking-wider uppercase inset-0 flex justify-center items-center text-lg" > Notes APP using Contaxt API  </span>
              <div className=" pt-6 text-center" >
                <a target="_blank" href="https://github.com/Vimal-45/Task6.git">
                  <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> Source Code</button>
                </a>
             
              </div>
            </div>
          </div>
          </a>
          <a href="https://task7-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
          <div style={{ backgroundImage: `url(${notes})` }} className=" shadow-lg shadow-[#0d0e0f] group  hover:scale-110 duration-500 container rounded-full flex justify-center items-center mx-auto content-div">
            <div className=" opacity-0 text-center group-hover:opacity-100">

              <span className=" font-bold text-white tracking-wider uppercase inset-0 flex justify-center items-center text-lg" > Notes APP using REDUX  </span>
              <div className=" pt-6 text-center" >
                <a target="_blank" href="https://github.com/Vimal-45/Task7.git">
                  <button className="text-center hover:scale-110 duration-500 opacity-70 rounded-full px-6 bg-white text-gray-700 font-bold"> Source Code</button>
                </a>
             
              </div>
            </div>
          </div>
          </a>
       

        </div>

      </div>
    </div>
  );
};

export default Projects;
