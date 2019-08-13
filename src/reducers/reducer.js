import {combineReducers} from "redux";

import filterTracks from './filterTracks';
import tracks from './tracks';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    filterTracks,
    tracks,
});