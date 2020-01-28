
import filmsReducer from './filmReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

//Combine all the sub reducers
const rootReducer = combineReducers({
    search: searchReducer,
    films: filmsReducer
})

export default rootReducer