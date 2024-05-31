"use client"
import React, { useState, useEffect } from 'react';

const GovernancePage = () => {
  const [proposals, setProposals] = useState([]);
  const [newProposal, setNewProposal] = useState('');

  // Mock function to simulate fetching proposals from a blockchain or database
  useEffect(() => {
    const fetchProposals = async () => {
      // Simulate fetching data
      setProposals([
        { id: 1, title: 'Increase Insurance Coverage Cap', description: 'Proposal to increase the maximum coverage cap from $10,000 to $15,000.', votes: 120 },
        { id: 2, title: 'Adjust Premium Rates', description: 'Proposal to decrease premium rates by 5% for all policyholders.', votes: 75 }
      ]);
    };

    fetchProposals();
  }, []);

  const handleVote = (proposalId) => {
    // Implement voting logic here
    console.log(`Voting for proposal ID: ${proposalId}`);
    // This would interact with a smart contract or backend to register the vote
  };

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    console.log(`Submitting new proposal: ${newProposal}`);
    // Logic to submit a new proposal to the blockchain or backend
    setNewProposal('');
  };

  return (
    <div className="bg-slate-700 text-white mx-auto p-8" style={{ paddingTop: '100px' }}>
      <h1 className="text-4xl font-bold mb-6 text-center">DAO Governance</h1>

      <div className="mb-8">
        <h2 className="text-3xl mb-4">Current Proposals</h2>
        {proposals.map((proposal) => (
          <div key={proposal.id} className="p-4 border rounded-md mb-4">
            <h3 className="text-xl font-semibold">{proposal.title}</h3>
            <p>{proposal.description}</p>
            <p className="mb-4">Votes: {proposal.votes}</p>
            <button onClick={() => handleVote(proposal.id)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Vote
            </button>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-3xl mb-4">Submit New Proposal</h2>
        <form onSubmit={handleSubmitProposal}>
          <textarea
            className="w-full border p-2 rounded-md mb-4"
            placeholder="Enter proposal details"
            value={newProposal}
            onChange={(e) => setNewProposal(e.target.value)}
            required
          />
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
};

export default GovernancePage;
