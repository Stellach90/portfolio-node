document.getElementById("topImg").src = "../img/starbucks-topbanner.png";
document.getElementById("topcss").href = "portfolio.css";

function invision(){
    window.open("https://projects.invisionapp.com/prototype/ckcj7mjas004lia012vx47ynz/play", "_blank")
}


const navSlide = () =>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const cover = document.querySelector('.cover')
    const container = document.querySelector('.container')
    const navLink = document.querySelectorAll('.nav-links li a')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
        cover.classList.toggle('dimmer')
        container.classList.toggle('dimmer')
        // burger animation
        burger.classList.toggle('toggle');
    })

    

    
}
navSlide();