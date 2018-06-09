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


