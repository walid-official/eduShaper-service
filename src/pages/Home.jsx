import React from 'react';
import Hero from '../components/Hero/Hero';
import Question from '../components/Questions/Question';
import Count from '../components/Count/Count';
import SinglePopularService from '../components/PopularServices/SinglePopularService';
import PopularService from '../components/PopularServices/PopularService';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularService></PopularService>
            <Count></Count>
            <Question></Question>
        </div>
    );
};

export default Home;