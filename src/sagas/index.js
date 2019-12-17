import { FETCH_PLANT, FETCH_PLANTS, POST_CONTACT } from "../constants/data";
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
    .then(res => res)
    .catch(err => err.response);

  if (plant.status === 200) {
    yield put(plantRecieved(plant.data));
    yield put(updateFetchStatus("plant", { status: plant.status }));
  } else {
    yield put(updateFetchStatus("plant", plant.data));
  }
}

function* getPlants(action) {
  const { sunlight, water, pets } = action.payload;

  const plants = yield axios
    .get(
      `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${sunlight}&water=${water}&pets=${pets}`
    )
    .then(res => res)
    .catch(err => err.response);

  if (plants.status === 200) {
    yield put(plantsRecieved(plants.data));
    yield put(updateFetchStatus("plants", { status: plants.status }));
  } else {
    yield put(updateFetchStatus("plants", plants.data));
  }
}

function* postContact(action) {
  const { name, email, id } = action.payload;

  const contact = yield axios
    .post(
      "https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service",
      { name, email, id }
    )
    .then(res => res)
    .catch(err => err.response);

  if (contact.status === 200) {
    yield put(
      updateFetchStatus("contact", { status: contact.status, sent: true })
    );
  } else {
    yield put(updateFetchStatus("contact", { ...contact.data, sent: true }));
  }
}

function* actionWatcher() {
  yield takeLatest(FETCH_PLANT, getPlant);
  yield takeLatest(FETCH_PLANTS, getPlants);
  yield takeLatest(POST_CONTACT, postContact);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
