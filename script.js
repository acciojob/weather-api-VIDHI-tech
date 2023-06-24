//your JS code here. If required.
document.getElementById("getWeatherButton").addEventListener("click", function() {
      // Make an HTTP request to the weather API
      fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch weather data.");
          }
        })
        .then(function(data) {
          // Extract the weather information from the API response
          const weather = data.weather[0].main;

          // Update the weatherData div with the weather information
          document.getElementById("weatherData").textContent = `Current weather in London: ${weather}`;
        })
        .catch(function(error) {
          console.error(error);
        });
    });