function serviceHome(){
    var serviceRequest = new XMLHttpRequest();
    var serviceData = "https://cherrytone.github.io/assignments/final_project/script/service.json";
    serviceRequest.open('GET', serviceData, true);
    serviceRequest.send();
    serviceRequest.onload =  function() {
        var serviceData = JSON.parse(serviceRequest.responseText);
        var type = serviceData["type"];
        var price = serviceData["price"];
        var allHTML = "";
        for (var t = 0; t < type[t]; t++) {
             type = type[t];
        }
        for (var p = 0; p < price[p]; p++) {
             price = price[p];
            }
        allHTML = `<td id=${type}></td>
                   <td id=${price}></td>`;

        document.getElementById("service_info").innerHTML= allHTML;
    }
}





