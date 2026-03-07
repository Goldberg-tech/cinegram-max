// Telegram Mini App init
window.addEventListener("DOMContentLoaded", () => {

if (!window.Telegram || !window.Telegram.WebApp) return;

const tg = window.Telegram.WebApp;

tg.ready();

// Fullscreen button handler (iPhone Telegram Mini App safe pattern)

const fullscreenBtn = document.getElementById("fullscreenBtn");

if (fullscreenBtn) {

fullscreenBtn.addEventListener("click", () => {

try {
tg.requestFullscreen();
} catch(e){
console.log("Fullscreen request failed:", e);
}

});

}

});


// Render movie rows

function renderRow(id,data){

const row=document.getElementById(id)

if(!row || !data) return;

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
