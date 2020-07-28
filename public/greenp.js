document.getElementById("topImg").src = "../img/greenp-top.jpg";
document.getElementById("topcss").href = "index.css";

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