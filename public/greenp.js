document.getElementById("topImg").src = "../img/greenp-top.jpg";
document.getElementById("topcss").href = "portfolio.css";

const works = [];
for (let i = 1; i < 17; i++){
    works.push({imgsrc : `../img/W1/${i}.png`
});
}

function getworkAsHtmlString(work) {

    return `<article class="work">
        <img src="${work.imgsrc}" alt="Work Image">
        </article>`;
};

function renderWorks(arrToRender) {
    const arrOfHtmlworks = arrToRender.map(getworkAsHtmlString);
    const strOfHtmlworks = arrOfHtmlworks.join('\n');
      
    document.getElementById('files').innerHTML = strOfHtmlworks;
};

renderWorks(works);


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