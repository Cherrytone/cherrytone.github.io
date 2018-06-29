var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=76a3770e7164ef89df9f9ede671deeeb&units=imperial";
    weatherRequest.open('GET', apiURL, true);
    weatherRequest.send();
    weatherRequest.onload =  function () {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        var icon = weatherData.weather[0].icon;
        let iconSrc = "https://openweathermap.org/img/w/"+icon+".png";
        document.getElementById("current_temp").innerHTML = weatherData.main.temp;
        document.getElementById("icon").setAttribute("src", iconSrc); 
        document.getElementById("sky").innerHTML = weatherData.weather[0].description;
        document.getElementById("wind").innerHTML = weatherData.wind.speed;
        }