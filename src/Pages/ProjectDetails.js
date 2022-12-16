import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = data.find(p => p.id === id);
    console.log(project);
    const { title, image1, image2, image3, description, siteLink, githubClient, githubServer } = project;
    return (
        <div>
            {project?.id ?
                <div>
                    <h1 className='text-center text-4xl font-semibold my-10'>{title}</h1>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-5'>
                        <img className='rounded p-3' src={image1} alt="" />
                        <img className='rounded p-3' src={image2} alt="" />
                        <img className='rounded p-3' src={image3} alt="" />
                    </div>
                    <p className='text-xl font-semibold my-5'>description: {description}</p>
                    <p className='text-center text-lg font-semibold text-sky-700 my-5'>
                        <a className='hover:underline' target="_blank" rel='noreferrer' href={siteLink}>Live Site</a> |
                        <a className='hover:underline' target="_blank" rel='noreferrer' href={githubClient}> GitHub Client</a> |
                        {githubServer && <a className='hover:underline' target="_blank" rel='noreferrer' href={githubServer}> GitHub Server</a>}
                    </p>
                </div>
                :
                <p>Loading...</p>}
        </div>
    );
};

export default ProjectDetails;