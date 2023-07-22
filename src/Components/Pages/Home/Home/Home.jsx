import React from 'react';
import Article from '../Article/Article';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet';
import PopularClass from '../PopularClass/PopularClass';
import PopInstructore from '../PopInstructore/PopInstructore';

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
          <Article></Article> 
        
        </div>
    );
};

export default Home;