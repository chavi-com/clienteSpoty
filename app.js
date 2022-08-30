import {consumirCanciones} from './servicio2.js'


import {pintarCanciones} from './servicio.js'


let canciones= await consumirCanciones()
pintarCanciones(canciones)

