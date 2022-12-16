import React from 'react';
import { Helmet } from 'react-helmet';
import picture from '../assets/photos/mirza adnan.jpg';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Adnan | About Me</title>
            </Helmet>
            <h1 className='text-center font-bold text-4xl text-gray-700'>About Me</h1>
            <div>
            <div className='w-2/3 my-10 mx-auto flex flex-col justify-center items-center rounded shadow-xl'>
                <img src={picture} alt="" className='rounded-2xl mb-10 w-2/3 lg:w-1/2'/>
                <h2 className='text-center text-5xl font-bold text-gray-700 mb-5'>Mirza Adnan</h2>
                <p className='text-center text-xl font-semibold text-gray-700 mb-5'>Full stack web developer | Front-end Engineer</p>
                <p className='text-center text-xl font-semibold text-gray-700'><a href="mailto:ma.adib3006@gmail.com">ma.adib3006@gmail.com</a></p>
                <p className='text-xl font-semibold text-gray-700 m-5'>I am Mirza Adnan. I have recently completed by B.Sc in Computer Science Engineering (DIU). I’ve always been passionate about technology and following my passion I am pursued my bachelor’s degree in computer science. I’m a fast learner and love to learn new technologies regularly. Problem solving is my core interest. Developing new skill set is one of my career goals. I’ve been involved in competitive programming, web development, Android and Desktop app development and currently I’m working on Web development. I always try to learn new things while working in any project.</p>
                <p className='text-center underline text-xl font-semibold text-gray-700 mb-2'>Connect Me On</p>
                <p className='text-center text-xl font-semibold text-sky-700 mb-5'>
                    <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006">Github</a> | 
                    <a className='hover:underline' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/mirza-adnan-310b81184/"> LinkedIn</a> | 
                    <a className='hover:underline' target="_blank" rel='noreferrer' href="https://sites.google.com/diu.edu.bd/mirza-adnan/home"> Google Site</a></p>
            </div>
        </div>
        </div>
    );
};

export default About;