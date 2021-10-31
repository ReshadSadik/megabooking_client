import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Header from '../../shared/Header/Header';
import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';
const PlaceOrder = () => {
  const { users } = useAuth();
  const { placeOrderId } = useParams();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [singleDestination, setSingleDestination] = useState({});
  const onSubmit = (data) => {
    const userInfo = {
      email: users.email,
      fullName: users.displayName,
      destinationId: placeOrderId,
      userData: data,
    };

    fetch(`http://localhost:5000/newdestination`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert('destination added successfully');
          reset();
        }
      });

    // setData(data);
  };

  useEffect(() => {
    fetch(
      `https://glacial-spire-98135.herokuapp.com/destinations/${placeOrderId}`
    )
      .then((res) => res.json())
      .then((data) => setSingleDestination(data));
  }, []);
  return (
    <div>
      <Header></Header>

      <div class="container  ">
        <div
          class="row login_box rounded"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${singleDestination.img})`,
            backgroundSize: 'cover',
          }}
        >
          <div class="col-md-12 col-xs-12" align="center">
            <div class="line ">{/* <h3>12 : 30 AM</h3> */}</div>
            <div class="outter"></div>
            <h1 className="text-white ">{singleDestination.destination}</h1>
          </div>
          <div class="col-md-6 col-xs-6 follow line" align="center">
            <h4 className="text-white mt-0 mt-xl-4">
              {singleDestination.description}
            </h4>
          </div>

          <div class="col-md-12  col-xs-12 login_control">
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group row my-3">
                <label
                  for="email_address"
                  class="col-md-4 text-white text-md-right"
                >
                  Full Name
                </label>
                <div class="col-md-6">
                  <input
                    value={users.displayName}
                    readOnly
                    type="text"
                    id="email_address"
                    name="email-address"
                    required
                    autofocus
                  />
                </div>
              </div>
              <div class="form-group row my-3">
                <label
                  for="email_address"
                  class="col-md-4  text-md-right text-white"
                >
                  E-Mail Address
                </label>
                <div class="col-md-6">
                  <input
                    value={users.email}
                    readOnly
                    type="text"
                    id="email_address"
                    name="email-address"
                    required
                    autofocus
                  />
                </div>
              </div>

              <div class="form-group row my-3">
                <label for="phone" class="col-md-4 text-white text-md-right">
                  Phone
                </label>
                <div class="col-md-6">
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    required
                    {...register('phone')}
                  />
                </div>
              </div>
              <div class="form-group row my-3">
                <label for="adress" class="col-md-4  text-white text-md-right">
                  Adress
                </label>
                <div class="col-md-6">
                  <input
                    type="text"
                    id="adress"
                    name="adress"
                    required
                    {...register('adress')}
                  />
                </div>
              </div>
              <input
                className="bg-warning  p-2 fw-bold"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
