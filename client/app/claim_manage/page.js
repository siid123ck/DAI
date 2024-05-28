"use client"
import React, { useState } from 'react';

const ClaimsManagement = () => {
  const [claims, setClaims] = useState([
    { id: 'c1', date: '2021-06-15', type: 'Drought', amount: 15000, status: 'Approved' },
    { id: 'c2', date: '2021-08-20', type: 'Flood', amount: 20000, status: 'Pending' },
    { id: 'c3', date: '2021-09-05', type: 'Pest', amount: 5000, status: 'Rejected' }
  ]);

  const [newClaim, setNewClaim] = useState({
    type: '',
    amount: '',
    documentation: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClaim({ ...newClaim, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting new claim:', newClaim);
    // Add the new claim to the list of claims (in a real application, this would involve backend logic)
    setClaims([...claims, { ...newClaim, id: `c${claims.length + 1}`, date: new Date().toISOString().slice(0, 10), status: 'Pending' }]);
    setNewClaim({ type: '', amount: '', documentation: '' });
  };

  return (
    <div className="bg-slate-700 text-wh mx-auto px-4 py-8" 
    style={{padding: '100px'}}>
      <h1 className="text-4xl font-bold mb-8 text-white">Claims Management</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Submit New Claim</h2>
        <form onSubmit={handleSubmit} className="max-w-md  space-y-4">
          <input
            type="text"
            name="type"
            placeholder="Claim Type (e.g., Flood, Drought)"
            value={newClaim.type}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded-md"
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Claim Amount"
            value={newClaim.amount}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded-md"
            required
          />
          <textarea
            name="documentation"
            placeholder="Documentation (Links or details)"
            value={newClaim.documentation}
            onChange={handleInputChange}
            className="block w-full p-2 border rounded-md"
            required
          />
          <button type="submit" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit Claim
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-white">Claim History</h2>
        <div className="space-y-4">
          {claims.map((claim) => (
            <div key={claim.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-bold">Claim ID: {claim.id}</h3>
              <p>Date: {claim.date}</p>
              <p>Type: {claim.type}</p>
              <p>Amount: {claim.amount}</p>
              <p>Status: {claim.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClaimsManagement;
