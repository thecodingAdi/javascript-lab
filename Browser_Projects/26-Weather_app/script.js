const apiKey = "2dfabfb2a7b17fd11fffe41c3c997daf";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        alert(error.message);
    }
}