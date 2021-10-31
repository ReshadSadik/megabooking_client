import React from 'react';

import Header from '../../shared/Header/Header';
import HomeCard from './HomeCard/HomeCard';

import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Pricing from './Pricing/Pricing';
import Feedback from './Feedback/Feedback';

const Home = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('https://glacial-spire-98135.herokuapp.com/destinations')
      .then((res) => res.json())

      .then((data) => setDestinations(data));
  }, []);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>

      {!destinations.length && (
        <div class="spinner-border mt-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="home-events mt-5 d-flex justify-content-center container  flex-wrap">
        {destinations.map((destination) => (
          <HomeCard key={destination._id} destination={destination}></HomeCard>
        ))}
      </div>

      <Pricing></Pricing>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
