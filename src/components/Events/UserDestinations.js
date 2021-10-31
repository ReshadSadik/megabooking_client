import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../../shared/Header/Header';
import EventCard from './EventCard/EventCard';

const UserDestinations = () => {
  const { users } = useAuth();
  const [userDestinations, setUserDestinations] = useState([]);
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
    fetch(
      `https://glacial-spire-98135.herokuapp.com/user/destinations/${users.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserDestinations(data);
      });
  }, [isTrue]);

  return (
    <div>
      <Header></Header>

      <div className="container mt-5">
        {userDestinations.map((destination) => (
          <EventCard
            key={destination._id}
            handleUserDelete={handleUserDelete}
            destination={destination}
          ></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UserDestinations;
