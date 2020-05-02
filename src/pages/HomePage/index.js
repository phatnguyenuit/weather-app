import React, { Component } from "react";

import CityList from "components/CityList";
import { Container } from "./styled.js";
import cityList from "./city.json";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Please click city to view weather details</h2>
        <Container>
          <CityList cityList={cityList} />
        </Container>
      </div>
    );
  }
}

export default HomePage;
