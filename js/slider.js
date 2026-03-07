const hero=document.getElementById("hero")

function renderHero(){

movies.popular.forEach((movie,i)=>{

const slide=document.createElement("div")
slide.className="hero-slide"

if(i===0) slide.classList.add("active")

slide.innerHTML=`
<img src="${movie.poster}">
<div class="hero-info">
<div class="hero-title">${movie.title}</div>
</div>
`

slide.onclick=()=>{
window.location.href=playerLink
}

hero.appendChild(slide)

})

}

renderHero()

let index=0

setInterval(()=>{

const slides=document.querySelectorAll(".hero-slide")

slides[index].classList.remove("active")

index++

if(index>=slides.length) index=0

slides[index].classList.add("active")

},4000)
