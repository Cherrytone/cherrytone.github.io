var nav = document.getElementById("nav_tabs");
var tabs = nav.getElementsByClassName("tabs");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
              });
      }