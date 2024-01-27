# DAI
Decentralized Agriculture Insurance (DAI) provides agriculture insurance to farmers using blockchain technology, oracles, and smart contracts

## Project component
### 1. Smart contract 
- Policy Contract: Farmers purchase insurance policies by interacting with this smart contract. A policy specifies the details such as coverage amount, premium, and the duration (e.g., one crop season).
- Weather Insurance Contract: This contract holds the funds for insurance payouts and interacts with the Chainlink VRF oracle to verify weather conditions.

### Chainlink VRF Oracle:
- The Chainlink VRF oracle provides random, tamper-proof weather data from multiple sources, ensuring the reliability of the data.

## Implementation steps 
### Deploy Smart Contracts:
- Develop the smart contracts using Solidity and deploy them to the Ethereum blockchain.

### Farmers Purchase Policies:
- Farmers access a user-friendly front-end and purchase insurance policies by specifying the crop type, coverage amount, premium payment, and the specific location of their farm.

### Implement NFTs:
- Use NFTs to represent insurance policies. Each NFT can represent a unique insurance policy that farmers can purchase.

### Weather Data Oracles Integration:
- Integrate the Chainlink VRF oracle into the project. Set up the oracle to fetch real-time weather data, including temperature, rainfall, humidity, and wind speed for the specific
location of each insured farm.

### Payout Triggering:
- Smart contracts periodically check the weather data from the oracle. If adverse weather conditions, such as heavy rainfall, drought, or frost, are detected and surpass predefined thresholds, the smart contract automatically triggers a payout.

### Decentralized Risk Pooling:
- Farmers contribute to a decentralized risk-pooling mechanism by staking cryptocurrency (e.g., DAI) in a smart contract. This pooled fund ensures that there is sufficient capital available to compensate affected farmers.

### Payouts and Compensation:
- When an adverse weather event triggers a payout, the affected farmers receive compensation directly in their cryptocurrency wallets. The amount of compensation is based on the coverage amount specified in their policies.

### Transparency and Verification:
- All transactions and weather data are recorded on the Ethereum blockchain, providing transparency and trust in the claims process.

## Example Scenario:
- A farmer in a specific region purchases an insurance policy for their crop, contributing 10 DAI as a premium.
- The Chainlink VRF oracle provides real-time weather data to the smart contract. Suppose heavy rainfall exceeding a predefined threshold occurs during the crop season.
- The smart contract detects the adverse weather event and triggers an automatic payout to the affected farmer. The payout amount is based on the coverage amount specified in the policy (e.g., 1000 DAI).
- The farmer receives 1000 DAI as compensation for the crop loss caused by heavy rainfall.

## Benefits:
- Farmers are protected against unpredictable weather conditions.
- The use of oracles ensures reliable and tamper-proof weather data.
- Smart contracts automate the insurance process, eliminating intermediaries.
- Transparent and efficient claims process on the blockchain.

## Teckstacks used
- FrontEnd: NextJs
- Backend: NextJs
- Smart contracts: Solidity
- blockchain platform: Ethereum
- Chainlink VRF Oracle: To fetch reliable weather data, we would integrate with a Chainlink VRF (Verifiable Random Function) oracle. This oracle provides tamper-proof data from multiple sources, ensuring data reliability.
- IPFS (InterPlanetary File System): You can use IPFS to store data off-chain, like policy documents, weather data, and other large files. IPFS provides a decentralized and efficient way to store and retrieve data.
- Web3 library: Ether.js library allows front-end to interact with the blockchain and smart contracts. We can use these libraries to communicate with the smart contracts and trigger policy creation, claims, and other interactions.
- NFT Standards: NFT (Non-Fungible Token)/ ERC-721. Each NFT can represent a unique insurance policy that farmers can purchase.
- Testing and Development Tools: We would use tools such Truffle, Hardhat, and Ganache to develop, test, and deploy smart contracts. Hardhat will be mostly used in this project.


### Frontend: 
Required pages for this project are:
- Home Page: Overview of the insurance service.General information about the project.
Option to navigate to other pages.
- Policy Purchase Page: Form to allow users to purchase insurance policies.
Input fields for coverage amount, premium, and duration, and button to submit the transaction.
- Policies Page: Display  the list of policy details. Information such as coverage amount, premium, duration, purchase time, and claim status.Option to trigger a payout (accessible only by the owner).

- Weather Information Page: Display weather information obtained from Chainlink.
Real-time or historical weather conditions.
- Admin Dashboard (optional): If you have an admin role, a dashboard to manage policies and trigger payouts.
Overview of policies, including their status and key details.
- About Page: Detailed information about the project, its purpose, and the technology used, and team information if applicable.
- Contact Page: Form or contact details for users to get in touch with support or ask questions.
- FAQ Page: Frequently Asked Questions related to the insurance service and smart contracts.
- Terms and Conditions / Privacy Policy Page: Legal information about the service, including terms and conditions and privacy policy.
- Error Page: Generic error page that users can be redirected to in case of unexpected issues.

























