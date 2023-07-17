import React from 'react';
import Article from '../Article/Article';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
          <div>
          <Helmet>
                <title>Fashion Design | Home</title>
            </Helmet>
          </div>
          <Slider></Slider>
          <Article></Article>  
        </div>
    );
};

export default Home;