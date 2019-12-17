import { GET_PLANT, GET_PLANTS, POST_CONTACT } from "../constants/data";
import { all, put, takeLatest } from "redux-saga/effects";
import { plantRecieved, plantsRecieved } from "../actions/dataActions";

import axios from "axios";
import { updateFetchStatus } from "../actions/uiActions";

function* getPlant(action) {
  const { id } = action.payload;

  const plant = yield axios
    .get(
      `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service/plant?id=${id}`
    )
    .then(res => res);

  // yield put(updateFetchStatus(type, status));
  // yield put(plantRecieved(data));
}

function* getPlants(action) {
  const { sunlight, water, pets } = action.payload;

  const plants = yield axios
    .get(
      `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${sunlight}&water=${water}&pets=${pets}`
    )
    .then(res => res);

  // yield put(updateFetchStatus(type, status));
  // yield put(plantsRecieved(data));
}

function* actionWatcher() {
  yield takeLatest(GET_PLANT, getPlant);
  yield takeLatest(GET_PLANTS, getPlants);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
