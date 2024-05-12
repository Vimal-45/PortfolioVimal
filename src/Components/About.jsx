import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full  text-gray-300 h-screen about">
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className=" sm:text-right pb-8 pl-4">
            <p className=" text-4xl font-bold inline border-b-4 border-teal-600">
              About
            </p>
          </div>
     
        </div>
        <div className=" max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className=" sm:text-right text-4xl font-bold">
              <p>
                Hi, I'm Vimal D, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                Am completed Diploma in Electronic communication engg at
                Perambalur, I have 10 year and above non IT experience with two
                different domain, and am currently working in BPO service
                company as my designation is AR Executive. Recently I completed
                MERN/Full stack development at GUVI which is a IIT madras
                incubated company, There I did 2 projects using tech React,
                NodeJs and mongo DB. My skills are JavaScript, HTML& CSS, React,
                Nodejs and mongo DB. My goal is to build a successful career as
                a web designer or software programm
              </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
