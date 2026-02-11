🌦 Weather App

A simple weather application built using HTML, CSS, and JavaScript that fetches real-time weather data from the OpenWeatherMap API.
Users can search for any city and view current weather conditions instantly.

This project focuses on API integration, asynchronous JavaScript, and DOM manipulation.

🔹 Features

Search weather by city name

Displays:

Temperature (°C)

Humidity

Weather description

Real-time data using OpenWeatherMap API

Basic error handling for invalid city input

Simple and responsive UI

🔹 Tech Stack

HTML – Structure

CSS – Styling

JavaScript (ES6) – Logic & API handling

OpenWeatherMap API – Weather data

🔹 Project Structure
Weather-App/
│── index.html
│── style.css
│── script.js
│── README.md

🔹 How It Works

User enters a city name

JavaScript sends a request to OpenWeatherMap API

Weather data is fetched using fetch() and async/await

Data is dynamically rendered on the webpage

🔹 Setup & Usage

Clone the repository:

git clone https://github.com/your-username/weather-app.git


Open index.html in your browser

Enter a city name and click Search

🔹 API Configuration

This project uses the OpenWeatherMap API.

Get your free API key from: https://openweathermap.org/

Replace the API key in script.js:

const apiKey = "YOUR_API_KEY";


⚠️ Security Note:
The API key is exposed in client-side JavaScript. This approach is fine for learning projects but not recommended for production.

🔹 Limitations

No backend (client-side only)

API key is not secured

Shows only current weather (no forecast)

🔹 Future Improvements

Add 5-day weather forecast

Use a backend to secure API key

Add loading indicator and better error messages

Auto-detect user location

Deploy using GitHub Pages or Netlify

🔹 Learning Outcome

Working with REST APIs

Handling asynchronous operations in JavaScript

DOM manipulation

Basic frontend project structuring
