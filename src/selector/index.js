import { createSelector } from "reselect";

const getUI = state => state.ui;
const getData = state => state.data;

export const getSunlight = createSelector(getUI, ui => ui.sunlight);
export const getWater = createSelector(getUI, ui => ui.water);
export const getPets = createSelector(getUI, ui => ui.pets);
export const getFetchStatusObject = createSelector(getUI, ui => ui.fetchStatus);

export const getPlant = createSelector(getData, data => data.plant);
export const getPlants = createSelector(getData, data => data.plants);
