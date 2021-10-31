import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { googleSignIn } = useAuth();

  let history = useHistory();
  let location = useLocation();
  const redirectUrl = location.state?.from || '/';

  // sign In using google popup
  const handleGoogleRedirect = () => {
    googleSignIn().then((result) => {
      history.push(redirectUrl);
    });
  };

  return (
    <div className="">
      <div className="flex mt-5  d-flex justify-content-center align-items-center ">
        <div id="gSignInWrapper">
          <div
            onClick={handleGoogleRedirect}
            id="customBtn"
            class="customGPlusSignIn"
          >
            <span class="icon"></span>
            <span class="buttonText">Google Sign In</span>
          </div>
        </div>
        <div id="name"></div>
        <Link to="/home">
          <button className="bg-danger border-0 text-white fw-bold rounded mx-4 ">
            {' '}
            X{' '}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
