import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../shared/Header/Header';
import HomeCard from './HomeCard/HomeCard';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
  const { users } = useAuth();
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch('https://glacial-spire-98135.herokuapp.com/destinations')
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div>
      <Header></Header>

      <div className="text-center py-5">
        <h2 className="fw-bold text-uppercase">
          i grow by helping people in need
        </h2>
        <div className="container my-5  w-20 d-flex w-25">
          <Form.Control placeholder="Search for any event" />
          <button type="button" className="btn btn-warning  ">
            <svg width="15px" height="15px">
              <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="home-events d-flex justify-content-center container  flex-wrap">
        {destinations.map((destination) => (
          <HomeCard key={destination._id} destination={destination}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
