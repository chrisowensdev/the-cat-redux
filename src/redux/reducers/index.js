import { combineReducers } from 'redux';
import catReducer from './cats';

export default combineReducers({
    cats: catReducer,
});
