// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";


contract WeatherApiOracle is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    // State variables to store the last request ID, response, and error
    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    // Custom error type
    error UnexpectedRequestID(bytes32 requestId);

    // Event to log responses
    event Response(
        bytes32 indexed requestId,
        string weatherCondition,
        bytes response,
        bytes err
    );

  
    address router = 0xb83E47C2bC239B3bf370bc41e1459A34b41238D0;

    // JavaScript source code
    // Check weather conditions from the weather API.
    string source =
        "const city = args[0];"
        "const apiKey = 'your_weather_api_key';"
        "const weatherResponse = await Functions.makeHttpRequest({"
        "url: `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,"
        "method: 'GET',"
        "});"
        "if (weatherResponse.error) {"
        "throw Error('Request failed');"
        "}"
        "const { data } = weatherResponse;"
        "const isCloudyOrRaining = data.current.condition.text.includes('cloudy') || data.current.condition.text.includes('rain');"
        "return Functions.encodeString(isCloudyOrRaining ? 'Cloudy or Raining' : 'Other');";

    // Callback gas limit
    uint32 gasLimit = 3000000;

    
    bytes32 donID =
        0x66756e2d706f6c79676f6e2d6d756d6261692d31000000000000000000000000;

    // State variable to store the returned weather information
    string public weatherCondition;

    constructor() FunctionsClient(router) ConfirmedOwner(msg.sender) {}

    function sendRequest(
        uint64 subscriptionId,
        string[] calldata args
    ) external onlyOwner returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source); // Initialize the request with JS code
        if (args.length > 0) req.setArgs(args); // Set the arguments for the request

        // Send the request and store the request ID
        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );

        return s_lastRequestId;
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId); // Check if request IDs match
        }
        // Update the contract's state variables with the response and any errors
        s_lastResponse = response;
        weatherCondition = string(response);
        s_lastError = err;

        // Emit an event to log the response
        emit Response(requestId, weatherCondition, s_lastResponse, s_lastError);
    }
}
