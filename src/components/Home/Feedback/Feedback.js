import React from 'react';
import './FeedBack.css';
import imgs from './bg-subscribe.png';

const Feedback = () => {
  return (
    <div>
      <div class="container my-5">
        <div>
          <h1>Contact Us</h1>
        </div>
        <br />
        <div class="row d-flex align-items-center rounded">
          <div class="col-md-6 ">
            <img className="w-75" src={imgs} alt="" />
          </div>
          <br />
          <div class="col-md-6 bg-light rounded">
            <form class="my-form">
              <div class="form-group ">
                <label for="form-name">Name</label>
                <input
                  type="email"
                  class="form-control rounded"
                  id="form-name"
                />
              </div>
              <div class="form-group">
                <label for="form-email">Email Address</label>
                <input type="email" class="form-control" id="form-email" />
              </div>
              <div class="form-group">
                <label for="form-subject">Telephone</label>
                <input type="text" class="form-control" id="form-subject" />
              </div>
              <div class="form-group">
                <label for="form-message">Email your Message</label>
                <textarea class="form-control" id="form-message"></textarea>
              </div>
              <button class="btn btn-default" type="submit">
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
