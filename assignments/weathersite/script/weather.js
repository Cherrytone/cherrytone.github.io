function cityHome(){
var cityRequest = new XMLHttpRequest();
var cityData = "https://byui-cit230.github.io/weather/data/towndata.json";
cityRequest.open('GET', cityData, true);
cityRequest.send();
cityRequest.onload =  function() {
    var townData = JSON.parse(cityRequest.responseText);
    var towns = townData["towns"];
    var townHTML = "";
    var goodCities = ["franklin", "springfield", "greenville"];
    for (var i = 0; i < towns.length; i++) {
        if (goodCities.indexOf(towns[i].name.toLowerCase()) > -1) {
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
            var imgSrc = "images/" + name.toLowerCase() + "-events.jpeg";
            eventHTML = eventHTML + '</ul>';
            townHTML = townHTML + `<div class="city"><div class="city_info"><p class="name">${name}</p><div class="images"><img src="${imgSrc}" /></div>
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



    