import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import moment from "moment";
import runtimeEnv from "@mars/heroku-js-runtime-env";

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

    const dt_str = moment
      .unix(dt)
      .local()
      .format("MMM DD");
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
              <Grid container spacing={24}>
                {date_items.map(forecast => {
                  const {
                    dt,
                    weather,
                    main: { temp, temp_max, temp_min }
                  } = forecast;
                  return (
                    <Grid item key={dt}>
                      <Paper style={{ padding: "30px" }}>
                        <p>
                          {moment
                            .unix(dt)
                            .local()
                            .format("HH:mm")}
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
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Forecast;
