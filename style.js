function topNavFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.classList.add('responsive');
    } else {
      x.classList.remove('responsive');
    }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}