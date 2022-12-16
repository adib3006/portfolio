import React from 'react';
import htmlpic from '../assets/icons/html.png';
import css from '../assets/icons/css.png';
import react from '../assets/icons/react.png';
import mongo from '../assets/icons/mongo.png';
import node from '../assets/icons/node.png';
import express from '../assets/icons/express.png';
import firebase from '../assets/icons/firebase.png';
import right from '../assets/icons/right.jpg';

const Skills = () => {
    return (
        <div className='mb-10'>
            <h1 className="text-center text-4xl font-bold text-gray-700 py-5">I work with</h1>
            <div className="grid grid-cols-1 px-20">
                <div>
                    <div className='flex flex-wrap items-center justify-center mb-10'>
                        <img className="w-16 mr-3" src={htmlpic} alt="" />
                        <img className="w-16 mr-3" src={css} alt="" />
                        <img className="w-16 mr-3" src={react} alt="" />
                        <img className="w-16 mr-3" src={mongo} alt="" />
                        <img className="w-16 mr-3" src={node} alt="" />
                        <img className="w-16 mr-3" src={express} alt="" />
                        <img className="w-16 mr-3" src={firebase} alt="" />
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Building Responsive Websites using React</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Using NoSQL databases for better and seamless experience</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 mr-2" src={right} alt="" />
                        <p className="text-xl font-semibold">Creating APIs using Node.js and Express.js</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;