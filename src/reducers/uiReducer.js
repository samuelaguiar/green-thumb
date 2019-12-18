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

const initialState = {
  started: false,
  sunlight: "",
  water: "",
  pets: "",
  fetchStatus: {
    contact: { sent: false },
    plant: {},
    plants: {}
  },
  error: {
    status: false,
    text: ""
  },
  foward: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_APP:
      return {
        ...state,
        started: true
      };
    case SET_FOWARD:
      return {
        ...state,
        foward: action.payload.isFoward
      };
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
    case RESET_FILTERS:
      return {
        ...state,
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
    case RESET_CONTACT:
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          contact: { sent: false }
        }
      };
    default:
      return state;
  }
}
