"use strict";

const { default: axios } = require("axios");

const dynamo_services = require("./dynamodb.service");
const Planetas = require("../models/planetas.model");
const contants = require("../utils/constants");
const constants = require("../utils/constants");

module.exports.save_planet = async (planet_id) => {
  console.log("[POST - SERVICE] save_planet");

  const planet_swapi = await axios.get(`${contants.URL.PLANETS}/${planet_id}`);
  const swapi_planeta_adapted = new Planetas(planet_id, planet_swapi.data);
  await dynamo_services.put_item(
    constants.TABLES.PLANETS,
    swapi_planeta_adapted
  );

  return swapi_planeta_adapted;
};

module.exports.get_planet_by_id_from_db = async (planet_id) => {
  const planet = await dynamo_services.get_item_by_id(
    contants.TABLES.PLANETS,
    planet_id
  );
  return planet;
};

module.exports.get_planet_by_id_from_swapi = async (planet_id) => {
  const planet_swapi = await axios.get(`${contants.URL.PLANETS}/${planet_id}`);
  const planet_adapted = new Planetas(planet_id, planet_swapi.data);
  return planet_adapted;
};

module.exports.get_all_planets_from_db = async () => {
  const planets = await dynamo_services.get_all_items(contants.TABLES.PLANETS);
  return planets;
};
