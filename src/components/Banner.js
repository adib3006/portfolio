import Lottie from "lottie-react";
import React from 'react';
import code from '../assets/animation/coding.json';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-20">
            <div className='flex flex-col justify-center'>
                <p className='text-2xl mb-3 text-gray-800'>Welcome to my portfolio</p>
                <h2 className='text-4xl font-medium text-gray-800 mb-3'>I am Mirza Adnan</h2>
                <h2 className='text-4xl font-medium text-gray-800 h-24'>A <span>
                    <Typewriter
                        words={['Full Stack Developer 💻', 'Front-end Developer 💻', 'Web Developer 💻']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span></h2>

            </div>
            <div className='w-full lg:w-2/3'><Lottie animationData={code} loop={true}></Lottie></div>
        </div>
    );
};

export default Banner;