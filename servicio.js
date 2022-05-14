// pasos para consumir  una api
//!. adonde voy(conoser uri del servicio o api a consumir)

const URI='https://api.spotify.com/v1/artists/5EvFsr3kj42KNv97ZEnqij/top-tracks?market=US'

const TOKEN="Bearer BQAT_igP4wWAavy6Wqwk_j58zOdgzruF-0XDfaltKD9kQyuI-ydmK3IqONpuQw-ZnES4KJFJqbW-ynHJpGZYfewDdjeRwye7IARQqReH0YA2f27IZuxAxbogPpS6JZ1ohEWV-lBqSMS4MtYK1wRpiy9FtJmwjFA20Xw"
//2. armo la peticion(que voy hacer ?)
const PETICION ={
    mthod:"GET",
    headers:{Authorization:TOKEN}

}

//3. consumir el api

fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json()) //garantizo el formato json
})
.then(function(respuesta){
    pintarCanciones(respuesta)  //gestionar respuesta
})
.catch(function(respuesta){
    //console.log(respuesta) // muestro el fallo si no se consumio el api
})

//funcion para pintar la info del api
function pintarCanciones(canciones){
    console.log(canciones)
    console.log(canciones.tracks)
    let fila=document.getElementById("fila")

    //recorro arreglo
    canciones.tracks.forEach(function(cancion){
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna para cada cancion
        let columna=document.createElement("div")
        columna.classList.add("col")

        //targeta
        let targeta=document.createElement("div")
        targeta.classList.add("card","h-100")
        
        let name=document.createElement("h2")
        name.textContent=cancion.name
        name.classList.add("text-center")

        //creo foto
        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //creo el audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")


        //padres e Hijos
        targeta.appendChild(name)
        targeta.appendChild(foto)
        targeta.appendChild(audio)
        columna.appendChild(targeta)
        fila.appendChild(columna)
    })

}














