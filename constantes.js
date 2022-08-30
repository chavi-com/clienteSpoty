import { generarToken } from "./servicioToken.js"


//1. PA ONDE VOY? (CONOCER URI DEL SERVICIO O API A CONSUMIR)
export const URI_TOP_CANCIONES='https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=US'

//1.1 uri del servicio que genera tokens
export const URI_GENERAR_TOKEN='https://accounts.spotify.com/api/token'

//NOTA: DATOS DE ENVIO (POST)
const DATO1="client_id=ca73dd69551e488aa81e484470f5bc46"
const DATO2="client_secret=f2fd8c3050fa4ad6a91b08b759875bc0"
const DATO3="grant_type=client_credentials"

const DATOS_PETICION=`${DATO1}&${DATO2}&${DATO3}`

export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}



//2. ARMO LA PETICION (que vas a hacer ome?)
//llamoa la funcion que trae el token
let token= await generarToken() 
const TOKEN=token.token_type+" "+token.access_token;

export const PETICION_TOP_CANCIONES={
    method:"GET",
    headers:{Authorization:TOKEN}
}