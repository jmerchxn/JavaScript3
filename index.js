let admin = "administrador";
let cliente = "cliente";
let usuarioActual;

class Pelicula {
    constructor(nombre, tipo, minutos, genero) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.minutos = minutos;
        this.genero = genero;
    }
    calcularDuracion() {
        var horas = (this.minutos / 60);
        var rhoras = Math.floor(horas);
        var minutos = (horas - rhoras) * 60;
        var rminutos = Math.round(minutos);        

        return rhoras + "h" + " " + rminutos + "m"
    }
}
const jujutsuKaisen = new Pelicula("Jujutsu Kaisen", "ATP", 84, "Acción/Fantasía");
const elPadrino = new Pelicula("El Padrino", "+16", 177, "Crimen/Drama");
const jurassicPark = new Pelicula("Jurassic Park", "ATP", 130, "Ciencia Ficción/Acción")
let peliculas = [jujutsuKaisen, elPadrino, jurassicPark];



function ingreseUsuario() {
    usuarioActual = prompt("Ingrese que tipo de usuario es 1.administrador - 2.cliente");
    while (usuarioActual != admin && usuarioActual != cliente) {
        usuarioActual = prompt("Reingrese que tipo de usuario es 1.administrador - 2.cliente")
    }
    if (usuarioActual === admin) {
        alert("Bienvenido administrador, a continuación cargue una película a la página")
        let nombreDePeliculaASubir = prompt("Ingrese el nombre de la película que desea subir")
        let tipoDePeliculaASubir = prompt("Ingrese el tipo de película")
        let minutosDePeliculaASubir = parseInt(prompt("Ingrese los minutos de duración de la película"))
        let generoDePeliculaASubir = prompt("Ingrese el género de la película")
        subirPelicula(nombreDePeliculaASubir, tipoDePeliculaASubir, minutosDePeliculaASubir, generoDePeliculaASubir)
        alert("Se ha ingresado " + nombreDePeliculaASubir + "." + " Las peliculas cargadas actualmente son :" + " " + mostrarPeliculas())
    }
    else {
        alert("Bienvenido cliente, a continuación seleccione que pelicula desea ver " + mostrarPeliculas())
    }
}

function subirPelicula(nombreDePelicula, tipoDePelicula, minutosDePelicula, generoDePelicula) {
    const peliculaASubir = new Pelicula(nombreDePelicula, tipoDePelicula, minutosDePelicula, generoDePelicula)
    peliculas.push(peliculaASubir)
}

function mostrarPeliculas() {
    let nombresDePeliculas = "";
    for (let i = 0; i < peliculas.length; i++) {
        nombresDePeliculas = nombresDePeliculas + " " + peliculas[i].nombre
    } return nombresDePeliculas
}



ingreseUsuario()

