"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInformation = () => {
  const [randomCities, setRandomCities] = useState([]);
  const [cityName, setCityName] = useState('');
  const [cityWeather, setCityWeather] = useState(null);
  const API_KEY = "640e6535b8274f8595264603241101";

  useEffect(() => {
    const fetchRandomCitiesWeather = async () => {
      try {
        const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Sydney', 'Berlin', 'Rome', 'Moscow', 'Dubai', 'Singapore'];
        const weatherData = await Promise.all(
          cities.map(async (city) => {
            const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
            return {
              city: city,
              weather: response.data.current.condition.text,
              temperature: response.data.current.temp_c
            };
          })
        );
        setRandomCities(weatherData);
      } catch (error) {
        console.error('Error fetching weather data: ', error);
      }
    };
    fetchRandomCitiesWeather();
  }, [API_KEY]);

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`);
      setCityWeather({
        city: cityName,
        weather: response.data.current.condition.text,
        temperature: response.data.current.temp_c
      });
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  };

  return (
    <div 
    className="bg-slate-700 mx-auto px-4 py-8 text-white" style={{
      padding: '100px'}}>
      <h1 className="text-4xl font-bold mb-8">Weather Information</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {randomCities.map((city, index) => (
          <div key={index} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-2">{city.city}</h2>
            <p>Weather: {city.weather}</p>
            <p>Temperature: {city.temperature}°C</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mb-8 text-center">
        <label htmlFor="cityName" className="block mb-2">Enter City Name:</label>
        <input type="text" id="cityName" name="cityName" value={cityName} onChange={handleInputChange} className="border p-2 rounded-md mb-4" />
        <button type="submit" 
        className="text-white border border-white hover:bg-white hover:text-black
        transition duration-300 ease-in-out py-2 px-4 rounded-full ml-2">Get Weather</button>
      </form>
      {cityWeather && (
        <div className='text-center'>
          <h2 className="text-lg font-semibold mb-2">{cityWeather.city}</h2>
          <p>Weather: {cityWeather.weather}</p>
          <p>Temperature: {cityWeather.temperature}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInformation;
