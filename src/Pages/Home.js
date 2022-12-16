import React from 'react';
import Banner from '../components/Banner';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { Helmet } from "react-helmet";
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Adnan | Home</title>
            </Helmet>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;