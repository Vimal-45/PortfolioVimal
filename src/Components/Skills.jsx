import React from 'react';
import boostsrap from '../assets/bootstrap.png'
import reactImg from '../assets/react.svg'
import css from '../assets/css.png'
import JS from '../assets/JS.png'
import htmlImg from '../assets/html.png'
import node from '../assets/nodejs.png'
import mongo from '../assets/mongodb.png'
import sql from '../assets/sql.png'
import tilewindcss from '../assets/tilewindcss.png'


const Skills = () => {
    return (
        <div name= 'skills' className=' w-full h-screen text-gray-300 skills' >
            <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className=' text-4xl font-bold inline border-b-4 border-teal-600' >Skills</p>
                    {/* <p> Your design portfolio contect should showcase your best work. 
                        Include and interactive prototype, a micro animation, a website in motion not just static designs. </p> */}
                </div>

                <div className=' w-full text-center py-8 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={htmlImg} alt="" />
                        <p className=' my-4'>HTML</p>                      
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={css} alt="" />
                        <p className=' my-4'>CSS</p>                      
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={JS} alt="" />
                        <p className=' my-4'>JavaScript</p>                      
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={boostsrap} alt="" />
                        <p className=' my-4'>Booststrap</p>                      
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={sql} alt="" />
                        <p className=' my-4'>SQL</p>                      
                    </div>
                    
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={reactImg} alt="" />
                        <p className=' my-4'>ReactJS</p>                      
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={node} alt="" />
                        <p className=' my-4'>NodeJS</p>                      
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={mongo} alt="" />
                        <p className=' my-4'>MongoDB</p>                      
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className=' w-20 mx-auto' src={tilewindcss} alt="" />
                        <p className=' my-4'>Tilewind CSS</p>                      
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Skills;