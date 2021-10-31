import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const NewEventCard = (props) => {
  const { users } = useAuth();
  const destination = props.destination;
  const handleUserDelete = props.handleUserDelete;
  const [destinations, setDestinations] = useState({});

  const handlePending = (id) => {
    fetch(`https://glacial-spire-98135.herokuapp.com/handlePending/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  };

  useEffect(() => {
    fetch(
      `https://glacial-spire-98135.herokuapp.com/events/${destination.destinationId}`
    )
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
                src={destination.photoURL}
                alt=""
              />
              <div>
                <h4>{destination.fullName}</h4>
                <p className="my-xl-0 my-3">{destination.email}</p>
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
            <div className="col-xl-3 col-12 d-flex  align-items-center justify-content-center ">
              <button
                onClick={() => {
                  handlePending(destination._id);
                }}
                className="border cursor-pointer ms-3 m-0 border-2 bg-success text-white border-success rounded px-3 py-1 my-2"
              >
                {destination.status}
              </button>
              <button
                className="rounded bg-danger text-white border-0 fw-bold px-4 px-xl-2 mt-2 mt-xl-0 mx-5"
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

export default NewEventCard;
