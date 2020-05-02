import { GET_WEATHER__ERROR, GET_WEATHER__SUCESS, GET_WEATHER__WATCHER } from './type';

const getInitialState = () => ({
	loading: false,
	error: '',
	weather: null,
	forecast: null,
});

export default (prevState = getInitialState(), { type, payload }) => {
	switch (type) {
		// weather
		case GET_WEATHER__WATCHER:
			return { ...prevState, loading: true };
		case GET_WEATHER__SUCESS: {
			const { weather, forecast } = payload;
			return { ...prevState, weather, forecast, loading: false };
		}
		case GET_WEATHER__ERROR: {
			return { ...prevState, loading: false, error: payload };
		}
		default:
			return prevState;
	}
};
