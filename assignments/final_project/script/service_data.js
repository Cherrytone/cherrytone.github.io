function servicePage(){
var serviceRequest = new XMLHttpRequest();
var serviceData = JSON.parse(service.json);
serviceRequest.open('GET', "script/service.json", true);
serviceRequest.send();
serviceRequest.onload =  function() {
    var data = serviceData["service"];
    var serviceHTML = "";
    console.log = serviceData;
            var type = type[i]["service"];
            var price = price[i]["price"];
            var eventHTML = '<ul>';
            for (var j = 0; j < service[i].events.length; j++) {
                var event = service[i].events[j];
            }
            townHTML = townHTML + `<div class="city"><a href=${link}.html><div class="city_info"><p class="name">${name}</p><div class="images"><img src="${imgSrc}" /></div>
                        <ul class="list">
                            <li>Service:<span class="motto">${type}</span></li>
                            <li>Price:<span class="year">${price}</span></li></ul>
                    </div>`;
            }
        document.getElementById("service_info").innerHTML= townHTML;
}
