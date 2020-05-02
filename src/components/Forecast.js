import React from "react";

import dayjs from "dayjs";
import styled from "styled-components";
import runtimeEnv from "@mars/heroku-js-runtime-env";

import Paper from "@material-ui/core/Paper";


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(150px, 1fr) );
  grid-gap: 24px;
  padding-right: 16px;
`;


const env = runtimeEnv();
const ICON_URL = env.REACT_APP_ICON_URL;

const Forecast = props => {
  const {
    list,
    city: { name, country }
  } = props;

  const groupedByDate = {};
  list.forEach(forecast => {
    const { dt } = forecast;


    const dt_str = dayjs.unix(dt).format("MMM DD");
    let currentGroup = groupedByDate[dt_str] || [];
    currentGroup.push(forecast);
    groupedByDate[dt_str] = currentGroup;
  });

  return (
    <>
      <h3>
        Forecast in {name}, {country} in the next 5 days
      </h3>
      <ul>
        {Object.keys(groupedByDate).map(date_key => {
          let date_items = groupedByDate[date_key] || [];
          return (
            <div key={date_key}>
              <p>
                <strong>{date_key}</strong>
              </p>
              <Container>
                {date_items.map(forecast => {
                  const {
                    dt,
                    weather,
                    main: { temp, temp_max, temp_min }
                  } = forecast;
                  return (
                    <Paper style={{ padding: "30px" }} key={dt}>
                      <p>
                        {dayjs.unix(dt).format("HH:mm")}
                      </p>
                      <img
                        src={`${ICON_URL}/${weather[0].icon}.png`}
                        alt={`Weather forecast in ${name}, ${country}`}
                      />

                      <p>
                        <strong>Temp: {temp} °C</strong>
                      </p>
                      <p>
                        <strong>Max: {temp_max} °C</strong>
                      </p>
                      <p>
                        <strong>Min: {temp_min} °C</strong>
                      </p>
                    </Paper>
                  );
                })}
              </Container>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Forecast;
