import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../shared/Header/Header';
import NewEventCard from './NewEventCard/NewEventCard';

const ManageBooking = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [isTrue, setIsTrue] = useState(1);

  const handleUserDelete = (id) => {
    var result = window.confirm(
      'are you sure you want to delete this destination?'
    );
    if (result) {
      //Logic to delete the item

      fetch(`https://glacial-spire-98135.herokuapp.com/userDestination/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          setIsTrue(isTrue + 1);
          alert('destination deleted');
        });
    }
  };

  useEffect(() => {
    fetch('https://glacial-spire-98135.herokuapp.com/allusers')
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [isTrue]);

  console.log(allBookings);
  return (
    <div>
      <Header></Header>
      {allBookings.map((destination) => (
        <NewEventCard
          key={destination._id}
          handleUserDelete={handleUserDelete}
          destination={destination}
        ></NewEventCard>
      ))}
    </div>
  );
};

export default ManageBooking;
