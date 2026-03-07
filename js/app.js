// Telegram Mini App init
window.addEventListener("load", () => {

if (window.Telegram && window.Telegram.WebApp) {

const tg = window.Telegram.WebApp;

tg.ready();

// пробуем fullscreen при первом тапе
document.addEventListener("click", () => {
tg.requestFullscreen();
}, { once: true });

}

});


function renderRow(id,data){

const row=document.getElementById(id)

data.forEach(movie=>{

const div=document.createElement("div")
div.className="poster"

div.innerHTML=`
<img src="${movie.poster}" alt="${movie.title}">
`

div.onclick=()=>{
window.location.href=playerLink
}

row.appendChild(div)

})

}


renderRow("popular",movies.popular)
renderRow("series",movies.series)
renderRow("comedy",movies.comedy)
renderRow("action",movies.action)
