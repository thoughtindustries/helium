import React, { useState } from 'react';
import Logo from '../Logo/Logo';

const SigninPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const signInHandler = e => {
    console.log('Login Mutation Here');
    e.preventDefault();
    (document.getElementById('Email') as HTMLInputElement).value = '';
    (document.getElementById('Password') as HTMLInputElement).value = '';
  };

  return (
    <div className="flex flex-col items-center py-12 px-8 space-y-4">
      {/* logo component */}
      <Logo size="large" />
      {/* heading */}
      <div className="text-3xl font-bold font-secondary">Sign into your account</div>
      {/* Card Element */}
      <div className="p-8 bg-white rounded-md space-y-6 font-primary sm:w-96">
        {/* sign in button */}
        <form onSubmit={signInHandler} className="space-y-6">
          {/* field 1 */}
          <div>
            <label className="text-sm font-semibold text-left">Email address</label>
            <input
              type="email"
              id="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={e => setUserEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="text-sm font-semibold text-left">Password</label>
            <input
              type="password"
              id="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={e => setUserPassword(e.target.value)}
            ></input>
          </div>
          <button
            type="submit"
            className="h-12 p-2.5 px-4 bg-indigo-800 hover:bg-blue-500 rounded-md w-full"
          >
            <div className="text-sm font-semibold text-white">Sign in</div>
          </button>
        </form>
        <a href="/learn/forget" className="items-center">
          <button
            type="submit"
            className="p-8 w-full text-indigo-800 hover:text-blue-500 text-center font-semibold justify-center"
          >
            Forgot Password
          </button>
        </a>
      </div>
    </div>
  );
};

export default SigninPage;
