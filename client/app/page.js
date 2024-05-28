import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className=" mx-auto px-0 min-h-screen" style={
      {background: "url(https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center",
       backgroundSize: "cover"}}>
      {/* Ensure the outer div covers the full viewport height and the image is set to cover */}
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center text-white p-8">

        <div className="text-white mt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to DAI Insurance</h1>
          <h2 className="text-3xl font-bold mb-6">
            The Future of Agricultural Is Here
          </h2>
          <p className="text-xl mb-4">
            We provide decentralized agriculture insurance to protect farmers against unforeseen events.
          </p>
          <p className="mb-5">
            Our smart contract-based insurance service ensures transparency and quick claim processing.
          </p>
          <p className="mb-8">
            Explore our services and secure your agricultural investments today.
          </p>
          <div className="space-x-4">
            <Link href="/policies"
               className="text-white border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out py-2 px-4 rounded-full">
                View Policies             
            </Link>
            <Link href="/weather-information" 
            className="text-white border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out py-2 px-4 rounded-full">
                Weather Information             
            </Link>
            <Link href="/create_policy" 
           className="text-white border border-white hover:bg-white
            hover:text-black transition duration-300 ease-in-out py-2 px-4 rounded-full">            Create Your Policy
          </Link>
          </div>
  
        </div>
        </div>
      </div>

 
    </div>
  );
};

export default Home;
