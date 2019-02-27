import React from "react";
import moment from "moment";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();
const ICON_URL = env.REACT_APP_ICON_URL;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Weather = props => {
  const {
    name,
    weather,
    dt,
    sys: { country },
    main: { temp }
  } = props;
  const { description, icon } = weather[0];
  const datetime = moment
    .unix(dt)
    .local()
    .format("HH:mm MMM DD");
  return (
    <>
      <h3>
        Now in {name}, {country}
      </h3>
      <h4>
        <img
          src={`${ICON_URL}/${icon}.png`}
          alt={`Weather in ${name}, ${country}`}
          style={{ verticalAlign: "middle" }}
        />
        {Math.round(temp)} °C
      </h4>
      <p>{capitalizeFirstLetter(description)}</p>
      <span>{datetime}</span>
    </>
  );
};

export default Weather;
