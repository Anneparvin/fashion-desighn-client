import React from 'react';
import Article from '../Article/Article';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet';
import PopularClass from '../PopularClass/PopularClass';
import PopInstructore from '../PopInstructore/PopInstructore';
import Team from '../Team/Team';
import Banner from '../Banner/Banner';
import TimeLine from '../TimeLine/TimeLine';
import Contact from '../Contact/Contact';
import Company from '../Company/Company';
import Offer from '../Offer/Offer';


const Home = () => {
    return (
        <div>
          <div>
          <Helmet>
                <title>Fashion Design | Home</title>
            </Helmet>
          </div>
          <Slider></Slider>
          <PopularClass></PopularClass> 
          <PopInstructore></PopInstructore>
          <Banner></Banner>
          <TimeLine></TimeLine>
          <Article></Article> 
          <Team></Team>
        <Contact></Contact>
        <Offer></Offer>
          <Company></Company>
        </div>
    );
};

export default Home;