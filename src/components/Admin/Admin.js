import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

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
      <h2>admin</h2>

      <div>
        <h2>add event</h2>

        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <input
            Placeholder="destination"
            {...register('destination', { required: true })}
          />
          <input
            Placeholder="Description"
            {...register('description', { required: true })}
          />
          <input
            type="text"
            Placeholder="image url"
            {...register('img', { required: true })}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
export default Admin;
