import React from 'react';
import imgs from './banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <h1
          className="d-flex  banner-text text-white justify-content-center  
        align-items-center h-100"
        >
          Worlds best <br /> online booking solution
        </h1>
      </div>
    </div>
  );
};

export default Banner;
