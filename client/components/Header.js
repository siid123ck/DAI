"use client"
import Link from 'next/link';
import React, { useState } from 'react';

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

  return (
    <div className="bg-gray-600 text-white p-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">DAI</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link href="/policies" className="cursor-pointer">
            Policies
          </Link >
          <Link href="/weather-information" className="cursor-pointer">
            Weather Information
          </Link>
          <Link href="/about-us" className="cursor-pointer">
            About Us
          </Link>
          <Link href="/contact-us" className="cursor-pointer">
            Contact Us
          </Link>
          <Link href="/faqs" className="cursor-pointer">
            FAQs
          </Link>
          <Link href="/create_policy" className="cursor-pointer">
            Create Policy
          </Link>
        </nav>
        {isWalletConnected ? (
          <button className="bg-green-500 text-white rounded-md py-2 px-4">
            Connected
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
