const apiKey ="e6ba12bf38a6850374e950ff2b655089";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
console.log(apiUrl);
const sBox = document.querySelector(".search input");
const sBtn = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`) ;
    var data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp +"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%"
    document.querySelector(".wind").innerHTML = data.main.wind + "km/h"
 
}
sBtn.addEventListener("click",()=>{
    checkWeather(sBox.value)
}
)