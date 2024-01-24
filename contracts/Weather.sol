 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract PolicyContract is ERC721, Ownable {

    // Chainlink VRF variables
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;

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

    // Events
    event PolicyPurchased(uint256 tokenId, uint256 coverageAmount, uint256 premium, uint256 duration);
    event PayoutTriggered(uint256 tokenId, uint256 payoutAmount);

    // Constructor
    constructor()
        ERC721("DecentralizedAgricultureInsurance", "DAI")
        Ownable(msg.sender)
    {
      
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

        // Use Chainlink VRF to get random weather data
        // requestRandomness(keyHash, fee);

        // Note: In a real application, you would use the randomness to determine weather conditions.

        // For simplicity, assume payout is triggered if random number is even
        if (randomResult % 2 == 0) {
            uint256 payoutAmount = policy.coverageAmount;
            // Transfer funds to the policy owner
            payable(ownerOf(_tokenId)).transfer(payoutAmount);

            // Mark policy as claimed
            policy.isClaimed = true;

            emit PayoutTriggered(_tokenId, payoutAmount);
        }
    }

    // Callback function for Chainlink VRF
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal  {
        randomResult = randomness;
    }

  

}