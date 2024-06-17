import peliculas from './peliculas.js'

const actionHTML = document.getElementById("genero-28");
const thrillerHTML = document.getElementById("genero-53")
const adventureHTML = document.getElementById("genero-12")

const addFilmToList = (a) => {
    const arr = []
    for (let i of peliculas){
        if (i.genre_ids.find((element) => element == a)){
            arr.push(i)
        }
    }
    return arr
}

const actionList = addFilmToList(28)
const thrillerList = addFilmToList(53)
const adventureList = addFilmToList(12)

const addFilmToHTML = (elementHTML, objectToAdd) => {
for (let i of objectToAdd){
        const elementDIV = document.createElement("div")
        const elementIMG = document.createElement("img")
        //const elementP = document.createTextNode(i["original_title"])
        const elementP = document.createElement("p")

        elementDIV.className = "peliculas"
        elementIMG.src = "https://image.tmdb.org/t/p/w500" + i["poster_path"]
        elementP.innerHTML = i["original_title"]
        elementDIV.appendChild(elementIMG);
        elementDIV.appendChild(elementP);
        console.log(elementDIV)
        
        elementHTML.appendChild(elementDIV)
    }
    console.log(elementHTML)
}

addFilmToHTML(actionHTML, actionList)
addFilmToHTML(thrillerHTML, thrillerList)
addFilmToHTML(adventureHTML, adventureList)



