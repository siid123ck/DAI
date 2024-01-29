"use client"
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'; // Import ethers.js
import { useContract } from '@/context/ContractContext';

const Policies = () => {
  const contract = useContract();
  const [provider, setProvider] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [policies, setPolicies] = useState([
      {
      tokenId: 1, // Example tokenId
      coverageAmount: 1000,
      premium: 50,
      duration: 12,
      purchaseTime: Date.now(),
      isClaimed: false,
      owner: '0x123456789...' // Replace with an actual Ethereum address
    },
    {
      tokenId: 2, // Example tokenId
      coverageAmount: 2000,
      premium: 100,
      duration: 6,
      purchaseTime: Date.now() - 86400000, // 1 day ago
      isClaimed: true,
      owner: '0x987654321...' // Replace with an actual Ethereum address
    },
  ]);


  useEffect(() => {
    const loadPolicies = async () => {
        if (contract) {
          try {
            const policies = await contract.getAllPolicies();
            setPolicies(policies);
            console.log(policies)
          } catch (error) {
            console.error('Error loading policies: ', error);
          }
      }
    };
    loadPolicies();
  }, [contract]);

  const triggerPayout = async (tokenId) => {
    if (contract && provider) {
      try {
        const signer = provider.getSigner();
        const contractWithSigner = contract.connect(signer);
        await contractWithSigner.triggerPayout(tokenId);
        console.log('Payout triggered successfully');
        // You may want to update the UI after triggering the payout
      } catch (error) {
        console.error('Error triggering payout: ', error);
      }
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Policies</h1>
      <div className="grid grid-cols-6 gap-4">
        <div className="font-bold">Token ID </div>
        <div className="font-bold">Coverage Amount</div>
        <div className="font-bold">Premium</div>
        <div className="font-bold">Duration</div>
        <div className="font-bold">Purchase Time</div>
        <div className="font-bold">Claim Status</div>
        {policies.map((policy, index) => (
           <React.Fragment key={index}>
           <div>{policy.tokenId}</div>
           <div>{policy.coverageAmount}</div>
           <div>{policy.premium}</div>
           <div>{policy.duration}</div>
           <div>{new Date(policy.purchaseTime * 1000).toLocaleString()}</div>
           <div>{policy.isClaimed ? 'Claimed' : 'Not Claimed'}</div>
           {accounts.length > 0 && accounts[0] === policy.owner && !policy.isClaimed && (
             <button
               onClick={() => triggerPayout(index)}
               className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
             >
               Trigger Payout
             </button>
           )}
         </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Policies;
