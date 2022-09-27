"use strict";

const planet_services = require("../services/planeta.service");

module.exports.save_planet = async (event) => {
  console.log("[POST - CONTROLLER] save_plnet");
  try {
    const { planet_id } = JSON.parse(event.body);
    const new_planet = await planet_services.save_planet(planet_id);

    return {
      statusCode: 200,
      body: JSON.stringify(new_planet),
    };
  } catch (error) {
    return {
      status: 400,
      error: error.message,
    };
  }
};

module.exports.get_planet_by_id_from_db = async (event) => {
  console.log("[GET - CONTROLLER] get_planet_by_id_from_db");
  try {
    const { id } = event.pathParameters;
    const planet = await planet_services.get_planet_by_id_from_db(id);

    return {
      statusCode: 200,
      body: JSON.stringify(planet),
    };
  } catch (error) {
    return {
      status: 400,
      error: error.message,
    };
  }
};

module.exports.get_all_planets_from_db = async (event) => {
  console.log("[GET - CONTROLLER] get_plnets_from_db");

  try {
    const planets = await planet_services.get_all_planets_from_db();

    return {
      statusCode: 200,
      body: JSON.stringify(planets),
    };
  } catch (error) {
    return {
      status: 400,
      error: error.message,
    };
  }
};

module.exports.get_planet_by_id_from_swapi = async (event) => {
  console.log("[GET - CONTROLLER] get_plnet_by_id_from_swapi");

  try {
    const { id } = event.pathParameters;
    const planet = await planet_services.get_planet_by_id_from_swapi(id);

    return {
      statusCode: 200,
      body: JSON.stringify(planet),
    };
  } catch (error) {
    return {
      status: 400,
      error: error.message,
    };
  }
};
