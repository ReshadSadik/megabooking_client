import React from 'react';

import './HomeCard.css';

const HomeCard = (props) => {
  const destination = props.destination;
  const handleDestination = props.handleDestination;
  return (
    <div>
      <div style={{ width: '300px' }}>
        <div className=" mx-auto container">
          <div className="col-xs-12 col-sm-12">
            <div
              className="card"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${destination.img})`,
              }}
            >
              <div className="card-category fs-3 ">
                {destination.destination}
              </div>
              <div className="card-description mb-3">
                <p className="fw-bold  ms-auto">{destination.description}</p>
              </div>
              <div className="cursor">
                <h2
                  onClick={() => handleDestination(destination._id)}
                  className="homecard-btn fs-5 p-2 bg-success mt-5"
                >
                  Book Now
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default HomeCard;
