class Personas {
  constructor(swapi_persona) {
    this.nombre = swapi_persona.name;
    this.fecha_nacimiento = swapi_persona.birth_year;
    this.colores_ojos = swapi_persona.eye_color;
    this.genero = swapi_persona.gender;
    this.colores_cabello = swapi_persona.hair_color;
    this.estatura = swapi_persona.height;
    this.masa_persona = swapi_persona.mass;
    this.colores_piel = swapi_persona.skin_color;
    this.mundo_de_nacimiento = swapi_persona.homeworld;
    this.peliculas = swapi_persona.films;
    this.especies = swapi_persona.species;
    this.naves = swapi_persona.starships;
    this.vehiculos = swapi_persona.vehicles;
    this.url = swapi_persona.url;
    this.fecha_creacion = swapi_persona.created;
    this.fecha_edicion = swapi_persona.edited;
  }
}

module.exports = Personas;
