import React from 'react';
import Hero from '../components/Hero/Hero';
import Question from '../components/Questions/Question';
import Count from '../components/Count/Count';
import PopularService from '../components/PopularServices/PopularService';
import SpecialService from '../components/SpecialServices/SpecialService';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularService></PopularService>
            <Count></Count>
            <SpecialService></SpecialService>
            <Question></Question>
        </div>
    );
};

export default Home;