function serviceHome(){
    var serviceRequest = new XMLHttpRequest();
    var serviceData = "https://cherrytone.github.io/assignments/final_project/script/service.json";
    serviceRequest.open('GET', serviceData, true);
    serviceRequest.send();
    serviceRequest.onload =  function() {
        var serviceData = JSON.parse(serviceRequest.responseText);
        var service = serviceData["service"];
        for (var t = 0; t < service[t]; t++) {
             type = type[t];
        }
        service = `<tr><th scope="col">${service}</th></tr>`;

        document.getElementById("service_info").innerHTML= service;
    }
}



    


