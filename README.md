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
