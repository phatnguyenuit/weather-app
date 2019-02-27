import React, { Component } from "react";

import CityList from "../../components/CityList";
import { Container } from "./styled.js";
import cityList from "./city.json";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <h2>Please click city for view detail weather</h2>
        <CityList cityList={cityList} />
      </Container>
    );
  }
}

export default HomePage;
