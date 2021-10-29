import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const { googleSignIn } = useAuth();
  return (
    <div>
      <Link to="/register">
        <div className="xl:mt-20 mt-0 flex items-center">
          <div className=" xl:w-1/3 h-1/4   mx-auto   m-10">
            <Link to="/home">
              <div className="text-black font-bold text-center border-2 w-10 ml-auto">
                X
              </div>
            </Link>
            <div className="xl:p-12 p-5">
              <p className="xl:text-5xl text-3xl text-center pt-10 text-yellow-500 font-bold">
                Registration Form
              </p>
              <p className="text-xl text-center py-3 text-gray-400 font-semibold">
                Sign up Now
              </p>
            </div>
            <div className="mx-5 p-3 pb-10 rounded-xl  ">
              <div className="p-3 mx-6 border-b border-gray-500">
                <input
                  placeholder="Full Name"
                  className="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang"
                  type="text"
                />
              </div>
              <div className="p-3 mx-6 border-b border-gray-500">
                <input
                  placeholder="Email"
                  className="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang"
                  type="tel"
                />
              </div>
              <div className="p-3 mx-6 border-b border-gray-500">
                <input
                  placeholder="Phone Number"
                  className="bg-transparent text-yellow-500 w-full focus:outline-none focus:rang"
                  type="tel"
                />
              </div>

              <div className="p-3 mx-6 flex border-b border-gray-500">
                <input
                  placeholder="Password"
                  className="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full"
                  type="password"
                />
                <div className="w-auto text-yellow-500">eyes</div>
              </div>
              <div className="p-3 mx-6 flex border-b border-gray-500">
                <input
                  placeholder="Confirm Password"
                  className="bg-transparent text-yellow-500 focus:outline-none focus:rang w-full"
                  type="password"
                />
                <div className="w-auto text-yellow-500">eyes</div>
              </div>
            </div>
            <div className="mx-12 p-3 justify-between flex">
              <div className="flex">
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-gray-800 border-4 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-6 rounded-full bg-yellow-500 cursor-pointer"
                  ></label>
                </div>
                <label
                  htmlFor="toggle"
                  className="text-xs text-gray-500 font-bold mt-1"
                >
                  remeber me
                </label>
              </div>
              <div className="bg mt-1 text-xs text-gray-500 font-bold">
                <a href="/">forget password?</a>
              </div>
            </div>
            <div className="w-full p-12">
              <button className=" bg-yellow-500 xl:p-3 p-1 rounded-3xl w-full h-full hover:bg-yellow-600">
                {' '}
                Sign up
              </button>
              <p className="mx-auto text-center mt-3 text-gray-400">
                already have an account?{' '}
                <Link to="/login" className="text-md text-black font-semibold">
                  Log In
                </Link>{' '}
              </p>
              <div className="flex mt-5 mx-auto">
                <button
                  onClick={googleSignIn}
                  className="bg-yellow-500 xl:mx-5 mx-1   xl:px-5 px-3 rounded-3xl  h-8 xl:h-10 text-sm hover:bg-yellow-600 mb-5"
                >
                  google sign up
                </button>
                <button className="bg-yellow-500 xl:mx-5 mx-1  xl:px-5 px-3 rounded-3xl  h-8 xl:h-10 text-sm hover:bg-yellow-600 mb-5">
                  facebook sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Register;
