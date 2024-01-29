"use client"
import { ethers } from 'ethers';
import React, { useState } from 'react';
import contractABI from "../../utils/policyContractABI.js";

const PolicyPurchase = () => {
  // State to manage form inputs
  const [coverageAmount, setCoverageAmount] = useState(0);
  const [premium, setPremium] = useState('');
  const [duration, setDuration] = useState('');

  const onChangePremium = (e) => {
    const newPremium = e.target.value;
    setPremium(newPremium);
    setCoverageAmount(Number(newPremium) * Number(duration));
  };

  const onChangeDuration =  (e) => {
    const newDuration = e.target.value;
    setDuration(newDuration);
    setCoverageAmount(Number(premium) * Number(newDuration));
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();


    const contractAddress = '0x18d5e4a4f9c25859446d6ce0ed7b3ad5f24b27c1';

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const transaction = await contract.purchasePolicy(premium, duration, {
      value: ethers.parseEther(String(premium * duration)),
    });

    await transaction.wait();
    setCoverageAmount('');
    setPremium('');
    setDuration('');
  };

  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-8">Purchase Insurance Policy</h1>

      {/* Policy Purchase Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="premium" className="block text-gray-600 text-sm font-medium mb-2">
            Premium
          </label>
          <input
            type="number"
            id="premium"
            name="premium"
            value={premium}
            onChange={onChangePremium}
            required
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duration" className="block text-gray-600 text-sm font-medium mb-2">
            Duration (in months)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            onChange={onChangeDuration}
            required
            className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="coverageAmount" className="block text-gray-600 text-sm font-medium mb-2">
            Coverage Amount
          </label>
          <h2>{coverageAmount} dai</h2>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Purchase Policy
        </button>
      </form>
    </div>
  );
};

export default PolicyPurchase;
