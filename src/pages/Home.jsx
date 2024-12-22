import React from 'react';
import Hero from '../components/Hero/Hero';
import Question from '../components/Questions/Question';
import Count from '../components/Count/Count';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Count></Count>
            <Question></Question>
        </div>
    );
};

export default Home;