import { combineReducers } from 'redux';
import givenReducer from './given';
import componentsReducer from "./components";

const rootReducer = combineReducers({
    givenState: givenReducer,
    componentsState:componentsReducer
});

export default rootReducer;