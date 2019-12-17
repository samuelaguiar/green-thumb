import {
  GET_PLANT,
  GET_PLANTS,
  PLANTS_RECIEVED,
  PLANT_RECIEVED,
  POST_CONTACT
} from "../constants/data";

export const getPlant = id => ({
  type: GET_PLANT,
  payload: { id }
});

export const getPlants = (sunlight, water, pets) => ({
  type: GET_PLANTS,
  payload: { sunlight, water, pets }
});

export const plantRecieved = data => ({
  type: PLANT_RECIEVED,
  payload: { data }
});

export const plantsRecieved = data => ({
  type: PLANTS_RECIEVED,
  payload: { data }
});

export const postContact = (name, email, id) => ({
  type: POST_CONTACT,
  payload: { name, email, id }
});
