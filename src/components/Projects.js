import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import react from '../assets/icons/react.png';
import mongo from '../assets/icons/mongo.png';
import node from '../assets/icons/node.png';
import express from '../assets/icons/express.png';
import firebase from '../assets/icons/firebase.png';
import phone from '../assets/photos/phone-mart.PNG';
import cook from '../assets/photos/cook-book.PNG';
import course from '../assets/photos/course-zone.PNG';

const Projects = () => {
    return (
        <div id='menu' className='mt-20 mb-10'>
            <div className='text-center mb-6'>
                <h2 className="text-5xl font-semibold mb-5">My Projects</h2>
                <p className='mx-28'>Here are some of my projects</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-5'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img src={phone} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Phone Mart</h2>
                        <p className='text-xl font-semibold text-gray-700'>Smart Phone Resell Website</p>
                        <div className='flex items-center justify-start'>
                            <p className='text-lg font-semibold'>Built using:</p>
                            <img className="w-10 mr-3" src={react} alt="" data-tip="React.js" />
                            <img className="w-10 mr-3" src={mongo} alt="" data-tip="MongoDB" />
                            <img className="w-10 mr-3" src={node} alt="" data-tip="Node.js" />
                            <img className="w-10 mr-3" src={express} alt="" data-tip="Express.js" />
                            <img className="w-10 mr-3" src={firebase} alt="" data-tip="Firebase" />
                            <ReactTooltip />
                        </div>
                        <p className='text-center text-lg font-semibold text-sky-700 mb-5'>
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://phone-mart-392a9.web.app/">Live Site</a> |
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006/phone-mart-client"> GitHub Client</a> |
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006/phone-mart-server"> GitHub Server</a>
                        </p>
                        <Link className='btn' to='/project/01'>See Details</Link>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img src={cook} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Cook Book</h2>
                        <p className='text-xl font-semibold text-gray-700'>Cloud Kitchen</p>
                        <div className='flex items-center'>
                            <p className='text-lg font-semibold'>Built using:</p>
                            <img className="w-10 mr-3" src={react} alt="" data-tip="React.js" />
                            <img className="w-10 mr-3" src={mongo} alt="" data-tip="MongoDB" />
                            <img className="w-10 mr-3" src={node} alt="" data-tip="Node.js" />
                            <img className="w-10 mr-3" src={express} alt="" data-tip="Express.js" />
                            <img className="w-10 mr-3" src={firebase} alt="" data-tip="Firebase" />
                            <ReactTooltip />
                        </div>
                        <p className='text-center text-lg font-semibold text-sky-700 mb-5'>
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://cook-book-bd83d.web.app/">Live Site</a> |
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006/cook-book-client"> GitHub Client</a> |
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006/cook-book-server"> GitHub Server</a>
                        </p>
                        <Link className='btn' to='/project/02'>See Details</Link>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img src={course} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Course Zone</h2>
                        <p className='text-xl font-semibold text-gray-700'>Educational Website</p>
                        <div className='flex items-center'>
                            <p className='text-lg font-semibold'>Built using:</p>
                            <img className="w-10 mr-3" src={react} alt="" data-tip="React.js" />
                            <img className="w-10 mr-3" src={node} alt="" data-tip="Node.js" />
                            <img className="w-10 mr-3" src={express} alt="" data-tip="Express.js" />
                            <img className="w-10 mr-3" src={firebase} alt="" data-tip="Firebase" />
                            <ReactTooltip />
                        </div>
                        <p className='text-center text-lg font-semibold text-sky-700 mb-5'>
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://course-zone.web.app/">Live Site</a> |
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006/course-zone-client"> GitHub Client</a> |
                            <a className='hover:underline' target="_blank" rel='noreferrer' href="https://github.com/adib3006/course-zone-server"> GitHub Server</a>
                        </p>
                        <Link className='btn' to='/project/03'>See Details</Link>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-5'>
                <Link to='/projects'>
                    <button className="btn btn-outline">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Projects;