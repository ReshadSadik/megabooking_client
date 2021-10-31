import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import './EventCard.css';

const EventCard = (props) => {
  const { users } = useAuth();
  const destination = props.destination;
  const handleUserDelete = props.handleUserDelete;
  const [destinations, setDestinations] = useState({});
  console.log(destination);

  useEffect(() => {
    fetch(`http://localhost:5000/events/${destination.destinationId}`)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="p-2 border border-5 m-2 rounded  ">
      <div>
        <div className=" mx-auto container">
          <div className="row d-flex align-items-center ">
            <div className="col-xl-3 col-12 d-flex align-items-center">
              <img
                className="rounded-circle w-25"
                src={users.photoURL}
                alt=""
              />
              <div>
                <h4>{users.displayName}</h4>
                <p className="m-0">{users.email}</p>
              </div>
            </div>
            <div
              className="col-xl-6 col-12 py-3 rounded"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${destinations.img})`,
              }}
            >
              <div className="">
                <h2 className="fs-2 text-white m-0">
                  {destinations.destination}
                </h2>
                <p className="text-white m-0">{destinations.description}</p>
              </div>
            </div>
            <div className="col-xl-3 col-12 ">
              <button
                className="rounded bg-danger text-white border-0 fw-bold p-2"
                onClick={() => handleUserDelete(destination._id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
