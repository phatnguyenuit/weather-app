import React from "react";

import { Link } from 'react-router-dom';
import MuiLink from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const ListItem = props => {
  return (
    <Paper>
      <Box p={1}>
        <Link to={`/detail/${props.id}`} component={MuiLink}>
          <span>
            <strong>{props.value}</strong>
          </span>
        </Link>
      </Box>
    </Paper>
  );
};

const CityList = props => {
  const cityList = props.cityList;
  return cityList.map(city => (
    <ListItem key={city.id} value={city.name} id={city.id} />
  ));
};

export default CityList;
