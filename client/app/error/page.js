// pages/error.js

import React from 'react';

const ErrorPage = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-8">Oops! Something went wrong.</h1>
      <p className="text-lg mb-4">We apologize for the inconvenience. Please try again later.</p>
      <img
        src="https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Error Illustration"
        className="mx-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ErrorPage;
