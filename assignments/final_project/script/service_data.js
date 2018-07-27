function serviceHome(){
    var serviceRequest = new XMLHttpRequest();
    var serviceData = "https://cherrytone.github.io/assignments/final_project/script/service.json";
    serviceRequest.open('GET', serviceData, true);
    serviceRequest.send();
    serviceRequest.onload =  function() {
        var data = JSON.parse(serviceRequest.responseText);
        var allHTML ="";
        for (var t = 0; t < data.length; t++) {
             var type = data[t].type;
             var price = data[t].price;
        allHTML = allHTML + `<li class="reg_ul">${type}</li><li>${price}</li>`;
        
        }
        document.getElementById("allHTML").innerHTML= allHTML;
    }
}




