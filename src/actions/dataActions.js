import {
  FETCH_PLANT,
  FETCH_PLANTS,
  PLANTS_RECIEVED,
  PLANT_RECIEVED,
  POST_CONTACT
} from "../constants/data";

export const fetchPlant = id => ({
  type: FETCH_PLANT,
  payload: { id }
});

export const fetchPlants = (sunlight, water, pets) => ({
  type: FETCH_PLANTS,
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
