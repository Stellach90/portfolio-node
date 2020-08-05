document.getElementById("topImg").src = "../img/mainpage_cover4.png";
document.getElementById("topcss").href = "index.css";

const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');
const close = document.querySelector('.close');
const tl = new TimelineLite({paused: true, reversed :true});


var screen_width = window.innerWidth;
var e = document.querySelector('nav');

//original
// tl.to('.cover', 1,{
//     width: '60%', top: '0', objectPosition:'left', ease: Power2.easeOut
// })
// .to('nav', 1,{
//     width: '40%',height: '100%', ease: Power2.easeOut, backgroundColor: '#515253'
// }, '-=0.5')
// .fromTo('.nav-open', 0.7, {
//     opacity:0, x: 50, ease: Power2.easeOut
// }, {
//     opacity:1, x: 0, onComplete : function () {
//         navOpen.style.pointerEvents = 'auto'
//     }
    
// });



if(screen_width <= 767){

tl.to('.cover', 1,{
    width: '60%', top: '0', objectPosition:'left', ease: Power2.easeOut
})
.to('nav', 1,{
    width: '60%',height: '100%', ease: Power2.easeOut, backgroundColor: '#515253'
}, '-=0.5')
.fromTo('.nav-open', 0.7, {
    opacity:0, x: 50, ease: Power2.easeOut
}, {
    opacity:1, x: 0, onComplete : function () {
        navOpen.style.pointerEvents = 'auto'
    }
    
});
} else {
    tl.to('.cover', 1,{
        width: '60%', top: '0', objectPosition:'left', ease: Power2.easeOut
    })
    .to('nav', 1,{
        width: '40%',height: '100%', ease: Power2.easeOut, backgroundColor: '#515253'
    }, '-=0.5')
    .fromTo('.nav-open', 0.7, {
        opacity:0, x: 50, ease: Power2.easeOut
    }, {
        opacity:1, x: 0, onComplete : function () {
            navOpen.style.pointerEvents = 'auto'
        }
        
    });

}



navButton.addEventListener('click', ()=>{
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tl)
});



close.addEventListener('click', ()=>{
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return true;
    }
    toggleTween(tl)
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}


const navSlide = () =>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const cover = document.querySelector('.cover')
    const navLink = document.querySelectorAll('.nav-links li a')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
        cover.classList.toggle('dimmer')
        // burger animation
        burger.classList.toggle('toggle');
    })

    

    
}
navSlide();

// const nav = document.querySelector('.test');
// function toggle_visibility(nav) {
//     var screen_width = window.innerWidth;
//     var e = document.querySelector('nav');
//     if(screen_width <= 767) {
//         e.style.width = '60%';
//     }
//     else {
//         e.style.width = '40%';
//     }
// }
