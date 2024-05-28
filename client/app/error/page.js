import React from 'react';

const ErrorPage = () => {
  return (
    // Outer div covers the entire viewport, with the image set as a background
    <div
      className="mx-auto text-center min-h-screen flex flex-col justify-center"
      style={{
        paddingTop: '100px',
        backgroundImage: "url('https://images.pexels.com/photos/9063608/pexels-photo-9063608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundPosition: 'center', // Centers the background image
        backgroundSize: 'cover', // Ensures the image covers the full area of the div
        backgroundRepeat: 'no-repeat' // Prevents image from repeating
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-white">Oops! Something went wrong.</h1>
      <p className="text-lg mb-4 text-white">We apologize for the inconvenience. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
