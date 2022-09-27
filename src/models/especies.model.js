"use strict";

class Especies {
    constructor(swapi_especies) {
        this.nombre = swapi_especies.name;
        this.clasificacion = swapi_especies.classification;
        this.designacion = swapi_especies.designation;
        this.estatura_promedio = swapi_especies.average_height;
        this.tiempo_vida_promedio = swapi_especies.average_lifespan;
        this.colores_ojos = swapi_especies.eye_colors;
        this.colores_cabello = swapi_especies.hair_colors;
        this.colores_piel = swapi_especies.skin_colors;
        this.lenguaje = swapi_especies.language;
        this.mundo_de_nacimiento = swapi_especies.homeworld;
        this.personas = swapi_especies.people;
        this.peliculas = swapi_especies.films;
        this.url = swapi_especies.url;
        this.fecha_creacion = swapi_especies.created;
        this.fecha_edicion = swapi_especies.edited;
    }
}

module.exports = Especies;
