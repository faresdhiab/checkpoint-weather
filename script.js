// Replace this with your actual API key
const apiKey = 'eebce104f8c5afdd26d335e75fd1c077';

async function getWeather() {
  const city = document.getElementById('city-input').value; // Get city name from input field

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); // Parse the JSON response

    // Extract the relevant data from the response
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;

    // Display the weather information on the page
    document.getElementById('weather-output').innerHTML = `
      <h2>Weather in ${location}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Condition: ${description}</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('weather-output').innerHTML = `<p>Unable to retrieve weather data. Please try again later.</p>`;
  }
}

// Add event listener to the button to trigger the getWeather function on click
document.getElementById('get-weather-btn').addEventListener('click', getWeather);
