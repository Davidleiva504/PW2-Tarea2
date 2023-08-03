// app.js

class Pelicula {
    constructor(titulo, director, genero) {
      this.titulo = titulo;
      this.director = director;
      this.genero = genero;
    }
  }
  
  const listaPeliculas = [];
  
  function agregarPelicula(titulo, director, genero) {
    const pelicula = new Pelicula(titulo, director, genero);
    listaPeliculas.push(pelicula);
  }
  
  function mostrarListaPeliculas() {
    listaPeliculas.forEach((pelicula, index) => {
      console.log(`[${index + 1}] Título: ${pelicula.titulo}, Director: ${pelicula.director}, Género: ${pelicula.genero}`);
    });
  }
  
  // Ejemplo de uso
  agregarPelicula("Pelicula: Harry Potter y la Orden del Fenix", "Director:David Yates", "Género Fantasia");
  agregarPelicula("Pelicula: Harry Potter y el prisionero de Azkaban", "Director:Alfonso Cuarón", "Género Fantasia");
  
  
  console.log("Lista de Películas:");
  mostrarListaPeliculas();
  