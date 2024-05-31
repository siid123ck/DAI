const weatherAPIURL = "https://api.weatherapi.com/v1/current.json";
const apiKey = "640e6535b8274f8595264603241101"; // Replace with your actual API key

const city = "Sydney"; // Assume the city is passed as an argument

console.log(`Sending HTTP request to ${weatherAPIURL}?key=${apiKey}&q=${city}`);

try {
  // Make the HTTP request
  const weatherRequest = Functions.makeHttpRequest({
    url: `${weatherAPIURL}?key=${apiKey}&q=${city}`,
    method: "GET",
  });

  // Execute the API request (Promise)
  const weatherResponse = await weatherRequest;

  // Log the entire response
  console.log(weatherResponse);

  if (weatherResponse.error || !weatherResponse.data || !weatherResponse.data.current) {
    console.error("Error in API response or missing data");
    throw new Error("Request failed, try checking the params provided");
  }

  // Extract relevant weather information from the response
  const weatherData = weatherResponse.data.current;

  // Log specific weather data
  console.log(`Temperature: ${weatherData.temp_c}°C`);
  console.log(`Condition: ${weatherData.condition.text}`);
  console.log(`Humidity: ${weatherData.humidity}%`);

  // Create a custom data object with relevant weather information
  const myData = {
    temperature: weatherData.temp_c,
    condition: weatherData.condition.text,
    humidity: weatherData.humidity,
  };

  // Convert the data to JSON string and encode it
  const encodedData = Functions.encodeString(JSON.stringify(myData));

  // Return the encoded data
  return encodedData;
} catch (error) {
  console.error("Error during API request:", error.message);
  throw new Error("Request failed, try checking the params provided");
}
