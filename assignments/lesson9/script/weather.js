/*-------HOME PAGE CITY INFO-----*/
function cityHome(){
var cityRequest = new XMLHttpRequest();
var cityData = "https://byui-cit230.github.io/weather/data/towndata.json";
cityRequest.open('GET', cityData, true);
cityRequest.send();
cityRequest.onload =  function() {
    var townData = JSON.parse(cityRequest.responseText);
    var towns = townData["towns"];
    var townHTML = "";
    for (var i = 0; i < towns.length; i++) {
        if (i == 0 || i == 1 || i == 3){
        var name = towns[i]["name"];
        var motto = towns[i]["motto"];
        var year = towns[i]["yearFounded"];
        var pop = towns[i]["currentPopulation"];
        var annu_rain = towns[i]["averageRainfall"];
        var eventHTML = '<ul>';
        for (var j = 0; j < towns[i].events.length; j++) {
            var event = towns[i].events[j];
            eventHTML = eventHTML + `<li><span>${event}</span></li>`;
        }
        eventHTML = eventHTML + '</ul>';
        townHTML = townHTML + `<div class="city"><div class="city_info"><h1 class="name">${name}</h1>
                    <ul class="list">
                        <li>Motto:<span class="motto">${motto}</span></li>
                        <li>Year Founded:<span class="year">${year}</span></li>
                        <li>Population:<span class="pop">${pop}</span></li>
                        <li>Annual Rainfall:<span class="annu_rain">${annu_rain}</span></li>
                        <li>Local Events:<span class="event">${eventHTML}</li>
                    </ul></div></div>`;
        }
    }
    document.getElementById("town_list").innerHTML= townHTML;
    }
}
/*-------WEATHER SUMMARY-------*/
function franklinWeather(){
var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=76a3770e7164ef89df9f9ede671deeeb&units=imperial";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    document.getElementById("high").innerHTML = weatherData.main.temp_max;
    document.getElementById("low").innerHTML = weatherData.main.temp_min;
    document.getElementById("wind").innerHTML = weatherData.wind.speed;
    }
}
/*------------WIND CHILL------------*/
function windchill() {
    var high = parseFloat(document.getElementById("high").innerHTML);
    var low = parseFloat(document.getElementById("low").innerHTML);
    var s = parseFloat(document.getElementById("wind").innerHTML);
    var windchill = Math.round(computewindchill(high, low, s)); 

document.getElementById("windchill").innerHTML = windchill;
}
function computewindchill(high, low, s){
    var t = (high + low)/2;
    var windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, .016) + 0.4275 * t * Math.pow(s, .016);
    return windchill; 
}
/*-------FRANKLIN PAGE------*/
function franklin(){
    windchill();
    franklinWeather();
}


    