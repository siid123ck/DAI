"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
      } else {
        console.error('MetaMask is not installed');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error.message);
    }
  };

  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletConnected(true);
        }
      }
    };

    checkIfWalletIsConnected();
  }, []);


  return (
    <div className="bg-transparent text-white py-4 px-6 fixed w-full z-10">
      <header className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/"
             className="hover:text-gray-300">DAI
          </Link>
        </h1>
        <nav className="flex space-x-6">
          <Link href="/policies"
             className="hover:text-gray-300">Policies
          </Link>
          <Link href="/weather-information"
             className="hover:text-gray-300">Weather Information
          </Link>
          <Link href="/about-us"
             className="hover:text-gray-300">About Us
          </Link>
          <Link href="/contact-us"
             className="hover:text-gray-300">Contact Us
          </Link>
          <Link href="/faqs"
             className="hover:text-gray-300">FAQs
          </Link>
          <Link href="/faqs"
             className="hover:text-gray-300">DAO
          </Link>
          <Link href="/create_policy"
             className="hover:text-gray-300">Create Policy
          </Link>
        </nav>
        {isWalletConnected ? (
          <button className="text-white border border-white hover:bg-white hover:text-black transition duration-300 ease-in-out py-2 px-4 rounded-full">
            Connected
          </button>
        ) : (
          <button className="text-white border border-white hover:bg-white hover:text-black 
          transition duration-300 ease-in-out py-2 px-4 rounded-full" onClick={connectWallet}>
            Connect wallet
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
