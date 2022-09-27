class Vehiculos {
  constructor(swapi_vehiculo) {
    this.nombe = swapi_vehiculo.name;
    this.modelo = swapi_vehiculo.model;
    this.clase = swapi_vehiculo.vehicle_class;
    this.manufacturero = swapi_vehiculo.manufacturer;
    this.largo = swapi_vehiculo.length;
    this.costo_creditos = swapi_vehiculo.cost_in_credits;
    this.num_tripulacion = swapi_vehiculo.crew;
    this.pasajeros = swapi_vehiculo.passengers;
    this.max_velocidad_atmosferica = swapi_vehiculo.max_atmosphering_speed;
    this.capacidad_carga = swapi_vehiculo.cargo_capacity;
    this.consumibles = swapi_vehiculo.consumables;
    this.peliculas = swapi_vehiculo.films;
    this.pilotos = swapi_vehiculo.pilots;
    this.url = swapi_vehiculo.url;
    this.fecha_creacion = swapi_vehiculo.created;
    this.fecha_edicion = swapi_vehiculo.edited;
  }
}

module.exports = Vehiculos;
