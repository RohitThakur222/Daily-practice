const apiKey ="e6ba12bf38a6850374e950ff2b655089";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
console.log(apiUrl);
const sBox = document.querySelector(".search input");
const sBtn = document.querySelector(".search button");
const sImg = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`) ;
    var data =await response.json();
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp +"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
    if (data.weather[0].main == "cloud")
    {
        sImg.src="weather-app-img/clouds.png"
    }
    else if(data.weather[0].main == "clear")
    {
        sImg.src="weather-app-img/clear.png"
    }
    else if(data.weather[0].main == "drizzle")
    {
        sImg.src="weather-app-img/drizzel.png"
    }
    else if(data.weather[0].main == "humidity")
    {
        sImg.src="weather-app-img/humidity.png"
    }
    else if(data.weather[0].main == "mist")
    {
        sImg.src="weather-app-img/mist.png"
    }
    else if(data.weather[0].main == "rain")
    {
        sImg.src="weather-app-img/rain.png"
    }
    else (data.weather[0].main == "mist")
    {
        sImg.src="weather-app-img/mist.png"
    }
    document.querySelector(".weather").style.display ="block"
    
 
}
sBtn.addEventListener("click",()=>{
    checkWeather(sBox.value)
}
)