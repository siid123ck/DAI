// components/Footer.js

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8  fixed bottom-0 w-full"
    style={{marginTop:"280px"}}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-wrap space-x-4">
          <Link href="/policies">
            <span className="hover:text-blue-500">Policies</span>
          </Link>
          <Link href="/weather-information">
            <span className="hover:text-blue-500">Weather Information</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-blue-500">About Us</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-blue-500">Contact Us</span>
          </Link>
          <Link href="/faq">
            <span className="hover:text-blue-500">FAQs</span>
          </Link>
          <Link href="/create_policy">
            <span className="hover:text-blue-500">Create Policy</span>
          </Link>
          <Link href="/privacy-policy">
            <span className="hover:text-blue-500">Privacy Policy</span>
          </Link>
          <Link href="/termandconditions">
            <span className="hover:text-blue-500">Terms and Conditions</span>
          </Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Decentralized Agriculture Insurance. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
