// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface  WeatherApiOracle{
    function weatherCondition() external view returns (string memory);
}

contract PolicyContract is ERC721, Ownable {

    uint public currentTokenId;

    // Policy details
    struct Policy {
        uint256 premium;
        uint256 tokenId;
        address owner;
        uint256 duration; 
        uint256 purchaseTime;
        bool isClaimed;
    }

    // Mapping from token ID to Policy details
    mapping(uint256 => Policy) public policies;

    // Reference to the Chainlink weather contract
    WeatherApiOracle public weatherContract;

    // Events
    event PolicyPurchased(uint256 tokenId, uint256 premium, uint256 duration);
    event PayoutTriggered(uint256 tokenId, uint256 payoutAmount);

    // Constructor
    constructor(address _weatherApiContract)
        ERC721("DecentralizedAgricultureInsurance", "DAI")
        Ownable(msg.sender)
    {
        weatherContract = WeatherApiOracle(_weatherApiContract);
    }
    

    // Purchase a policy
    function purchasePolicy(uint256 premium, uint256 duration) external payable  {
        require(msg.value == premium * duration);
        _safeMint(msg.sender, currentTokenId);

        Policy storage policy = policies[currentTokenId];
        policy.tokenId = currentTokenId;
        policy.premium = premium;
        policy.owner = msg.sender;
        policy.duration = duration;
        policy.purchaseTime = block.timestamp;
        policy.isClaimed = false;

        currentTokenId++;

        emit PolicyPurchased(currentTokenId, premium, duration);
    }

    // Trigger a payout based on weather conditions
    function triggerPayout(uint256 _tokenId) external onlyOwner {
        require(ownerOf(_tokenId) != address(0), "Policy not found");
        Policy storage policy = policies[_tokenId];
        require(!policy.isClaimed, "Policy already claimed");

        // Check weather condition from the Chainlink weather contract
        string memory weatherCondition = weatherContract.weatherCondition();

        // Payout if weather condition is 'Cloudy or Raining'
        if (compareStrings(weatherCondition, "Cloudy or Raining")) {
            uint256 payoutAmount = policy.premium * policy.duration * 10;
            // Transfer funds to the policy owner
            payable(ownerOf(_tokenId)).transfer(payoutAmount);

            // Mark policy as claimed
            policy.isClaimed = true;

            emit PayoutTriggered(_tokenId, payoutAmount);
        }
    }

      // Function to retrieve all policies
    function getAllPolicies() external view returns (Policy[] memory) {
        Policy[] memory allPolicies = new Policy[](currentTokenId);
        for (uint256 i = 0; i < currentTokenId; i++) {
            allPolicies[i] = policies[i];
        }
        return allPolicies;
    }

    // Function to retrieve policies owned by the caller
function getMyPolicies() external view returns (Policy[] memory) {
    uint256 policyCount = 0;
    // Count the number of policies owned by the caller
    for (uint256 i = 0; i < currentTokenId; i++) {
        if (ownerOf(i) == msg.sender) {
            policyCount++;
        }
    }
    // Create an array to store policies owned by the caller
    Policy[] memory myPolicies = new Policy[](policyCount);
    uint256 currentIndex = 0;
    // Retrieve policies owned by the caller
    for (uint256 i = 0; i < currentTokenId; i++) {
        if (ownerOf(i) == msg.sender) {
            myPolicies[currentIndex] = policies[i];
            currentIndex++;
        }
    }
    return myPolicies;
}


    // Helper function to compare strings
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
}
