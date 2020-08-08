
document.getElementById("topImg").src = "../img/experiencetop.png";
document.getElementById("topcss").href = "portfolio.css";


function topImage(x) {
    if (x.matches) {
        document.getElementById("topImg").src = "../img/experiencetop-m.png";
    } else {
        document.getElementById("topImg").src = "../img/experiencetop.png";
    }
  }
  
let x = window.matchMedia("(max-width: 767px)","(min-width: 767px)")
topImage(x)
x.addListener(topImage)