import React, { Component } from 'react';
import Forecast from '../../components/Forecast';
import Weather from '../../components/Weather';
import { Container } from './styled';

class DetailPage extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id: cityID }
      }
    } = this.props;
    this.props.getWeatherWatcher(cityID);
  }
  render() {
    const { error, loading, weather, forecast } = this.props;
    return (
      <Container>
        {loading && <p>Loading....</p>}
        {weather && <Weather {...weather} />}
        {forecast && <Forecast {...forecast} />}
        {error && (
          <p>
            There is an error when requesting data: <b>{error}</b>
          </p>
        )}
      </Container>
    );
  }
}

export default DetailPage;
