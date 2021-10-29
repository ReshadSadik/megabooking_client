import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../../shared/Header/Header';
import HomeCard from '../Home/HomeCard/HomeCard';
import EventCard from './EventCard/EventCard';

const Events = () => {
  const { users } = useAuth();
  const [userDestinations, setUserDestinations] = useState([]);
  // const [isTrue, setIsTrue] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/user/destinations/${users.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDestinations(data);
      });
  }, []);
  // console.log(userEvent);
  return (
    <div>
      <Header></Header>

      <h2> {users.email} events</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {userDestinations.map((destination) => (
          <EventCard
            key={destination._id}
            destination={destination}
          ></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
