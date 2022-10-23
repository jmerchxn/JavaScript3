// Botones para controlar
const botonVerPelis = document.getElementById("boton-ver-pelis");
const botonAñadirPelis = document.getElementById("boton-añadir-pelis");

// Clase pelicula
class Pelicula {
  constructor(
    idPelicula,
    nombre,
    tipo,
    minutos,
    genero,
    urlImage,
    popularidad,
    fechaLanzamiento,
    idiomas
  ) {
    this.idPelicula = idPelicula;
    this.nombre = nombre;
    this.tipo = tipo;
    this.minutos = minutos;
    this.genero = genero;
    this.urlImage = urlImage;
    this.popularidad = popularidad;
    this.fechaLanzamiento = fechaLanzamiento;
    this.idiomas = idiomas;
  }
  calcularDuracion() {
    var horas = this.minutos / 60;
    var rhoras = Math.floor(horas);
    var minutos = (horas - rhoras) * 60;
    var rminutos = Math.round(minutos);

    return rhoras + "h" + " " + rminutos + "m";
  }
}

function subirPelicula(
  idPelicula,
  nombreDePelicula,
  tipoDePelicula,
  minutosDePelicula,
  generoDePelicula,
  urlImage,
  popularidad,
  fechaLanzamiento,
  idiomas
) {
  const peliculaASubir = new Pelicula(
    idPelicula,
    nombreDePelicula,
    tipoDePelicula,
    minutosDePelicula,
    generoDePelicula,
    urlImage,
    popularidad ? popularidad : 'No disponible',
    fechaLanzamiento,
    idiomas
  );

  peliculaASubir
    ? localStorage.setItem(nombreDePelicula, JSON.stringify(peliculaASubir))
    : ""; // Ternario
}

function crearFormulario() {
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
  labelUrlImage.innerText = "Url de la imagen de la película (formato jpg, jpeg, png)";
  labelUrlImage.setAttribute("for", "urlImage");
  labelUrlImage.setAttribute("class", "formulario__label");

  const labelIdioma = document.createElement("label");
  labelIdioma.innerText = "Seleccione el idioma original de la película";
  labelIdioma.setAttribute("for", "idioma");
  labelIdioma.setAttribute("class", "formulario__label");

  const labelDate = document.createElement("label");
    labelDate.innerText = "Fecha de lanzamiento";
    labelDate.setAttribute("for", "date");
    labelDate.setAttribute("class", "formulario__label");

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

  // Selects for language
  const inputIdiomaPelicula = document.createElement("select");
  inputIdiomaPelicula.setAttribute("type", "text");
  inputIdiomaPelicula.setAttribute("id", "idioma");
  inputIdiomaPelicula.setAttribute("name", "idioma");
  inputIdiomaPelicula.setAttribute("class", "formulario__input");
  //options language
  const optionsLanguagueEnglish = document.createElement("option");
  const optionsLanguagueSpanish = document.createElement("option");
  const optionsLanguagueFrench = document.createElement("option");
  const optionsLanguagueGerman = document.createElement("option");
  const optionsLanguagueItalian = document.createElement("option");
  const optionsLanguagueJapanese = document.createElement("option");

  optionsLanguagueEnglish.setAttribute("value", "English");
  optionsLanguagueSpanish.setAttribute("value", "Spanish");
  optionsLanguagueFrench.setAttribute("value", "French");
  optionsLanguagueGerman.setAttribute("value", "German");
  optionsLanguagueItalian.setAttribute("value", "Italian");
  optionsLanguagueJapanese.setAttribute("value", "Japanese");

  optionsLanguagueEnglish.innerText = "English";
  optionsLanguagueSpanish.innerText = "Spanish";
  optionsLanguagueFrench.innerText = "French";
  optionsLanguagueGerman.innerText = "German";
  optionsLanguagueItalian.innerText = "Italian";
  optionsLanguagueJapanese.innerText = "Japanese";

  inputIdiomaPelicula.appendChild(optionsLanguagueEnglish);
  inputIdiomaPelicula.appendChild(optionsLanguagueSpanish);
  inputIdiomaPelicula.appendChild(optionsLanguagueFrench);
  inputIdiomaPelicula.appendChild(optionsLanguagueGerman);
  inputIdiomaPelicula.appendChild(optionsLanguagueItalian);
  inputIdiomaPelicula.appendChild(optionsLanguagueJapanese);

  const inputUrlImagePelicula = document.createElement("input");
  inputUrlImagePelicula.setAttribute("type", "text");
  inputUrlImagePelicula.setAttribute("id", "urlImagePelicula");
  inputUrlImagePelicula.setAttribute("class", "formulario__input");

    //Input date   

    const inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("id", "date");
    inputDate.setAttribute("class", "formulario__input");




  // Creo el boton volver atras
  const botonVolverAtras = document.createElement("button");
  botonVolverAtras.setAttribute("class", "button");
  botonVolverAtras.innerText = "Volver Atras";
  botonVolverAtras.addEventListener("click", () => {
    botonAñadirPelis.style.display = "block";
    botonVerPelis.style.display = "block";
    formulario.style.display = "none";
    botonVolverAtras.style.display = "none";
  });

  //Creo el boton enviar
  const botonEnviar = document.createElement("button");
  botonEnviar.innerText = "Enviar";
  botonEnviar.setAttribute("class", "formulario__boton");
  botonEnviar.addEventListener("click", (event) => {
    event.preventDefault(); //Evito que se recargue la pagina

    //Operador OR
    if (
      inputNombrePelicula.value === "" ||
      inputTipoPelicula.value === "" ||
      inputMinutosPelicula.value === "" ||
      inputGeneroPelicula.value === "" ||
      inputUrlImagePelicula.value === "" ||
      inputDate.value === "" ||
      inputIdiomaPelicula.value === ""
    ) {
      formulario.setAttribute("style", "border: 3px solid red");
      Swal.fire({
        title: "Error!",
        text: "Porfavor complete todos los campos",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      const idiomas = []
      idiomas.push({english_name:inputIdiomaPelicula.value})
      const peliculaASubir = new Pelicula(
        Math.random(),
        inputNombrePelicula.value,
        inputTipoPelicula.value,
        inputMinutosPelicula.value,
        inputGeneroPelicula.value,
        inputUrlImagePelicula.value,
        'No disponible',
        inputDate.value,    
        idiomas,
      );
      localStorage.setItem(
        inputNombrePelicula.value,
        JSON.stringify(peliculaASubir)
      );
      Swal.fire({
        title: "Exito",
        text: "La pelicula ha sido añadida a la base de datos",
        icon: "success",
        confirmButtonText: "Cool",
      });
      botonAñadirPelis.style.display = "flex";
      botonVerPelis.style.display = "flex";
      formulario.style.display = "none";
    }
  });

  // Creo div para los botones
  let botonesContainer = document.createElement("div");
  botonesContainer.setAttribute("class", "botones-container");
  botonesContainer.appendChild(botonEnviar);
  botonesContainer.appendChild(botonVolverAtras);
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
  formulario.appendChild(labelIdioma);
  formulario.appendChild(inputIdiomaPelicula);
    formulario.appendChild(labelDate);
    formulario.appendChild(inputDate);

  formulario.appendChild(botonesContainer);

  formulario.setAttribute("class", "formulario");

  document.getElementById("bodyID").appendChild(formulario);
}

function crearListaPeliculas() {
  const contenedorPeliculasAMostrar = document.createElement("div");
  const titulo = document.createElement("h2");
  titulo.innerText = "Peliculas disponibles";
  titulo.setAttribute("class", "titulo");
  const listaPeliculas = document.createElement("ul");
  listaPeliculas.setAttribute("class", "listaPeliculas");

  for (let i = 0; i < localStorage.length; i++) {
    let pelicula = localStorage.getItem(localStorage.key(i));
    pelicula = JSON.parse(pelicula);

    // Creo el etiqueta li
    const itemLista = document.createElement("li");
    itemLista.setAttribute("class", "listaPeliculas__item");

    // Creo el etiqueta h3
    const nombrePelicula = document.createElement("h3");
    nombrePelicula.innerText = pelicula.nombre;
    nombrePelicula.setAttribute("class", "listaPeliculas__item-nombre");

    // Creo el etiqueta img
    const imagenPelicula = document.createElement("img");
    imagenPelicula.setAttribute("src", pelicula.urlImage);
    imagenPelicula.setAttribute("class", "listaPeliculas__item-imagen");
    imagenPelicula.addEventListener("click", () => {
      Swal.fire({
        title: pelicula.nombre,
        html:
          "Popularidad:" +
          " " +
          pelicula.popularidad +
          "<br/> <br/>" +
          "Fecha de lanzamiento: " +
          pelicula.fechaLanzamiento +
          "<br/> <br />" +
          convertirLenguajes(pelicula.idiomas),

        imageUrl: pelicula.urlImage,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    });

    itemLista.appendChild(imagenPelicula);
    itemLista.appendChild(nombrePelicula);

    listaPeliculas.appendChild(itemLista);
  }
  const botonVolverAtras = document.createElement("button");
  botonVolverAtras.setAttribute("class", "button");
  botonVolverAtras.innerText = "Volver Atras";
  botonVolverAtras.addEventListener("click", () => {
    botonAñadirPelis.style.display = "block";
    botonVerPelis.style.display = "block";
    listaPeliculas.style.display = "none";
    titulo.style.display = "none";
    botonVolverAtras.style.display = "none";
  });
  contenedorPeliculasAMostrar.appendChild(botonVolverAtras);
  contenedorPeliculasAMostrar.appendChild(titulo);
  contenedorPeliculasAMostrar.appendChild(listaPeliculas);

  document.getElementById("bodyID").appendChild(contenedorPeliculasAMostrar);
}

botonAñadirPelis.addEventListener("click", () => {
  botonAñadirPelis.style.display = "none";
  botonVerPelis.style.display = "none";

  crearFormulario();
});

botonVerPelis.addEventListener("click", () => {
  botonAñadirPelis.style.display = "none";
  botonVerPelis.style.display = "none";

  crearListaPeliculas();
});

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=db39b95d322339896bfb5e78667f2021"
)
  .then((response) => response.json())
  .then((json) => guardarPeliculas(json.results))
  .catch((err) => console.log("solicitud fallida", err));

async function guardarPeliculas(peliculas) {
  for (let i = 0; i < peliculas.length; i++) {
    let peliculaAAgregar = peliculas[i];
    let detallesPelicula;

    await fetch(
      `https://api.themoviedb.org/3/movie/${peliculaAAgregar.id}{?api_key=db39b95d322339896bfb5e78667f2021`
    )
      .then((response) => response.json())
      .then((json) => (detallesPelicula = json));

    subirPelicula(
      peliculaAAgregar.id,
      peliculaAAgregar.title,
      "+" + peliculaAAgregar.genre_ids[0].toString(),
      100,
      "Indefinido",
      "https://image.tmdb.org/t/p/w500" + peliculaAAgregar.poster_path,
      detallesPelicula.popularity,
      detallesPelicula.release_date,
      detallesPelicula.spoken_languages
    );
  }
}

function convertirLenguajes(lenguajes) {
    console.log(lenguajes)
  let lenguajesConvertidos = "";
  for (let i = 0; i < lenguajes.length; i++) {
    lenguajesConvertidos =
      lenguajesConvertidos +
      convertirLenguajeAImagen(lenguajes[i].english_name);
  }
  console.log(lenguajes);
  return lenguajesConvertidos;
}

function convertirLenguajeAImagen(lenguaje) {
  let imagenDelLenguaje;
  console.log(lenguaje);

  switch (lenguaje) {
    case "English": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1600px-Flag_of_the_United_Kingdom.svg.png"  style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px" />';
      break;
    }
    case "Latin": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/800px-Bandera_de_Espa%C3%B1a.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px" />';
      break;
    }
    case "Hindi": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px" />';
      break;
    }
    case "Spanish": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/800px-Bandera_de_Espa%C3%B1a.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px" />';
      break;
    }
    case "French": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/270px-Flag_of_France.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px" />';
      break;
    }
    case "Korean": {
      imagenDelLenguaje =
        '<img src="https://us.123rf.com/450wm/seamartini/seamartini1812/seamartini181200158/112961376-fondo-de-bandera-de-corea-del-sur-con-textura-de-tela-s%C3%ADmbolo-nacional-del-pa%C3%ADs-de-textil-o-tela-tel.jpg?ver=6" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px" />';
      break;
    }
    case "Italian": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px" />';
      break;
    }
    case "Japanese": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px"/>';
      break;
    }
    case "German": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_%283-2_aspect_ratio%29.svg/220px-Flag_of_Germany_%283-2_aspect_ratio%29.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px"/>';
      break;
    }
    case "Polish": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/200px-Flag_of_Poland.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px"/>';
      break;
    }
    case "Mandarin": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px"/>';
    }
    case "Hebrew": {
      imagenDelLenguaje =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/2560px-Flag_of_Israel.svg.png" style="border: 1px solid black; width: 30px; height: 20px; margin-right: 4px"/>';
      break;
    }
  }
  return imagenDelLenguaje;
}
