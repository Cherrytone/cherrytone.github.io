function myFunction() {
    var x = document.getElementById("nav_tabs");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}