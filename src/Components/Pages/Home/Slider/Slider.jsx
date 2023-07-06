import React from 'react';
import slider1 from '../../../../assets/images/slider/photo-1558303522-d7a2bdfdbd82.avif';
import slider2 from '../../../../assets/images/slider/premium_photo-1658506943767-4cdc681e7fbf.avif';
import slider3 from '../../../../assets/images/slider/premium_photo-1663013422122-0464b0924dc0.avif';
import slider4 from '../../../../assets/images/slider/premium_photo-1676586309422-ddc2c06a6fdd.avif';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider1} className="w-full" />
    <div className='absolute p-2'>
        <h1 className='font-bold text-left text-4xl text-lime-800'>The fashion design blog</h1>
    <p className='text-xl font-bold text-left  text-black'>The fashion design blog for people wanting a career<br/> in the fashion industry. We provide you with inspirational content, helpful tips and ...</p>
    <input className='btn bg-green-700 p-4 btn-wide w-full font-bold' value='Join Us..'/>
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2} className="w-full" />
    <div className='absolute p-2'>
        <h1 className='font-bold text-left text-4xl text-lime-800'>The fashion design blog</h1>
    <p className='text-xl font-bold text-left  text-black'>The fashion design blog for people wanting a career<br/> in the fashion industry. We provide you with inspirational content, helpful tips and ...</p>
    <input className='btn bg-green-700 p-4 btn-wide w-full font-bold' value='Join Us..'/>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='absolute p-2'>
        <h1 className='font-bold text-left text-4xl text-lime-800'>The fashion design blog</h1>
    <p className='text-xl font-bold text-left  text-black'>The fashion design blog for people wanting a career<br/> in the fashion industry. We provide you with inspirational content, helpful tips and ...</p>
    <input className='btn bg-green-700 p-4 btn-wide w-full font-bold' value='Join Us..'/>
    </div>
    <img src={slider3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider4} className="w-full" />
    <div className='absolute p-2'>
        <h1 className='font-bold text-left text-4xl text-lime-800'>The fashion design blog</h1>
    <p className='text-xl font-bold text-left  text-black'>The fashion design blog for people wanting a career<br/> in the fashion industry. We provide you with inspirational content, helpful tips and ...</p>
    <input className='btn bg-green-700 p-4 btn-wide w-full font-bold' value='Join Us..'/>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;