import React from 'react';
import { useState } from 'react';
import Header from '../../shared/Header/Header';

const ManageBooking = () => {
  const [allBookings, setAllBookings] = useState([]);

  return (
    <div>
      <Header></Header>
      <h2>manage</h2>
    </div>
  );
};

export default ManageBooking;
