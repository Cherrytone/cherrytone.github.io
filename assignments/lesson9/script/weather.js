var weatherRequest = new XMLHttpRequest();
var currentWeather = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=76a3770e7164ef89df9f9ede671deeeb&units=imperial";
weatherRequest.open('GET', currentWeather, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML=weatherData["main"]["temp"];
}
var cityRequest = new XMLHttpRequest();
var cityData = " https://byui-cit230.github.io/weather/data/towndata.json";
cityRequest.open('GET', cityData, true);
cityRequestRequest.send();
cityRequestRequest.onload =  function () {
    let weatherData = JSON.parse(cityRequestRequest.responseText);
    console.log(weatherData);
    document.getElementById("").innerHTML=[""][""];
}

