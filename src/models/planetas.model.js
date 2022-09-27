"use strict";

class Planetas {
  constructor(planet_id, swapi_planeta) {
    this.id = planet_id;
    this.clima = swapi_planeta.climate;
    this.creado = swapi_planeta.created;
    this.diametro = swapi_planeta.diameter;
    this.editado = swapi_planeta.edited;
    this.peliculas = swapi_planeta.films;
    this.gravedad = swapi_planeta.gravity;
    this.nombre = swapi_planeta.name;
    this.periodo_orbital = swapi_planeta.orbital_period;
    this.poblacion = swapi_planeta.population;
    this.residentes = swapi_planeta.residentes;
    this.periodo_rotacion = swapi_planeta.rotation_period;
    this.superficie_agua = swapi_planeta.surface_water;
    this.terreno = swapi_planeta.terrain;
    this.url = swapi_planeta.url;
  }
}

module.exports = Planetas;
