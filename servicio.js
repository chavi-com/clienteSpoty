

//funcion para pintar la info del api
export function pintarCanciones(canciones){
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














