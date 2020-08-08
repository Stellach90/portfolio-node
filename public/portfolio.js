//document.getElementsByTagName('link')[0].disabled = true;

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



//common

// const navButton = document.querySelector('.nav-button');
// const navOpen = document.querySelector('.nav-open');
// const close = document.querySelector('.close');
// const tl = new TimelineLite({paused: true, reversed :true});

// var screen_width = window.innerWidth;
// var e = document.querySelector('nav');

//original
// tl.to('.cover', 1,{
//     width: '60%', top: '0', objectPosition:'left', ease: Power2.easeOut
// })
// .to('nav', 1,{
//     height: '100%', ease: Power2.easeOut, backgroundColor: '#515253'
// }, '-=0.5')
// .fromTo('.nav-open', 0.7, {
//     opacity:0, x: 50, ease: Power2.easeOut
// }, {
//     opacity:1, x: 0, onComplete : function () {
//         navOpen.style.pointerEvents = 'auto'
//     }
    
// });


// if(screen_width <= 767){

//     tl.to('.cover', 1,{
//         width: '60%', top: '10vh', objectPosition:'left', ease: Power2.easeOut
//     })
//     .to('nav', 1,{
//         width: '60%',height: '100%', ease: Power2.easeOut, backgroundColor: '#515253'
//     }, '-=0.5')
//     .fromTo('.nav-open', 0.7, {
//         opacity:0, x: 50, ease: Power2.easeOut
//     }, {
//         opacity:1, x: 0, onComplete : function () {
//             navOpen.style.pointerEvents = 'auto'
//         }
        
//     });
//     } else {
//         tl.to('.cover', 1,{
//             width: '60%', top: '10vh', objectPosition:'left', ease: Power2.easeOut
//         })
//         .to('nav', 1,{
//             width: '40%',height: '100%', ease: Power2.easeOut, backgroundColor: '#515253'
//         }, '-=0.5')
//         .fromTo('.nav-open', 0.7, {
//             opacity:0, x: 50, ease: Power2.easeOut
//         }, {
//             opacity:1, x: 0, onComplete : function () {
//                 navOpen.style.pointerEvents = 'auto'
//             }
            
//         });
    
//     }

// navButton.addEventListener('click', ()=>{
//     if(tl.isActive()){
//         e.preventDefault();
//         e.stopImmediatePropagation();
//         return false;
//     }
//     toggleTween(tl)
// });



// close.addEventListener('click', ()=>{
//     if(tl.isActive()){
//         e.preventDefault();
//         e.stopImmediatePropagation();
//         return true;
//     }
//     toggleTween(tl)
// });

// function toggleTween(tween) {
//     tween.reversed() ? tween.play() : tween.reverse();
// }

// common finish

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

// const navSlide = () =>{
//     const burger = document.querySelector('.burger')
//     const nav = document.querySelector('.nav-links')
//     const cover = document.querySelector('.cover')
//     const container = document.querySelector('.container')

//     burger.addEventListener('click',()=>{
//         nav.classList.toggle('nav-active')
//         cover.classList.toggle('dimmer')
//         container.classList.toggle('dimmer')
//         burger.classList.toggle('toggle');
//     })
// }
// navSlide();
  