let peliculas = ["Jujutsu Kaisen", "El padrino", "Jurassic Park"];
let admin = "administrador";
let cliente = "cliente";
let usuarioActual;


function ingreseUsuario(){
    usuarioActual= prompt("Ingrese que tipo de usuario es 1.administrador - 2.cliente");
    while(usuarioActual != admin && usuarioActual != cliente){
    usuarioActual= prompt("Reingrese que tipo de usuario es 1.administrador - 2.cliente")
    }
    if(usuarioActual === admin){
        alert("Bienvenido administrador, a continuación cargue una película a la página")
        let peliculaASubir = prompt("Ingrese el nombre de la película que desea subir")
        subirPelicula(peliculaASubir)
        alert("Se ha ingresado " + peliculaASubir + "." + " Las peliculas cargadas actualmente son " + " " +  peliculas)
    }
    else{
        alert("Bienvenido cliente, a continuación seleccione que pelicula desea ver " + mostrarPeliculas())
    }
}

function subirPelicula(nombreDePelicula){
    peliculas.push(nombreDePelicula)
}

function mostrarPeliculas(){
    let nombresDePeliculas = "";
    for(let i = 0; i < peliculas.length; i++){
        nombresDePeliculas = nombresDePeliculas + " " + peliculas[i]
    }return nombresDePeliculas 
}

































































ingreseUsuario()

