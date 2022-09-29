
// Botones para controlar
const botonVerPelis = document.getElementById("boton-ver-pelis");
const botonAñadirPelis = document.getElementById("boton-añadir-pelis");

// Clase pelicula
class Pelicula {
    constructor(nombre, tipo, minutos, genero, urlImage) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.minutos = minutos;
        this.genero = genero;
        this.urlImage = urlImage;
    }
    calcularDuracion() {
        var horas = (this.minutos / 60);
        var rhoras = Math.floor(horas);
        var minutos = (horas - rhoras) * 60;
        var rminutos = Math.round(minutos);        

        return rhoras + "h" + " " + rminutos + "m"
        }
}


const elPadrino = new Pelicula("El Padrino", "+16", 177, "Crimen/Drama", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFnUIGQQtTzUxD9Y19nl3uum8SZA6TSA8eWnJoPy1UdHVF8fDn");
const jurassicPark = new Pelicula("Jurassic Park", "ATP", 130, "Ciencia Ficción/Acción", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSVvdES4O7zcoqcxElrT5cy33kFcDe4a20EzyB91x24yYMReIpy");
const jujutsuKaisen = new Pelicula("Jujutsu Kaisen", "ATP", 84, "Acción/Fantasía", "https://img1.ak.crunchyroll.com/i/spire3/02c909684baa37d6ef70a9df742d58951610752067_main.jpg");



let peliculas = [jujutsuKaisen, elPadrino, jurassicPark];



localStorage.setItem("El padrino", JSON.stringify(elPadrino));
localStorage.setItem("Jurassic Park", JSON.stringify(jurassicPark));
localStorage.setItem("Jujutsu Kaisen", JSON.stringify(jujutsuKaisen));



function subirPelicula(nombreDePelicula, tipoDePelicula, minutosDePelicula, generoDePelicula) {
    const peliculaASubir = new Pelicula(nombreDePelicula, tipoDePelicula, minutosDePelicula, generoDePelicula)

    peliculaASubir ? localStorage.setItem(nombreDePelicula, JSONN.stringify(peliculaASubir)) : '';  // Ternario
}

function crearFormulario(){
    const formulario = document.createElement("form");

    //Creacion de labels
    const labelNombre = document.createElement("label");
    labelNombre.innerText = "Nombre de la película";
    labelNombre.setAttribute("for", "nombre"); 
    labelNombre.setAttribute("class", "formulario__label");

    const labelTipoPelicula = document.createElement("label");
    labelTipoPelicula.innerText = "Tipo de película";
    labelTipoPelicula.setAttribute("for", "tipoPelicula");
    labelTipoPelicula.setAttribute("class", "formulario__label");


    const labelMinutos = document.createElement("label");
    labelMinutos.innerText = "Minutos de duración";
    labelMinutos.setAttribute("for", "minutos");
    labelMinutos.setAttribute("class", "formulario__label");


    const labelGenero = document.createElement("label");
    labelGenero.innerText = "Género de la película";
    labelGenero.setAttribute("for", "genero");
    labelGenero.setAttribute("class", "formulario__label");

    const labelUrlImage = document.createElement("label");
    labelUrlImage.innerText = "Url de la imagen de la película";
    labelUrlImage.setAttribute("for", "urlImage");
    labelUrlImage.setAttribute("class", "formulario__label")


    //Creacion de inputs
    const inputNombrePelicula = document.createElement("input");
    inputNombrePelicula.setAttribute("type", "text");
    inputNombrePelicula.setAttribute("id", "nombrePelicula");
    inputNombrePelicula.setAttribute("class", "formulario__input");

    const inputTipoPelicula = document.createElement("input");
    inputTipoPelicula.setAttribute("type", "text");
    inputTipoPelicula.setAttribute("id", "tipoPelicula");
    inputTipoPelicula.setAttribute("class", "formulario__input");


    const inputMinutosPelicula = document.createElement("input");
    inputMinutosPelicula.setAttribute("type", "number");
    inputMinutosPelicula.setAttribute("id", "minutosPelicula");
    inputMinutosPelicula.setAttribute("class", "formulario__input");

    const inputGeneroPelicula = document.createElement("input");
    inputGeneroPelicula.setAttribute("type", "text");
    inputGeneroPelicula.setAttribute("id", "generoPelicula");
    inputGeneroPelicula.setAttribute("class", "formulario__input");


    const inputUrlImagePelicula = document.createElement("input");
    inputUrlImagePelicula.setAttribute("type", "text");
    inputUrlImagePelicula.setAttribute("id", "urlImagePelicula");
    inputUrlImagePelicula.setAttribute("class", "formulario__input");





    // Creo el boton volver atras 
    const botonVolverAtras = document.createElement('button');
    botonVolverAtras.setAttribute('class', 'button');
    botonVolverAtras.innerText = 'Volver Atras';
    botonVolverAtras.addEventListener('click', () => {
        botonAñadirPelis.style.display = "block";
        botonVerPelis.style.display = "block";
        formulario.style.display = 'none'
        botonVolverAtras.style.display = 'none';
    
    })

    //Creo el boton enviar
    const botonEnviar = document.createElement("button");
    botonEnviar.innerText = "Enviar";
    botonEnviar.setAttribute('class', 'formulario__boton');
    botonEnviar.addEventListener('click', (event) => {
        event.preventDefault(); //Evito que se recargue la pagina


        //Operador OR
        if(inputNombrePelicula.value === '' || inputTipoPelicula.value === '' || inputMinutosPelicula.value === '' || inputGeneroPelicula.value === '' || inputUrlImagePelicula.value === '') {
            formulario.setAttribute('style', 'border: 3px solid red');
            Swal.fire({
                title: 'Error!',
                text: 'Porfavor complete todos los campos',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        } else {
            const peliculaASubir = new Pelicula(inputNombrePelicula.value,
                inputTipoPelicula.value,
                inputMinutosPelicula.value,
                inputGeneroPelicula.value,
                inputUrlImagePelicula.value);
            localStorage.setItem(inputNombrePelicula.value, JSON.stringify(peliculaASubir));
            Swal.fire({
                title: 'Exito',
                text: 'La pelicula ha sido añadida a la base de datos',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            botonAñadirPelis.style.display = "flex";
            botonVerPelis.style.display = "flex";
            formulario.style.display = 'none';
        }
    });

    
    // Creo div para los botones
    let botonesContainer = document.createElement('div');
    botonesContainer.setAttribute('class', 'botones-container');
    botonesContainer.appendChild(botonEnviar);
    botonesContainer.appendChild(botonVolverAtras);    
;    

    //Agregar los inputs dentro del form
    formulario.appendChild(labelNombre);
    formulario.appendChild(inputNombrePelicula);
    formulario.appendChild(labelTipoPelicula);
    formulario.appendChild(inputTipoPelicula);
    formulario.appendChild(labelMinutos);
    formulario.appendChild(inputMinutosPelicula);
    formulario.appendChild(labelGenero);
    formulario.appendChild(inputGeneroPelicula);
    formulario.appendChild(labelUrlImage);
    formulario.appendChild(inputUrlImagePelicula);
    
    formulario.appendChild(botonesContainer);


    formulario.setAttribute('class', 'formulario')

    document.getElementById('bodyID').appendChild(formulario);

}




function crearListaPeliculas(){
    const titulo = document.createElement("h2");
    titulo.innerText = "Peliculas disponibles";
    titulo.setAttribute("class", "titulo")
    const listaPeliculas = document.createElement("ul");
    listaPeliculas.setAttribute('class', 'listaPeliculas');

    for( let i = 0; i < localStorage.length; i++) {
        let pelicula = localStorage.getItem(localStorage.key(i));
        pelicula = JSON.parse(pelicula);
        // Creo el etiqueta li
        const itemLista = document.createElement("li");
        itemLista.setAttribute('class', 'listaPeliculas__item');

        // Creo el etiqueta h3
        const nombrePelicula = document.createElement("h3");
        nombrePelicula.innerText = pelicula.nombre;
        nombrePelicula.setAttribute('class', 'listaPeliculas__item-nombre');

        // Creo el etiqueta img
        const imagenPelicula = document.createElement("img");
        imagenPelicula.setAttribute('src', pelicula.urlImage);
        imagenPelicula.setAttribute('class', 'listaPeliculas__item-imagen');


        itemLista.appendChild(imagenPelicula);
        itemLista.appendChild(nombrePelicula);

        listaPeliculas.appendChild(itemLista);
    }
    const botonVolverAtras = document.createElement('button');
    botonVolverAtras.setAttribute('class', 'button');
    botonVolverAtras.innerText = 'Volver Atras';
    botonVolverAtras.addEventListener('click', () => {
        botonAñadirPelis.style.display = "block";
        botonVerPelis.style.display = "block";
        listaPeliculas.style.display = 'none';
        titulo.style.display = 'none';
        botonVolverAtras.style.display = 'none';
    
    })
    document.getElementById('bodyID').appendChild(botonVolverAtras);
    document.getElementById('bodyID').appendChild(titulo);
    document.getElementById('bodyID').appendChild(listaPeliculas);
}


botonAñadirPelis.addEventListener("click", () => {
    botonAñadirPelis.style.display = "none";
    botonVerPelis.style.display = "none";

    crearFormulario();
})

botonVerPelis.addEventListener("click", () => {
    botonAñadirPelis.style.display = "none";
    botonVerPelis.style.display = "none";

    crearListaPeliculas();
});


