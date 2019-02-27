import { GET_WEATHER__WATCHER } from "./type";

export function getWeatherWatcher(id) {
  return { type: GET_WEATHER__WATCHER, payload: id };
}
