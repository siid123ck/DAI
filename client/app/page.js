// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  console.log(process.env.NEXT_PUBLIC_WEATHER_API_KEY, "ff") 

  return (
    <div className="container mx-auto p-8">
 
      <div className="mb-12">
        <div className="relative rounded-md overflow-hidden">
          <img
            src="https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Insurance Showcase"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gray-600 bg-opacity-50 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Protect Your Agricultural Investments
            </h2>
            <Link href="/create_policy">
              <span className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Create Your Policy
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-8 text-center text-gray-600">
        <h1 className="text-4xl font-bold mb-4">Welcome to DAI Insurance</h1>
        <p className="text-lg mb-4">
          We provide decentralized agriculture insurance to protect farmers against unforeseen events.
        </p>
        <p className="text-lg mb-4">
          Our smart contract-based insurance service ensures transparency and quick claim processing.
        </p>
        <p className="text-lg mb-8">
          Explore our services and secure your agricultural investments today.
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center">
        <p className="text-lg mb-4">
          Ready to get started? View our policies or get weather information now.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/policies">
            <span className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700">
              View Policies
            </span>
          </Link>
          <Link href="/weather-information">
            <spana className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">
              Weather Information
            </spana>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
