import { combineReducers } from "redux";
import CounterReducer from './CounterRedux/CounterReducer'
import UserReducer from "./UserRedux/UserReducer";
const rootReducer=combineReducers({counting:CounterReducer,user:UserReducer})
export default rootReducer