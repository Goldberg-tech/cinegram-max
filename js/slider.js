const hero=document.getElementById("hero")

let i=0

movies.popular.forEach(movie=>{

const img=document.createElement("img")

img.src=movie.poster

img.onclick=()=>{

window.location.href=playerLink

}

hero.appendChild(img)

})

const slides=hero.querySelectorAll("img")

slides.forEach((s,index)=>{

if(index!==0)s.style.display="none"

})

setInterval(()=>{

slides[i].style.display="none"

i=(i+1)%slides.length

slides[i].style.display="block"

},4000)
