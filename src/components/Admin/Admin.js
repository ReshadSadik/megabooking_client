import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../../shared/Header/Header';

const Admin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch('https://glacial-spire-98135.herokuapp.com/destination', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div>
      <Header></Header>
      <div className="mt-5">
        <h2>add new destination</h2>

        <form
          className="mx-auto"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="bg-light px-3 py-2 w-25  border-2 border my-3"
            Placeholder="destination"
            {...register('destination', { required: true })}
          />
          <br />
          <input
            className="bg-light px-3 py-2 w-25  border-2 border my-3"
            Placeholder="Description"
            {...register('description', { required: true })}
          />
          <br />
          <input
            className="bg-light px-3 py-2 w-25  border-2 border my-3"
            type="text"
            Placeholder="image url"
            {...register('img', { required: true })}
          />
          <br />
          <input
            className="w-25 p-3 bg-success text-white fw-bold"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};
export default Admin;
