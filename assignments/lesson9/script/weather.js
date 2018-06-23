/*var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=76a3770e7164ef89df9f9ede671deeeb&units=imperial";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementsByClassName("temp").innerHTML=weatherData["main"]["temp"];
}*/
var cityRequest = new XMLHttpRequest();
var cityData = "https://byui-cit230.github.io/weather/data/towndata.json";
cityRequest.open('GET', cityData, true);
cityRequest.send();
cityRequest.onload =  function() {
    var townData = JSON.parse(cityRequest.responseText);
//    console.log(townData);
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
        townHTML = townHTML + `<h1 class="name">${name}</h1>
                    <ul class="town_info">
                        <li>Motto:<span class="motto">${motto}</span></li>
                        <li>Year Founded:<span class="year">${year}</span></li>
                        <li>Population:<span class="pop">${pop}</span></li>
                        <li>Annual Rainfall:<span class="annu_rain">${annu_rain}</span></li>
                        <li>Local Events:<span class="event">${eventHTML}</li>
                    </ul>`;
        }
    }
    document.getElementById("town_list").innerHTML= townHTML;
}
      
    