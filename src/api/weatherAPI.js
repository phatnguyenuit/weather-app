import Axios from "axios";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();
const API_URL = env.REACT_APP_API_URL;
const API_KEY = env.REACT_APP_API_KEY;

export function getWeather(id) {
  return Axios.request({
    method: "get",
    url: `${API_URL}/weather?id=${id}&units=metric&appid=${API_KEY}`
  });
}

export function getWeatherForecast(id) {
  return Axios.request({
    method: "get",
    url: `${API_URL}/forecast?id=${id}&units=metric&appid=${API_KEY}`
  });
}
