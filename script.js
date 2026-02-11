async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "390e2a79dcbee0c99a4905f67bdcbcca"; // Replace with your key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temp: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById("result").innerHTML = `<p>City not found!</p>`;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>An error occurred.</p>`;
  }
}
