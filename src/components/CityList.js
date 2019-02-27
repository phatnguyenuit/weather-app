import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";

const ListItem = props => {
  return (
    <Grid item>
      <Paper style={{ padding: "20px" }}>
        <p>
          <strong>{props.value}</strong>
        </p>
        <Button
          href={`/detail/${props.id}`}
          color="primary"
          variant="text"
          fullWidth
        >
          Detail
        </Button>
      </Paper>
    </Grid>
  );
};

const CityList = props => {
  const cityList = props.cityList;
  return (
    <Grid container spacing={24}>
      {cityList.map(city => (
        <ListItem key={city.id} value={city.name} id={city.id} />
      ))}
    </Grid>
  );
};

export default CityList;
