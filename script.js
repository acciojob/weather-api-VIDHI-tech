async function getCurrentWeather() {
  const apiKey = 'https://openweathermap.org/';
  const city = 'London';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    const weatherDescription = data.weather[0].description;
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.textContent = `Current weather in ${city}: ${weatherDescription}`;
  } catch (error) {
    console.log('An error occurred while fetching the weather data:', error);
  }
}
