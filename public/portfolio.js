

document.getElementById("topImg").src = "../img/portfoliotop.png";
document.getElementById("topcss").href = "portfolio.css";

const works = [
    {
        imgsrc : `../img/catsmart.png`,
        title : `Pet store`,
        discription : `Re-designed Petsmart`,
        link : `https://stellach90.github.io/webstore/#`
    },
    {
        imgsrc : `../img/banner4.png`,
        title : `Green P`,
        discription : `Re-designed Green P`,
        link : `greenp`
    },
    {
        imgsrc : `../img/starbucks.png`,
        title : `Starbucks`,
        discription : `Application re-designed`,
        link : `starbucks`
    },
    {
        imgsrc : `../img/minions.png`,
        title : `3D Minions`,
        discription : `Chessboard (MAYA)`,
        link : `minions`
    },
    {
        imgsrc : `../img/wine.png`,
        title : `3D cheese plate`,
        discription : `Cheese plate and wine (MAYA)`,
        link : `wine`
    },
    {
        imgsrc : `../img/creamysnug.png`,
        title : `Creamy snug`,
        discription : `Brand marketing & Design`,
        link : `creamysnug`
    },
    {
        imgsrc : `../img/fineart.png`,
        title : `Fine art`,
        discription : `Paintings, sculptures `,
        link : `fineart`
    }
    
]

function getworkAsHtmlString(work) {

    return `<article class="work">
    <a href="${work.link}">
    <div>
        <div class="pf-img" style="background-image: url(${work.imgsrc});">
        <h3 class="text1">${work.title}</h3>
        <p class="text2">${work.discription}</p></div></div>
    
    </a>
    </article>`;
};

function renderWorks(arrToRender) {
    const arrOfHtmlworks = arrToRender.map(getworkAsHtmlString);
    const strOfHtmlworks = arrOfHtmlworks.join('\n');
      
    document.getElementById('works').innerHTML = strOfHtmlworks;
};

renderWorks(works);


function topImage(x) {
    if (x.matches) {
        document.getElementById("topImg").src = "../img/portfoliotop-m.png";
    } else {
        document.getElementById("topImg").src = "../img/portfoliotop.png";
    }
  }
  
let x = window.matchMedia("(max-width: 767px)","(min-width: 767px)")
topImage(x)
x.addListener(topImage)
