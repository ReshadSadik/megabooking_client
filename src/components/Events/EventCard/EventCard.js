import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
  const destination = props.destination;
  const handleUserDelete = props.handleUserDelete;
  console.log(destination);

  return (
    <div className="p-2 bg-danger m-2 d-flex justify-content-center align-items-center">
      <div style={{ width: '600px' }}>
        <div className=" mx-auto container">
          <div className="col-xs-12 col-sm-12">
            <div
              className="event-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${destination.img})`,
              }}
            >
              <div className="card-description">
                <h2 className="fs-2">{destination.destination}</h2>
                <p>{destination.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>hi</h2>
      <button onClick={() => handleUserDelete(destination._id)}>X</button>
    </div>
  );
};

export default EventCard;
