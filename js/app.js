function renderRow(id,data){

const row=document.getElementById(id)

data.forEach(movie=>{

const div=document.createElement("div")

div.className="poster"

div.innerHTML=`
<img src="${movie.poster}">
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
