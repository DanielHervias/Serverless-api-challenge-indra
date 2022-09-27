class Peliculas {
  constructor(swapi_pelicula) {
    this.titulo = swapi_pelicula.title;
    this.id_episodio = swapi_pelicula.episode_id;
    this.texto_comienzo = swapi_pelicula.opening_crawl;
    this.director = swapi_pelicula.director;
    this.productor = swapi_pelicula.producer;
    this.fecha_estreno = swapi_pelicula.release_date;
    this.especies = swapi_pelicula.species;
    this.naves = swapi_pelicula.starships;
    this.vehiculos = swapi_pelicula.vehicles;
    this.personajes = swapi_pelicula.characters;
    this.planetas = swapi_pelicula.planets;
    this.url = swapi_pelicula.url;
    this.fecha_creacion = swapi_pelicula.created;
    this.fecha_edicion = swapi_pelicula.edited;
  }
}

module.exports = Peliculas;
