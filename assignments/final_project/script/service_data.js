function serviceHome(){
        var serviceDate = 
            { "type": ["Tube/Tire Change","Wheel True","Replace/Adjust Brake Pads","Adjust Derailleur","Flat Attack added to tube","Install chain","Bleed Hydralic Disc Brake","Tape Drop bars","Front Shock Oil/Seal change","Professional Bike Fit","Bike Restoration"],
            "price": ["$4.99-$6.99 (Tube/tire not included)","$12.99 - $29.99","$9.99-$14.99","$14.99","$6.99 per tube (Tube not included)","$14.99 ($9.99 with Tune-Up)","$14.99 ($9.99 with Tune-Up)","$14.99","$74.99","$149.99","Starting at $299.99(call for details)"]
            }
    var j = JSON.parse(serviceDate);
    document.getElementById("service_info").innerHTML= j;

}



