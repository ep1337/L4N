function topNavFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.classList.add('responsive');
    } else {
      x.classList.remove('responsive');
    }
}
