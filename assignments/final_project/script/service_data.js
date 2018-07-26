function serviceHome(){
    var serviceRequest = new XMLHttpRequest();
    var serviceData = "https://cherrytone.github.io/assignments/final_project/script/service.json";
    serviceRequest.open('GET', serviceData, true);
    serviceRequest.send();
    serviceRequest.onload =  function() {
        var data = JSON.parse(serviceRequest.responseText);
        var typeHTML = "";
        var priceHTML ="";
        for (var t = 0; t < data.length; t++) {
             var type = data[t].type;
             var price = data[t].price;
        typeHTML = typeHTML + `<tr><td>${type}</td></tr>`;
        priceHTML = priceHTML + `<tr><td>${price}</td></tr>`;
        
        }
        document.getElementById("type_info").innerHTML= typeHTML;
        document.getElementById("price_info").innerHTML= priceHTML;
    }
}





