import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../shared/Header/Header';

const PlaceOrder = () => {
  const { placeOrderId } = useParams();
  const [singleDestination, setSingleDestination] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/destinations/${placeOrderId}`)
      .then((res) => res.json())
      .then((data) => setSingleDestination(data));
  }, {});
  return (
    <div>
      <Header></Header>
      <h2>{singleDestination.destination}</h2>
    </div>
  );
};

export default PlaceOrder;
