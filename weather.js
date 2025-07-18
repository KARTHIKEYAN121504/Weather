const apikey = "3aa3a2cb3dd6592f0a55e97e114d9f3f";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
document.querySelector(".Main").style.display = "none";
document.querySelector(".error").style.display = "none";
async function checkWeather() {
  const city = document.getElementById("cityInput");
  const response = await fetch(url + `&appid=${apikey}` + `&q=${city.value}`);
    if (city.value == "") {
        document.querySelector(".Main").style.display = "none";
        document.querySelector(".error").style.display = "block";
        document.getElementById("errorMessage").innerHTML = "Please enter a city name.";
    }
    
    else {
        if (response.status == 404) {
            document.querySelector(".Main").style.display = "none";
            document.querySelector(".error").style.display = "block";
            document.getElementById("errorMessage").innerHTML = " City not found. Please enter a valid city name.";
        } else {
            document.querySelector(".Main").style.display = "block";
            document.querySelector(".error").style.display = "none";
            var data = await response.json();
            document.getElementById("city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML =
                Math.round(data.main.temp) + "°C";
            document.querySelector(".current-day").innerHTML =
                new Date().toLocaleString("en-US", { weekday: "long" });
            document.querySelector(".humidity").innerHTML =
                "Humidity:" + data.main.humidity + "%";
            document.querySelector(".wind").innerHTML =
                "Wind Speed:" + data.wind.speed + "km/h";
            const weather = data.weather[0].main;

            if (weather == "Clouds") {
                document.querySelector(".weather-icon").src = "images/clouds.png";
                document.querySelector(".Name").innerHTML = "Cloudy";
            } else if (weather == "Clear") {
                document.querySelector(".weather-icon").src = "images/clear.png";
                document.querySelector(".Name").innerHTML = "Sunny";
            } else if (weather == "Dizzle.png") {
                document.querySelector(".weather-icon").src = "images/drizzle.png";
                document.querySelector(".Name").innerHTML = "Drizzle";
            } else if (weather == "Rain") {
                document.querySelector(".weather-icon").src = "images/rain.png";
                document.querySelector(".Name").innerHTML = "Rainy";
            } else if (weather == "Mist") {
                document.querySelector(".weather-icon").src = "images/mist.png";
                document.querySelector(".Name").innerHTML = "Mist";
            } else if (weather == "Snow") {
                document.querySelector(".weather-icon").src = "images/snow.png";
                document.querySelector(".Name").innerHTML = "Snow";
            }
        }
    }

  console.log(data);
}
