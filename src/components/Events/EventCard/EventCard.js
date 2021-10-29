import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
  const destination = props.destination;
  console.log(destination);

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
              {/* <div className="card-category">{destination.destination}</div> */}
              <div className="card-description">
                <h2 className="fs-2">{destination.destination}</h2>
                <p>{destination.description}</p>
              </div>
              {/* <img
                className="card-user avatar avatar-large"
                src="https://github.com/lewagon/bootstrap-challenges/blob/master/11-Airbnb-search-form/images/anne.jpg?raw=true"
              /> */}
              {/* <a className="card-link" href="/"></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
