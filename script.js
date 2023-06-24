function getCurrentWeather() {
  // Replace YOUR_API_KEY with your actual API key obtained from OpenWeatherMap
  const apiKey = 'YOUR_API_KEY';
  const city = 'London';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Make an HTTP request to the OpenWeatherMap API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract the weather description from the API response
      const weatherDescription = data.weather[0].description;

      // Update the weatherData div with the weather information
      const weatherDataDiv = document.getElementById('weatherData');
      weatherDataDiv.textContent = `Current weather in ${city}: ${weatherDescription}`;
    })
    .catch(error => {
      console.log('An error occurred while fetching the weather data:', error);
    });
}
