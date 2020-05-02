import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import weatherSaga from './sagas/weatherSaga/reducer';

const reducers = (history) =>
	combineReducers({
		weatherSaga,
		router: connectRouter(history),
	});

export default reducers;
