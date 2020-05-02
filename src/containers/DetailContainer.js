import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DetailPage from 'pages/DetailPage';
import { getWeatherWatcher } from 'redux/sagas/weatherSaga/actions';

const mapStateToProps = state => {
  const { loading, error, weather, forecast } = state.weatherSaga;
  return {
    loading,
    error,
    weather,
    forecast
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getWeatherWatcher }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);
