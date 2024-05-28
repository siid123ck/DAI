import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-3 gap-8 px-8">
        <div>
          <h3 className="text-gray-100 font-bold mb-3">Decentralized Agriculture Insurance</h3>
          <p className="text-gray-400">
            <Link href="/">
              Home
            </Link>
          </p>
          <p className="text-gray-400">info@daiproject.com</p>
          <div className="flex space-x-2 mt-2">
            <Link href="https://linkedin.com">
              LinkedIn
            </Link>
            <Link href="https://facebook.com">
              Facebook
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-gray-100 font-bold mb-3">Resources</h3>
          <p><Link href="/policies">Policies</Link></p>
          <p><Link href="/weather-information">Weather Information</Link></p>
          <p><Link href="/about">About Us</Link></p>
        </div>

        <div>
          <h3 className="text-gray-100 font-bold mb-3">Support</h3>
          <p><Link href="/faq">FAQs</Link></p>
          <p><Link href="/contact">Contact Us</Link></p>
          <p><Link href="/terms">Terms & Conditions</Link></p>
          <p><Link href="/privacy">Privacy Policy</Link></p>
        </div>

        <div className="col-span-3 mt-8">
          <h3 className="text-gray-100 font-bold mb-3">Stay Connected</h3>
          <form className="flex">
            <input type="email" placeholder="Email *" className="p-2 flex-grow" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white p-2">Subscribe</button>
          </form>
          <p className="text-xs text-gray-400 mt-4">&copy; {new Date().getFullYear()} DAI. Made by siid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
