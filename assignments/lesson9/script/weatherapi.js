var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=76a3770e7164ef89df9f9ede671deeeb&units=imperial";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementsById("current-temp").innerHTML=weatherData["main"]["temp"];
}
