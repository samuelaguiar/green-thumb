import { PLANTS_RECIEVED, PLANT_RECIEVED } from "../constants/data";

const initialState = {
  plants: [],
  plant: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PLANT_RECIEVED:
      return {
        ...state,
        plant: action.payload.data
      };
    case PLANTS_RECIEVED:
      return {
        ...state,
        plants: action.payload.data
      };
    default:
      return state;
  }
}
