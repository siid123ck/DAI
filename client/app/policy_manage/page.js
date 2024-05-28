"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const PolicyManagement = () => {
  const [policies, setPolicies] = useState([
    { id: 'p1', name: 'Crop Coverage Basic', coverageAmount: 10000, duration: 12, status: 'Active' },
    { id: 'p2', name: 'Crop Coverage Plus', coverageAmount: 20000, duration: 24, status: 'Active' },
    { id: 'p3', name: 'Weather Protection', coverageAmount: 15000, duration: 12, status: 'Expired' },
    { id: 'p4', name: 'Full Farm Coverage', coverageAmount: 50000, duration: 36, status: 'Active' },
    { id: 'p5', name: 'Livestock Coverage', coverageAmount: 30000, duration: 24, status: 'Cancelled' },
    { id: 'p6', name: 'Orchard Coverage', coverageAmount: 25000, duration: 24, status: 'Active' },
    { id: 'p7', name: 'Drought Protection', coverageAmount: 20000, duration: 12, status: 'Active' },
    { id: 'p8', name: 'Flood Protection', coverageAmount: 30000, duration: 12, status: 'Active' }
  ]);

  const handleRenew = (policyId) => {
    console.log(`Renewing policy ${policyId}`);
    // Simulate state change
    setPolicies(policies.map(policy => policy.id === policyId ? {...policy, status: 'Renewed'} : policy));
  };

  const handleCancel = (policyId) => {
    console.log(`Cancelling policy ${policyId}`);
    // Simulate state change
    setPolicies(policies.map(policy => policy.id === policyId ? {...policy, status: 'Cancelled'} : policy));
  };

  return (
    <div className="bg-slate-700 mx-auto px-4 py-8" style={{
        padding: '100px'}}>
      <h1 className="text-4xl text-white font-bold mb-8">Manage Your Insurance Policies</h1>
      {policies.length > 0 ? (
        <div className="space-y-4">
          {policies.map((policy) => (
            <div key={policy.id} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-2xl font-semibold">{policy.name}</h2>
              <p><strong>Coverage:</strong> {policy.coverageAmount} DAI</p>
              <p><strong>Duration:</strong> {policy.duration} months</p>
              <p><strong>Status:</strong> {policy.status}</p>
              <div className="flex justify-end space-x-2">
                {policy.status !== 'Cancelled' && (
                  <button onClick={() => handleRenew(policy.id)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                    Renew
                  </button>
                )}
                {policy.status === 'Active' && (
                  <button onClick={() => handleCancel(policy.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No policies found. Please purchase a policy.</p>
      )}
    </div>
  );
};

export default PolicyManagement;
