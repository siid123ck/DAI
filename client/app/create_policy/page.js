"use client"
import React, { useState } from 'react';
import { useContract } from '@/context/ContractContext';
import { ethers } from 'ethers';

const PolicyPurchase = () => {
  const contract = useContract();
  const [premium, setPremium] = useState('');
  const [duration, setDuration] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');

  const onChangePremium = (e) => {
    const newPremium = e.target.value;
    setPremium(newPremium);
    if (duration) {
      setCoverageAmount((newPremium * duration).toFixed(2));
    }
  };

  const onChangeDuration = (e) => {
    const newDuration = e.target.value;
    setDuration(newDuration);
    if (premium) {
      setCoverageAmount((premium * newDuration).toFixed(2));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contract && window.ethereum) {
      try {
        
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const transaction = await contract.purchasePolicy(premium, duration, {
          value: ethers.parseEther((premium * duration).toString())
        });
        await transaction.wait();
        console.log('Policy purchased successfully!');
      } catch (error) {
        console.error('Error purchasing policy:', error);
      }
    } else {
      console.log("Metamask not installed or contract not loaded");
    }
    setPremium('');
    setDuration('');
    setCoverageAmount('');
  };

  return (
    <div className="bg-slate-700 mx-auto px-4 py-8" style={{ paddingTop: '100px' }}> {/* Adjusted padding-top here */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-4xl text-center font-bold mb-8">Purchase Insurance Policy</h1>
        <div className="mb-4">
          <label htmlFor="premium" className="block text-gray-700 text-sm font-bold mb-2">
            Premium (in DAI)
          </label>
          <input 
            type="number"
            id="premium"
            name="premium"
            value={premium}
            onChange={onChangePremium}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-700 text-sm font-bold mb-2">
            Duration (in months)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            onChange={onChangeDuration}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="coverageAmount" className="block text-gray-700 text-sm font-bold mb-2">
            Coverage Amount
          </label>
          <h2 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
            {coverageAmount} DAI
          </h2>
        </div>

        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Purchase Policy
        </button>
      </form>
    </div>
  );
};

export default PolicyPurchase;
