// pages/terms-and-conditions.js

import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions / Privacy Policy</h1>

      {/* Terms and Conditions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        <p>
          These terms and conditions outline the rules and regulations for the use of Decentralized Agriculture Insurance (DAI) service, operated by DAI.
        </p>
        <p>
          By accessing this service we assume you accept these terms and conditions. Do not continue to use Decentralized Agriculture Insurance (DAI) service if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <p>
          Read full <a href="/terms">Terms and Conditions</a>.
        </p>
      </section>

      {/* Privacy Policy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p>
          At Decentralized Agriculture Insurance (DAI), accessible from , one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Decentralized Agriculture Insurance (DAI) and how we use it.
        </p>
        <p>
          Read full <a href="/privacy-policy">Privacy Policy</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
