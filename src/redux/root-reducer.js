import { combineReducers } from 'redux';
import regionReducer from './regions/region-reducer';
import authenticationReducer from './authentication/authenticationReducer';
import touristReducer from './touristsites/touristsite-reducer';

const rootReducer = combineReducers({
  regions: regionReducer,
  authentication: authenticationReducer,
  sites: touristReducer,
});

export default rootReducer;
