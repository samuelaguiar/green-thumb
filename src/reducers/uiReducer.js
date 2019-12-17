import {
  SET_PETS,
  SET_SUNLIGHT,
  SET_WATER,
  UPDATE_ERROR,
  UPDATE_FETCH_STATUS
} from "../constants/ui";

const initialState = {
  sunlight: "",
  water: "",
  pets: "",
  fetchStatus: {
    contact: {},
    plant: {},
    plants: {}
  },
  error: {
    status: false,
    text: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SUNLIGHT:
      return {
        ...state,
        sunlight: action.payload.value
      };
    case SET_WATER:
      return {
        ...state,
        water: action.payload.value
      };
    case SET_PETS:
      return {
        ...state,
        pets: action.payload.value
      };
    case UPDATE_ERROR:
      return {
        ...state,
        error: {
          status: action.payload.status,
          text: action.payload.text
        }
      };
    case UPDATE_FETCH_STATUS:
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          [action.payload.type]: action.payload.status
        }
      };
    default:
      return state;
  }
}
