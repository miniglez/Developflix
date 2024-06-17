import peliculas from './peliculas.js'

const mostrarPelis = (generoContainer, generoId, ) => {
  const contenedor = document.getElementById(generoContainer)
  const listaPeliculas = peliculas.filter(peli => peli.genre_ids.includes(generoId))

  // listaPeliculas.forEach(peli => {
  //   const template = `<div class='peliculas'><img src=https://image.tmdb.org/t/p/w200${peli.poster_path} alt=${peli.original_title}/><h2>${peli.original_title}</h2><p>${peli.vote_count}</p></div>`
 
  //  Esto es innerHTML. Se usa bastante pero es menos segguro si no lo tenemos controlado   
  //  contenedor.innerHTML += template

  // insertAdjacentHTML es mucho más seguro que innerHTML. Es casi lo mismo
  //   contenedor.insertAdjacentHTML("beforeend", template) 
  // })

  // for(let peli of listaPeliculas) {
  //   const template = `<div class='peliculas'><img src=https://image.tmdb.org/t/p/w200${peli.poster_path} alt=${peli.original_title}/><h2>${peli.original_title}</h2><p>${peli.vote_count}</p></div>`
  //   contenedor.innerHTML += template
  // }

  contenedor.innerHTML = listaPeliculas.map(peli => `<div class='peliculas'><img src=https://image.tmdb.org/t/p/w200${peli.poster_path} alt=${peli.original_title}/><h2>${peli.original_title}</h2><p>${peli.vote_count}</p></div>`).join("")
}

mostrarPelis("genero-28", 28)
mostrarPelis("genero-53", 53)
mostrarPelis("genero-12", 12)


// Esta es la forma HARD MODE

// //filtrado de pelis por genero 
// const peliculaAccion = peliculas.filter(peli => peli.genre_ids.includes(28))
// const peliculaThriller = peliculas.filter(peli => peli.genre_ids.includes(53))
// const peliculaAdventures = peliculas.filter(peli => peli.genre_ids.includes(12))

// //contenedores
// const generoAccion = document.getElementById("genero-28")
// const generoThriller = document.getElementById("genero-53")
// const generoAdventures = document.getElementById("genero-12")

// const addtoHtml = (elementHTML, objetToAdd) => {
//   for (let peli of objetToAdd) {
//     const elementDiv = document.createElement("div")
//     const elementImg = document.createElement("img")
//     const elementP = document.createElement("p")
  
//     elementDiv.className = "peliculas"
//     elementImg.src = `https://image.tmdb.org/t/p/w200${peli.poster_path}`
//     elementImg.alt = peli.original_title
//     elementP.innerHTML = peli.original_title
//     elementDiv.appendChild(elementImg)
//     elementDiv.appendChild(elementP)

//     elementHTML.appendChild(elementDiv)

//   }
// }

// addtoHtml(generoAccion, peliculaAccion)









