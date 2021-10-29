import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../../shared/Header/Header';
import EventCard from './EventCard/EventCard';

const UserDestinations = () => {
  const { users } = useAuth();
  const [userDestinations, setUserDestinations] = useState([]);
  // const [isTrue, setIsTrue] = useState(1);
  const handleUserDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/userDestination/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        alert('destination deleted');
      });
  };
  useEffect(() => {
    fetch(
      `https://glacial-spire-98135.herokuapp.com/user/destinations/${users.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserDestinations(data);
      });
  }, []);
  return (
    <div>
      <Header></Header>

      <h2> {users.email} events</h2>
      <div className="container ">
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
