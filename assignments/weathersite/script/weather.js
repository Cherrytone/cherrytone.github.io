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
        var images = '<img';
        var imagesSrc = ["images/donuts.jpeg", "images/green.jpg", "images/butterfly.jpg"];
        for (var j = 0; j < towns[i].events.length; j++) {
            var event = towns[i].events[j];
            eventHTML = eventHTML + `<li><span>${event}</span></li>`;
        }
        for (var p = 0; p < imagesSrc[p].length; p++) {
            var imagesSrc = imagesSrc[p];
            images = images  + `src="${imagesSrc}">`;
        }
        eventHTML = eventHTML + '</ul>';
        townHTML = townHTML + `<div class="city"><div class="city_info"><h1 class="name">${name}</h1><div class="images">${images}</div>
                    <ul class="list">
                        <li>Motto:<span class="motto">${motto}</span></li>
                        <li>Year Founded:<span class="year">${year}</span></li>
                        <li>Population:<span class="pop">${pop}</span></li>
                        <li>Annual Rainfall:<span class="annu_rain">${annu_rain}</span></li>
                        <li>Local Events:<span class="event">${eventHTML}</li>
                    </ul></div></div>`;
        }
    }
        document.getElementById("town_info").innerHTML= townHTML;
    }
}



    