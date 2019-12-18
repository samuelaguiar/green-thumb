import {
  RESET_CONTACT,
  RESET_FILTERS,
  SET_FOWARD,
  SET_PETS,
  SET_SUNLIGHT,
  SET_WATER,
  START_APP,
  UPDATE_ERROR,
  UPDATE_FETCH_STATUS
} from "../constants/ui";

export const startApp = () => ({ type: START_APP });

export const setFoward = isFoward => ({
  type: SET_FOWARD,
  payload: { isFoward }
});

export const setSunlight = value => ({
  type: SET_SUNLIGHT,
  payload: { value }
});

export const setWater = value => ({
  type: SET_WATER,
  payload: { value }
});

export const setPets = value => ({
  type: SET_PETS,
  payload: { value }
});

export const updateError = (status, text) => ({
  type: UPDATE_ERROR,
  payload: { status, text }
});

export const updateFetchStatus = (type, status) => ({
  type: UPDATE_FETCH_STATUS,
  payload: { type, status }
});

export const resetFilters = () => ({ type: RESET_FILTERS });

export const resetContact = () => ({ type: RESET_CONTACT });
