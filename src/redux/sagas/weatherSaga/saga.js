import {
  GET_WEATHER__ERROR,
  GET_WEATHER__SUCESS,
  GET_WEATHER__WATCHER
} from "./type";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { getWeather, getWeatherForecast } from "../../../api/weatherAPI";

function* getWeatherWorker({ payload: cityID }) {
  try {
    const [weather, forecast] = yield all([
      call(getWeather, cityID),
      call(getWeatherForecast, cityID)
    ]);
    yield put({
      type: GET_WEATHER__SUCESS,
      payload: { weather: weather.data, forecast: forecast.data }
    });
  } catch (e) {
    yield put({ type: GET_WEATHER__ERROR, payload: e.message });
  }
}

export default function* weatherSaga() {
  yield takeLatest(GET_WEATHER__WATCHER, getWeatherWorker);
}
