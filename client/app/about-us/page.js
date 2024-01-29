// pages/about.js

import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">About Decentralized Agriculture Insurance</h1>

   
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p>
          Welcome to our innovative project, Decentralized Agriculture Insurance. Our platform offers farmers a decentralized solution to protect their agricultural investments against unforeseen weather events. Through smart contracts, we guarantee timely payments if weather conditions adversely affect crop yields.
        </p>
        <img src="https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project Showcase" className="my-4 rounded-lg shadow-lg" />
      </div>

  
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
        <p>
          We leverage cutting-edge blockchain technology and smart contracts to create a transparent and secure insurance platform. Our tech stack includes Ethereum for smart contract development, Solidity for programming smart contracts, and React.js for the frontend interface.
        </p>
        <img src="https://images.pexels.com/photos/5561317/pexels-photo-5561317.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Technology Stack Showcase" className="my-4 rounded-lg shadow-lg" />
      </div>

      {/* Our Team */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p>
          Meet the dedicated team behind Decentralized Agriculture Insurance. Each member brings unique skills and expertise to ensure the success of our project. Together, we are committed to revolutionizing agricultural insurance.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="m-4">
            <img src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 1" className="rounded-full h-24 w-24" />
            <p className="text-center mt-2">Siid Sharma</p>
          </div>
          <div className="m-4">
            <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member 2" className="rounded-full h-24 w-24" />
            <p className="text-center mt-2">Jane Smith</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
