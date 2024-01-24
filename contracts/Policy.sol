// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface GettingStartedFunctionsConsumer {
    function weatherCondition() external view returns (string memory);
}

contract PolicyContract is ERC721, Ownable {

    uint public currentTokenId;

    // Policy details
    struct Policy {
        uint256 coverageAmount;
        uint256 premium;
        uint256 duration; 
        uint256 purchaseTime;
        bool isClaimed;
    }

    // Mapping from token ID to Policy details
    mapping(uint256 => Policy) public policies;

    // Reference to the Chainlink weather contract
    GettingStartedFunctionsConsumer public weatherContract;

    // Events
    event PolicyPurchased(uint256 tokenId, uint256 coverageAmount, uint256 premium, uint256 duration);
    event PayoutTriggered(uint256 tokenId, uint256 payoutAmount);

    // Constructor
    constructor(address _weatherContract)
        ERC721("DecentralizedAgricultureInsurance", "DAI")
        Ownable(msg.sender)
    {
        weatherContract = GettingStartedFunctionsConsumer(_weatherContract);
    }
    

    // Purchase a policy
    function purchasePolicy(uint256 coverageAmount, uint256 premium, uint256 duration) external {
        _safeMint(msg.sender, currentTokenId);

        Policy storage policy = policies[currentTokenId];
        policy.coverageAmount = coverageAmount;
        policy.premium = premium;
        policy.duration = duration;
        policy.purchaseTime = block.timestamp;
        policy.isClaimed = false;

        currentTokenId++;

        emit PolicyPurchased(currentTokenId, coverageAmount, premium, duration);
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
            uint256 payoutAmount = policy.coverageAmount;
            // Transfer funds to the policy owner
            payable(ownerOf(_tokenId)).transfer(payoutAmount);

            // Mark policy as claimed
            policy.isClaimed = true;

            emit PayoutTriggered(_tokenId, payoutAmount);
        }
    }

    // Helper function to compare string
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
}
