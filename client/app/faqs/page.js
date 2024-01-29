// pages/faq.js

import React from 'react';

const FAQPage = () => {
  return (
    <div className="container mx-auto p-8" style={{marginBottom:"80px"}}>
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      {/* FAQ List */}
      <div className="space-y-6">
        {/* Question 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">What is Decentralized Agriculture Insurance (DAI)?</h2>
          <p>Decentralized Agriculture Insurance (DAI) is a blockchain-based insurance service designed to protect farmers against weather-related risks. It leverages smart contracts to automate the insurance process and ensure transparent claim settlements.</p>
        </div>

        {/* Question 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">How does DAI work?</h2>
          <p>DAI uses smart contracts deployed on the blockchain to offer insurance policies to farmers. When a farmer purchases a policy, the premium is paid in cryptocurrency, and the policy terms are stored on the blockchain. If the weather conditions trigger a claim event, the smart contract automatically executes the payout to the farmer.</p>
        </div>

        {/* Question 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">What are the benefits of using DAI?</h2>
          <p>Some benefits of using DAI include:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Transparency: Policy terms and claim settlements are recorded on the blockchain, ensuring transparency.</li>
            <li>Efficiency: Smart contracts automate the insurance process, reducing administrative overhead and processing times.</li>
            <li>Security: The decentralized nature of blockchain technology enhances security and reduces the risk of fraud.</li>
          </ul>
        </div>

        {/* Question 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Can I purchase insurance through DAI?</h2>
          <p>Yes, farmers can purchase insurance policies through the DAI platform using cryptocurrency. The platform offers various coverage options tailored to meet the needs of different farmers.</p>
        </div>

        {/* Question 5 */}
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I file a claim with DAI?</h2>
          <p>To file a claim with DAI, farmers need to submit the necessary documentation, such as proof of loss, through the platform. The smart contract will then assess the claim and execute the payout if the conditions are met.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
