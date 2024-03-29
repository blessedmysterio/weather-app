## Weather App

## Overview
This is a simple Node.js application that provides weather information, location details, and additional data such as crime statistics, COVID-19 statistics, and sunrise/sunset times. The app uses various external APIs to fetch the required information.

## Installation

1. Clone the repository to your local machine.

git clone https://github.com/blessedmysterio/weather-app.git

2. Install dependencies.

cd weather-app
npm install

3. Obtain API keys:

Google Maps API key for location data: Google Cloud Console
OpenWeatherMap API key: OpenWeatherMap
RapidAPI keys for crime data, COVID-19 statistics, and sunrise/sunset times: RapidAPI

4. Create a .env file in the root directory and add your API keys.

GOOGLE_MAPS_API_KEY=your_google_maps_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
RAPIDAPI_KEY=your_rapidapi_key

## Features
- Display current weather information (temperature, rain volume) for a given city.
- Show the location of the city on a Google Map.

## Usage
1. Run the application.

npm start
The server will start running on http://localhost:3000.

2. Open your browser and navigate to http://localhost:3000.

3. Enter a city name in the search bar to get weather information, location details, and additional data.

## Endpoints
/: Home page with a search bar to enter the city name.
/location: Returns the latitude and longitude of a given city using the Google Maps Geocoding API.
/weather: Displays weather information for the specified city using the OpenWeatherMap API.
/extra-data: Fetches crime data for a specific location using the Jgentes Crime Data API.
/extra-data2: Retrieves COVID-19 statistics for different regions using the COVID-19 Statistics API.
/extra-data3: Gets sunrise and sunset times for a particular location using the Sunrise Sunset Times API.

## Dependencies
Express: Web framework for Node.js.
https: Module for making HTTP requests.
fetch: A lightweight module for making HTTP requests (included in modern browsers).

## Note
Ensure that you have a stable internet connection and valid API keys for the application to work correctly.
