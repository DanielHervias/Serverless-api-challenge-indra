"use strict";

class Naves {
  constructor(swapi_naves) {
    this.nombre = swapi_naves.name;
    this.modelo = swapi_naves.model;
    this.clase_nave = swapi_naves.starship_class;
    this.manufacturero = swapi_naves.manufacturer;
    this.costo_en_creditos = swapi_naves.cost_in_credits;
    this.largo = swapi_naves.length;
    this.tripulacion = swapi_naves.crew;
    this.pasajeros = swapi_naves.passengers;
    this.max_velocidad_atmosferica = swapi_naves.max_atmosphering_speed;
    this.calificacion_hiperimpulsor = swapi_naves.hyperdrive_rating;
    this.MGLT = swapi_naves.MGLT;
    this.capacidad_carga = swapi_naves.cargo_capacity;
    this.peliculas = swapi_naves.films;
    this.pilotos = swapi_naves.pilots;
    this.url = swapi_naves.url;
    this.fecha_creacion = swapi_naves.created;
    this.fecha_edicion = swapi_naves.edited;
  }
}

module.exports = Especies;
