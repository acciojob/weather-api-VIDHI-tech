function getCurrentWeather() {
  const apiKey = 'https://openweathermap.org/api';
  const city = 'London';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherDescription = data.weather[0].description;
      const weatherDataDiv = document.getElementById('weatherData');
      weatherDataDiv.textContent = `Current weather in ${city}: ${weatherDescription}`;
    })
    .catch(error => {
      console.log('An error occurred while fetching the weather data:', error);
    });
}
